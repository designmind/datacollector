/*
 * Copyright 2017 StreamSets Inc.
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
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.ByteArraySerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class KafkaProducer09 extends BaseKafkaProducer09 {

  private static final Logger LOG = LoggerFactory.getLogger(KafkaProducer09.class);

  public static final String ACKS_DEFAULT = "1";
  public static final String RANDOM_PARTITIONER_CLASS = "com.streamsets.pipeline.kafka.impl.RandomPartitioner";
  public static final String ROUND_ROBIN_PARTITIONER_CLASS = "com.streamsets.pipeline.kafka.impl.RoundRobinPartitioner";
  public static final String EXPRESSION_PARTITIONER_CLASS = "com.streamsets.pipeline.kafka.impl.ExpressionPartitioner";

  protected static final String KAFKA_CONFIG_BEAN_PREFIX = "conf.";
  protected static final String KAFKA_CONFIGS = "kafkaProducerConfigs";

  private final String metadataBrokerList;
  private final Map<String, Object> kafkaProducerConfigs;
  private final PartitionStrategy partitionStrategy;
  protected final boolean overrideConfigurations;

  public KafkaProducer09(
      String metadataBrokerList,
      Map<String, Object> kafkaProducerConfigs,
      PartitionStrategy partitionStrategy,
      boolean sendWriteResponse,
      boolean overrideConfigurations
  ) {
    super(sendWriteResponse);
    this.metadataBrokerList = metadataBrokerList;
    this.kafkaProducerConfigs = kafkaProducerConfigs;
    this.partitionStrategy = partitionStrategy;
    this.overrideConfigurations = overrideConfigurations;
  }

  @Override
  protected Producer<Object, byte[]> createKafkaProducer() {
    Properties props = new Properties();
    // bootstrap servers
    props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, metadataBrokerList);
    // request.required.acks
    props.put(ProducerConfig.ACKS_CONFIG, ACKS_DEFAULT);
    // partitioner.class
    props.put(
        KafkaConstants.KEY_SERIALIZER_CLASS_CONFIG,
        kafkaProducerConfigs.get(KafkaConstants.KEY_SERIALIZER_CLASS_CONFIG));
    props.put(KafkaConstants.VALUE_SERIALIZER_CLASS_CONFIG, ByteArraySerializer.class);
    configurePartitionStrategy(props, partitionStrategy);
    addUserConfiguredProperties(kafkaProducerConfigs, props);
    return new KafkaProducer<>(props);
  }

  @Override
  protected StageException createWriteException(Exception e) {
    // error writing this record to kafka broker.
    LOG.error(KafkaErrors.KAFKA_50.getMessage(), e.toString(), e);
    // throwing of this exception results in stopped pipeline as it is not handled by KafkaTarget
    // Retry feature at the pipeline level will re attempt
    return new StageException(KafkaErrors.KAFKA_50, e.toString(), e);
  }

  private void configurePartitionStrategy(Properties props, PartitionStrategy partitionStrategy) {
    if (partitionStrategy == PartitionStrategy.RANDOM) {
      props.put(ProducerConfig.PARTITIONER_CLASS_CONFIG, RANDOM_PARTITIONER_CLASS);
    } else if (partitionStrategy == PartitionStrategy.ROUND_ROBIN) {
      props.put(ProducerConfig.PARTITIONER_CLASS_CONFIG, ROUND_ROBIN_PARTITIONER_CLASS);
    } else if (partitionStrategy == PartitionStrategy.EXPRESSION) {
      props.put(ProducerConfig.PARTITIONER_CLASS_CONFIG, EXPRESSION_PARTITIONER_CLASS);
    } else if (partitionStrategy == PartitionStrategy.DEFAULT) {
      // org.apache.kafka.clients.producer.internals.DefaultPartitioner
    }
  }

  public void validate(List<Stage.ConfigIssue> issues, Stage.Context context) {
    validateAdditionalProperties(issues, context);
  }

  protected void addUserConfiguredProperties(Map<String, Object> kafkaClientConfigs, Properties props) {
    //The following options, if specified, are ignored : "bootstrap.servers", "partitioner.class"
    if (kafkaClientConfigs != null && !kafkaClientConfigs.isEmpty()) {
      if (!overrideConfigurations) {
        kafkaClientConfigs.remove(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG);
        kafkaClientConfigs.remove(ProducerConfig.PARTITIONER_CLASS_CONFIG);
      }

      for (Map.Entry<String, Object> producerConfig : kafkaClientConfigs.entrySet()) {
        props.put(producerConfig.getKey(), producerConfig.getValue());
      }
    }
  }

  protected void validateAdditionalProperties(List<Stage.ConfigIssue> issues, Stage.Context context) {
    Set<String> forbiddenProperties = ImmutableSet.of(
        ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,
        ProducerConfig.PARTITIONER_CLASS_CONFIG
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
