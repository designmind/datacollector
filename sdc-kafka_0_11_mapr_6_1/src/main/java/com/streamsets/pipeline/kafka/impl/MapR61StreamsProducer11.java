/*
 * Copyright 2019 StreamSets Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.streamsets.pipeline.kafka.impl;


import com.google.common.collect.ImmutableSet;
import com.streamsets.pipeline.api.Stage;
import com.streamsets.pipeline.api.StageException;
import com.streamsets.pipeline.kafka.api.KafkaDestinationGroups;
import com.streamsets.pipeline.kafka.api.PartitionStrategy;
import com.streamsets.pipeline.lib.kafka.KafkaConstants;
import com.streamsets.pipeline.lib.kafka.KafkaErrors;
import com.streamsets.pipeline.lib.maprstreams.MapRStreamsErrors;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class MapR61StreamsProducer11 extends KafkaProducer09 {

  private static final Logger LOG = LoggerFactory.getLogger(MapR61StreamsProducer11.class);

  public static final String KEY_SERIALIZER_DEFAULT = "org.apache.kafka.common.serialization.StringSerializer";
  public static final String VALUE_SERIALIZER_DEFAULT = "org.apache.kafka.common.serialization.ByteArraySerializer";
  public static final String RANDOM_PARTITIONER_CLASS = "com.streamsets.pipeline.kafka.impl.Mapr61RandomPartitioner";
  public static final String ROUND_ROBIN_PARTITIONER_CLASS = "com.streamsets.pipeline.kafka.impl.Mapr61RoundRobinPartitioner";
  public static final String EXPRESSION_PARTITIONER_CLASS = "com.streamsets.pipeline.kafka.impl.Mapr61ExpressionPartitioner";
  public static final String STREAMS_PARTITIONER_CLASS = "streams.partitioner.class";

  private final Map<String, Object> kafkaProducerConfigs;
  private final PartitionStrategy partitionStrategy;

  public MapR61StreamsProducer11(
      String metadataBrokerList,
      Map<String, Object> kafkaProducerConfigs,
      PartitionStrategy partitionStrategy,
      boolean sendWriteResponse,
      boolean overrideConfigurations
  ) {
    super(metadataBrokerList, kafkaProducerConfigs, partitionStrategy, sendWriteResponse, overrideConfigurations);
    this.kafkaProducerConfigs = kafkaProducerConfigs;
    this.partitionStrategy = partitionStrategy;
  }

  private void configurePartitionStrategy(Properties props, PartitionStrategy partitionStrategy) {
    if (partitionStrategy == PartitionStrategy.RANDOM) {
      props.put(STREAMS_PARTITIONER_CLASS, RANDOM_PARTITIONER_CLASS);
    } else if (partitionStrategy == PartitionStrategy.ROUND_ROBIN) {
      props.put(STREAMS_PARTITIONER_CLASS, ROUND_ROBIN_PARTITIONER_CLASS);
    } else if (partitionStrategy == PartitionStrategy.EXPRESSION) {
      props.put(STREAMS_PARTITIONER_CLASS, EXPRESSION_PARTITIONER_CLASS);
    } else if (partitionStrategy == PartitionStrategy.DEFAULT) {
      // org.apache.kafka.clients.producer.internals.DefaultPartitioner
    }
  }

  @Override
  protected void addUserConfiguredProperties(Map<String, Object> kafkaClientConfigs, Properties props) {
    //The following options, if specified, are ignored : "key.serializer" and "value.serializer"
    if (kafkaClientConfigs != null && !kafkaClientConfigs.isEmpty()) {
      kafkaClientConfigs.remove(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG);
      kafkaClientConfigs.remove(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG);

      for (Map.Entry<String, Object> producerConfig : kafkaClientConfigs.entrySet()) {
        props.put(producerConfig.getKey(), producerConfig.getValue());
      }
    }
  }

  @Override
  protected Producer<Object, byte[]> createKafkaProducer() {
    Properties props = new Properties();
    // Following are the supported list of kafka producer options
    //  1. key.serializer
    //  2. value.serializer
    //  3. buffer.memory
    //  4. client.id
    //  5. metadata.max.age.ms

    // 'bootstrap.servers' option is not supported in mapr streams. Cluster details are discovered from the
    // file mapr-clusters.conf.
    // 'acks' configuration is ignored. All writes in MapR Streams are synchronous, and number of replicas is
    // determined at the volume level, with a default of 3.

    // key and value serializers
    props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,
        kafkaProducerConfigs.get(KafkaConstants.KEY_SERIALIZER_CLASS_CONFIG));
    props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, VALUE_SERIALIZER_DEFAULT);
    // configure the StreamsPartitioner implementation
    configurePartitionStrategy(props, partitionStrategy);
    addUserConfiguredProperties(kafkaProducerConfigs, props);
    return new KafkaProducer<>(props);
  }

  @Override
  protected StageException createWriteException(Exception e) {
    // error writing this record to kafka broker.
    LOG.error(MapRStreamsErrors.MAPRSTREAMS_20.getMessage(), e.toString(), e);
    // throwing of this exception results in stopped pipeline as it is not handled by KafkaTarget
    // Retry feature at the pipeline level will re attempt
    return new StageException(MapRStreamsErrors.MAPRSTREAMS_20, e.toString(), e);
  }

  protected void validateAdditionalProperties(List<Stage.ConfigIssue> issues, Stage.Context context) {
    Set<String> forbiddenProperties = ImmutableSet.of(
        STREAMS_PARTITIONER_CLASS,
        ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,
        ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG

    );
    if (!(overrideConfigurations || Collections.disjoint(forbiddenProperties, kafkaProducerConfigs.keySet()))) {
      issues.add(context.createConfigIssue(
          KafkaDestinationGroups.KAFKA.name(),
          KAFKA_CONFIG_BEAN_PREFIX + KAFKA_CONFIGS,
          KafkaErrors.KAFKA_14)
      );
    }
  }
}
