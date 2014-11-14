/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.streamsets.pipeline.validation;

import com.streamsets.pipeline.config.PipelineConfiguration;
import com.streamsets.pipeline.runner.MockStages;
import com.streamsets.pipeline.stagelibrary.StageLibraryTask;
import org.junit.Assert;
import org.junit.Test;

public class TestPipelineConfigurationValidator {

  @Test
  public void testValidNames() {
    Assert.assertFalse(PipelineConfigurationValidator.isValidName(null));
    Assert.assertFalse(PipelineConfigurationValidator.isValidName(""));
    Assert.assertFalse(PipelineConfigurationValidator.isValidName(" "));
    Assert.assertFalse(PipelineConfigurationValidator.isValidName("$"));
    Assert.assertFalse(PipelineConfigurationValidator.isValidName(" a"));
    Assert.assertFalse(PipelineConfigurationValidator.isValidName("a "));
    Assert.assertTrue(PipelineConfigurationValidator.isValidName("a"));
    Assert.assertTrue(PipelineConfigurationValidator.isValidName("_azAZ09"));
  }

  @Test
  public void testValidConfiguration() {
    StageLibraryTask lib = MockStages.createStageLibrary();
    PipelineConfiguration conf = MockStages.createPipelineConfigurationSourceProcessorTarget();
    PipelineConfigurationValidator validator = new PipelineConfigurationValidator(lib, "name", conf);
    Assert.assertTrue(validator.validate());
    Assert.assertTrue(validator.canPreview());
    Assert.assertFalse(validator.getIssues().hasIssues());
    Assert.assertTrue(validator.getOpenLanes().isEmpty());
  }
}
