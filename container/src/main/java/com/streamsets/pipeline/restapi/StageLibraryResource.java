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
package com.streamsets.pipeline.restapi;

import com.streamsets.pipeline.config.PipelineDefinition;
import com.streamsets.pipeline.config.StageDefinition;
import com.streamsets.pipeline.stagelibrary.StageLibraryTask;
import com.streamsets.pipeline.container.LocaleInContext;
import org.apache.commons.io.IOUtils;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.StreamingOutput;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.*;

@Path("/v1/definitions")
public class StageLibraryResource {
  private static final String DEFAULT_ICON_FILE = "PipelineDefinition-bundle.properties";
  private final StageLibraryTask stageLibrary;

  @Inject
  public StageLibraryResource(StageLibraryTask stageLibrary) {
    this.stageLibrary = stageLibrary;
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Response getDefinitions() {
    //The definitions to be returned
    Map<String, List<Object>> definitions = new HashMap<String, List<Object>>();

    //Populate the definitions with all the stage definitions
    List<StageDefinition> stageDefinitions = stageLibrary.getStages();
    List<Object> stages = new ArrayList<Object>(stageDefinitions.size());
    stages.addAll(stageDefinitions);
    definitions.put("stages", stages);

    //Populate the definitions with the PipelineDefinition
    List<Object> pipeline = new ArrayList<Object>(1);
    pipeline.add(new PipelineDefinition(LocaleInContext.get()));
    definitions.put("pipeline", pipeline);
    return Response.ok().type(MediaType.APPLICATION_JSON).entity(definitions).build();
  }

  @GET
  @Path("/stages/icon")
  @Produces(MediaType.APPLICATION_SVG_XML)
  public Response getIcon(@QueryParam("name") String name,
                          @QueryParam("library") String library,
                          @QueryParam("version") String version) {
    StageDefinition stage = stageLibrary.getStage(library, name, version);
    String iconFile = null;
    if(stage.getIcon() != null && !stage.getIcon().isEmpty()) {
      iconFile = stage.getIcon();
    } else {
      iconFile = DEFAULT_ICON_FILE;
    }

    final InputStream resourceAsStream = stage.getStageClassLoader().getResourceAsStream(
      iconFile);
    StreamingOutput stream = new StreamingOutput() {
      @Override
      public void write(OutputStream output) throws IOException, WebApplicationException {
        try {
          IOUtils.copy(resourceAsStream, output);
        } catch (Exception e) {
          throw new WebApplicationException(e);
        }
      }
    };
    return Response.ok().type(MediaType.APPLICATION_SVG_XML_TYPE).entity(stream).build();
  }
}
