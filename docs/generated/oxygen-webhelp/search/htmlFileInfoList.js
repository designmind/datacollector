fil = new Array();
fil["0"]= "Administration/Administration_title.html@@@Administration@@@...";
fil["1"]= "Administration/RESTResponse.html@@@REST Response@@@You can view REST response JSON data for different aspects of the Data Collector, such as pipeline configuration information or monitoring details...";
fil["2"]= "Administration/ShuttingDown.html@@@Shutting Down the Data Collector@@@Shut down and restart the Data Collector to apply changes to the Data Collector configuration file, environment configuration file, or user logins. To use the command line to shut down the Dat...";
fil["3"]= "Administration/ViewingDCConfigs.html@@@Viewing Data Collector Configuration Properties@@@To view Data Collector configuration properties, click Administration &gt; Configuration . For details about the configuration properties or to edit the configuration file, see Configuring the Dat...";
fil["4"]= "Administration/ViewingDirectories.html@@@Viewing Data Collector Directories@@@You can view the directories that the Data Collector uses. You might check the directories being used to access a file in the directory or to increase the amount of available space for a directory...";
fil["5"]= "Administration/ViewingJVMMetrics.html@@@Viewing JVM Metrics@@@The Data Collector provides JVM metrics for the Data Collector...";
fil["6"]= "Administration/ViewingLogData.html@@@Viewing Data Collector Logs@@@You can view and download log data. When you download log data, you can select the file to download. To view log data for the Data Collector , click Administration &gt; Logs . The console displays...";
fil["7"]= "Advanced_Config/AdvancedPipelineConfig-title.html@@@Advanced Configuration@@@...";
fil["8"]= "Advanced_Config/RuntimeProperties.html@@@Runtime Properties@@@Runtime properties are properties that you define in a file local to the Data Collector and use from within a pipeline. With runtime properties, you can define different sets of values for different Data Collectors...";
fil["9"]= "Advanced_Config/RuntimeResources.html@@@Runtime Resources@@@Similar to runtime properties, runtime resources are values that you define in a file local to the Data Collector and call from within a pipeline. But with runtime resources, you can restrict the permissions for the files to secure sensitive information. Use runtime properties to load sensitive information from files at runtime...";
fil["10"]= "Alerts/Alerts_title.html@@@Alerts@@@...";
fil["11"]= "Alerts/DataAlerts.html@@@Data Rules and Alerts@@@Data rules define the information that you want to see about the data that passes between stages. You can create data rules based on any link in the pipeline. You can also create alerts based on the data rules...";
fil["12"]= "Alerts/EmailforAlerts-Configuring.html@@@Configuring Email for Alerts@@@You can define the email addresses to receive metric and data alerts. When an alert triggers an email, the Data Collector sends an email to every address in the list...";
fil["13"]= "Alerts/MetricAlerts.html@@@Metric Alerts@@@Create a metric alert to receive monitoring or email alerts based on metric rules. You can configure metric alerts when you configure or monitor a pipeline. You can edit or delete alerts when they are not active...";
fil["14"]= "Apx-GrokPatterns/DateTimePatterns.html@@@Date and Time Grok Patterns@@@You can use the following date and time grok patterns to define the structure of log data: MONTH...";
fil["15"]= "Apx-GrokPatterns/GeneralPatterns.html@@@General Grok Patterns@@@You can use the following general grok patterns to define the structure of log data: USER %{USERNAME} USERNAME [a-zA-Z0-9._-]+ BASE10NUM (?&lt;![0-9.+-])(?&gt;[+-]?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9...";
fil["16"]= "Apx-GrokPatterns/GrokPatterns.html@@@Grok Patterns@@@You can use the grok patterns in this appendix to define the structure of log data. You can use a single pattern or use several patterns to define a larger pattern. You can also use valid sections of patterns to define a custom pattern...";
fil["17"]= "Apx-GrokPatterns/GrokPatterns_title.html@@@Grok Patterns@@@...";
fil["18"]= "Apx-GrokPatterns/JavaPatterns.html@@@Java Grok Patterns@@@You can use the following Java-related grok patterns to define the structure of log data: JAVACLASS (?:[a-zA-Z$_][a-zA-Z$_0-9]*\\.)*[a-zA-Z$_][a-zA-Z$_0-9]* JAVAFILE (?:[A-Za-z0-9_. -]+) A space...";
fil["19"]= "Apx-GrokPatterns/LogPatterns.html@@@Log Grok Patterns@@@You can use the following log-related grok patterns to define the structure of log data: SYSLOGTIMESTAMP %{MONTH} +%{MONTHDAY} %{TIME} PROG (?:[\\w._/%-]+) SYSLOGPROG...";
fil["20"]= "Apx-GrokPatterns/NetworkingPatterns.html@@@Networking Grok Patterns@@@You can use the following networking-related grok patterns to define the structure of log data: MAC (?:%{CISCOMAC}|%{WINDOWSMAC}|%{COMMONMAC}) CISCOMAC (?:(?:[A-Fa-f0-9]{4}\\.){2}[A-Fa-f0-9]{4...";
fil["21"]= "Apx-GrokPatterns/PathPatterns.html@@@Path Grok Patterns@@@You can use the following path grok patterns to define the structure of log data: PATH (?:%{UNIXPATH}|%{WINPATH}) UNIXPATH (?&gt;/(?&gt;[\\w_%!$@:.,~-]+|\\\\.)*)+ TTY...";
fil["22"]= "Apx-RegEx/Examples.html@@@Regex Examples@@@Masking credit card numbers, except for one group You can use the following regular expression in the Field Masker to mask all numbers in a credit or debit card except for the last 4 digits...";
fil["23"]= "Apx-RegEx/QuickReference.html@@@Quick Reference@@@The following table includes some details you might find helpful when creating a regular expression: Character Description Examples [ ] Use brackets to define character classes. [0-9][0-9][0-9...";
fil["24"]= "Apx-RegEx/RegEx-Overview.html@@@Regular Expressions@@@A regular expression, also known as regex, describes a pattern for a string...";
fil["25"]= "Apx-RegEx/RegEx-Title.html@@@Regular Expressions@@@...";
fil["26"]= "Apx-RegEx/Regex-inthePipeline.html@@@Regular Expressions in the Pipeline@@@Though generally not required, you can use Java-based regular expressions at various locations within a pipeline to define, search for, or manipulate strings...";
fil["27"]= "Cluster_Mode/ClusterPipelines.html@@@Cluster Pipelines@@@A cluster pipeline is a pipeline that runs in cluster execution mode. You can run a pipeline in standalone execution mode or cluster execution mode...";
fil["28"]= "Cluster_Mode/ClusterPipelines_title.html@@@Cluster Pipelines@@@...";
fil["29"]= "Cluster_Mode/HDFSRequirements.html@@@HDFS Requirements@@@Use the following requirements to configure a cluster mode pipeline to read from HDFS: Install HDFS. Install the Data Collector on the YARN gateway node. In the pipeline properties, on the General...";
fil["30"]= "Cluster_Mode/KafkaRequirements.html@@@Kafka Requirements@@@Use the following requirements to configure a cluster mode pipeline to read from a Kafka cluster: Verify the installation of Kafka, Spark Streaming, and YARN. Install the Data Collector on a Spark and...";
fil["31"]= "Data_Preview/DataCollectorWindow-Preview.html@@@Data Collector Console - Preview Mode@@@You can use the Data Collector console to view how data passes through the pipeline...";
fil["32"]= "Data_Preview/DataPreview.html@@@Data Preview@@@You can preview complete and incomplete pipelines. The Data Preview icon becomes active when data preview is available...";
fil["33"]= "Data_Preview/DataPreview_Title.html@@@Data Preview@@@...";
fil["34"]= "Data_Preview/EditingPreviewData.html@@@Editing Preview Data@@@You can edit preview data to view how a stage or group of stages processes the changed data. Edit preview data to test for data conditions that might not appear in preview data set...";
fil["35"]= "Data_Preview/EditingProperties.html@@@Editing Properties@@@In data preview, you can edit stage properties to see how the changes affect preview data. For example, you might edit the expression in an Expression Evaluator to see verify how the expression alters dat...";
fil["36"]= "Data_Preview/PreviewingMultipleStages.html@@@Previewing Multiple Stages@@@You can preview data for a group of linked stages within a pipeline...";
fil["37"]= "Data_Preview/PreviewingaSingleStage.html@@@Previewing a Single Stage@@@You can preview data for a single stage. In the Preview panel, you can review the values for each record to determine if the stage transforms data as expected. Above the pipeline canvas, click the...";
fil["38"]= "Destinations/Cassandra.html@@@Cassandra@@@Due to Cassandra requirements, the data types of the incoming fields must match the data types of the corresponding Cassandra columns. When appropriate, use a Type Converter processor earlier in the pipeline to convert data types...";
fil["39"]= "Destinations/Destinations-title.html@@@Destinations@@@...";
fil["40"]= "Destinations/Destinations_overview.html@@@Destinations@@@A destination stage represents the target for a pipeline. You can use one or more destinations in a pipeline...";
fil["41"]= "Destinations/Elasticsearch.html@@@Elasticsearch@@@The Elasticsearch destination writes data to an Elasticsearch cluster. The Elasticsearch destination writes each record to Elasticsearch as a document...";
fil["42"]= "Destinations/Flume.html@@@Flume@@@The Flume destination writes data to a Flume source. When you write data to Flume, you pass data to a Flume client. The Flume client passes data to hosts based on client configuration properties...";
fil["43"]= "Destinations/HBase.html@@@HBase@@@You can configure the destination to use an HBase user to write data to HBase...";
fil["44"]= "Destinations/HadoopFS-destination.html@@@Hadoop FS@@@You can define a time limit for records to be written to its associated output directory. Any record that arrives past this limit is considered late. This limit is appropriate when you use the time of the record as the time basis...";
fil["45"]= "Destinations/KProducer.html@@@Kafka Producer@@@You can add custom Kafka configuration properties to the Kafka Producer...";
fil["46"]= "Destinations/KinProducer.html@@@Kinesis Producer@@@The Kinesis Producer destination writes data to an Amazon Kinesis cluster. You can write JSON or SDC Record data to Kinesis. Kinesis Producer writes JSON data to Kinesis as multiple objects. It does not write JSON arrays...";
fil["47"]= "Destinations/RPCdest.html@@@RPC@@@In an RPC destination, the RPC connections define where the destinations passes dat...";
fil["48"]= "Destinations/Solr.html@@@Solr@@@The index mode determines how the Solr destination indexes records when writing to Solr. Index mode also determines how the destination handles errors...";
fil["49"]= "Destinations/ToError.html@@@To Error@@@The To Error destination passes records to the pipeline for error handling. Use the To Error destination to send a stream of records to pipeline error handling...";
fil["50"]= "Destinations/Trash.html@@@Trash@@@The Trash destination discards records. Use the Trash destination as a visual representation of records discarded from the pipeline. Or, you might use the Trash destination during development as a temporary placeholder...";
fil["51"]= "Expression_Language/ExpressionLanguage_overview.html@@@Expression Language@@@The StreamSets expression language enables you to create expressions that evaluate or modify data. The StreamSets expression language is based on the JSP 2.0 expression language. Use the expression...";
fil["52"]= "Expression_Language/ExpressionLanguage_title.html@@@Expression Language@@@...";
fil["53"]= "Expression_Language/Functions.html@@@Functions@@@Use string functions to transform string dat...";
fil["54"]= "Expression_Language/Literals.html@@@Literals@@@The expression language includes the following literals...";
fil["55"]= "Expression_Language/Operators.html@@@Operators@@@The precedence of operators highest to lowest, left to right is as follows...";
fil["56"]= "Expression_Language/ReservedWords.html@@@Reserved Words@@@The following words are reserved for the expression language and should not be used as identifiers...";
fil["57"]= "Getting_Started/DCollector_Window.html@@@Data Collector Console@@@The Data Collector provides a console to configure pipelines, preview data, monitor pipelines, and review snapshots of dat...";
fil["58"]= "Getting_Started/GettingStarted_Title.html@@@Getting Started@@@...";
fil["59"]= "Getting_Started/LoggingIn_CreatingPipeline.html@@@Logging In and Creating a Pipeline@@@After you start the Data Collector, you can log in to the Data Collector console and create your first pipeline...";
fil["60"]= "Getting_Started/What_isa_DataCollector.html@@@What is a Data Collector?@@@Let s walk through it...";
fil["61"]= "Glossary/GlossaryOfTerms.html@@@Glossary of Terms@@@cluster execution mode Pipeline execution mode that allows you to process large volumes of data from Kafka or HDFS. cluster pipeline, cluster mode pipeline A pipeline configured to run in cluster...";
fil["62"]= "Glossary/Glossary_title.html@@@Glossary@@@...";
fil["63"]= "Install_Config/AdditionalDrivers.html@@@Additional Drivers@@@You can install additional drivers for stages...";
fil["64"]= "Install_Config/AdditionalStageLibraries.html@@@Additional Stage Libraries@@@The Data Collector includes a wide range of stages for pipeline development, but you might need additional functionality. You can install stage libraries to provide access to additional stages...";
fil["65"]= "Install_Config/DCConfig.html@@@Data Collector Configuration@@@You can use Kerberos authentication to connect to origin and destination systems, as well as YARN clusters...";
fil["66"]= "Install_Config/DCEnvironmentConfig.html@@@Data Collector Environment Configuration@@@The Data Collector provides two environment configuration files: sdc-env.sh - Use when you start the Data Collector manually. sdcd.env.sh - Use when you start the Data Collector as a service. Also...";
fil["67"]= "Install_Config/Install_Config_title.html@@@Installation and Configuration@@@...";
fil["68"]= "Install_Config/InstallationAndConfig.html@@@Installation and Configuration@@@You can install the Data Collector and start it manually or run it as a service...";
fil["69"]= "Install_Config/UsersandRoles.html@@@Users and Roles@@@The Data Collector provides several roles and a default user account based on each role. You can change or remove these accounts. You can also create new user accounts. For increased security, change the passwords for the default accounts. A production deployment of the Data Collector should integrate with intranet authentication...";
fil["70"]= "Origins/Directory.html@@@Directory@@@Configure a Directory origin to read data from files in a directory...";
fil["71"]= "Origins/FileTail.html@@@File Tail@@@File Tail can process log and text data that includes multiple lines. You might use multiple line processing to include stack traces with log data, or to process MySQL multiline logs...";
fil["72"]= "Origins/HTTPClient.html@@@HTTP Client@@@The HTTP Client origin reads JSON data from an HTTP resource URL...";
fil["73"]= "Origins/HadoopFS-origin.html@@@Hadoop FS@@@When you use an origin to read log data, you define the format of the log files to be read...";
fil["74"]= "Origins/JDBCConsumer.html@@@JDBC Consumer@@@JDBC Consumer uses offset values in the offset column to determine where to continue processing after a deliberate or unexpected stop. To ensure seamless recovery, use a primary key or indexed column as the offset column...";
fil["75"]= "Origins/JMS.html@@@JMS Consumer@@@Configure a JMS Consumer origin to read JMS messages...";
fil["76"]= "Origins/KConsumer.html@@@Kafka Consumer@@@Configure a Kafka Consumer to read data from a Kafka cluster...";
fil["77"]= "Origins/KinConsumer.html@@@Kinesis Consumer@@@You can configure the read interval for the Kinesis Consumer. The read interval determines how long Kinesis Consumer waits before requesting additional data from Kinesis shards. By default, the Kinesis Consumer waits one second between requests...";
fil["78"]= "Origins/MongoDB.html@@@MongoDB@@@You can configure the read preference that the MongoDB origin uses. The read preference determines how the origin reads data from different members of the MongoDB replica set...";
fil["79"]= "Origins/Omniture.html@@@Omniture@@@The Omniture origin processes JSON website usage reports generated by the Omniture reporting APIs. Omniture is also known as the Adobe Marketing Cloud...";
fil["80"]= "Origins/Origins_overview.html@@@Origins@@@You can preview raw source data for Directory, File Tail, and Kafka Consumer origins. Preview raw source data when reviewing the data might help with origin configuration...";
fil["81"]= "Origins/Origins_title.html@@@Origins@@@...";
fil["82"]= "Origins/RPCorigin.html@@@RPC@@@The RPC origin reads data passed from an RPC destination over the WAN. Use the RPC origin as part of an RPC destination pipeline...";
fil["83"]= "Origins/UDP.html@@@UDP Source@@@The UDP Source origin reads messages from one or more UDP ports. UDP Source generates a record for every message. UDP Source can read syslog messages, Netflow messages from NetFlow Version 5, and collectd messages...";
fil["84"]= "Pipeline_Configuration/ConfiguringAPipeline.html@@@Configuring a Pipeline@@@Configure a pipeline to define the stream of data. After you configure the pipeline, you can start the pipeline...";
fil["85"]= "Pipeline_Configuration/DataCollectorWindow-Config.html@@@Data Collector Console - Edit Mode@@@The following image shows the Data Collector console when you configure a pipeline: Area / Icon Name Description 1 Pipeline canvas Displays the pipeline. Use to configure the pipeline data flow. 2...";
fil["86"]= "Pipeline_Configuration/ErrorHandling.html@@@Error Record Handling@@@You can configure error record handling at a stage level and at a pipeline level...";
fil["87"]= "Pipeline_Configuration/Expressions.html@@@Expression Configuration@@@Use the following information and tips when you invoke expression completion...";
fil["88"]= "Pipeline_Configuration/PipelineConfiguration_title.html@@@Pipeline Configuration@@@...";
fil["89"]= "Pipeline_Configuration/PipelineConstants.html@@@Pipeline Constants@@@A pipeline constant is a constant that you define for the pipeline and that you can use in any stage in the pipeline. Define a pipeline constant when you have a constant that you want to update easily or to use more than once...";
fil["90"]= "Pipeline_Configuration/PipelineMemory.html@@@Pipeline Memory@@@The Data Collector uses memory when it runs a pipeline. To avoid causing out-of-memory errors on the host machine, you can configure the maximum amount of memory that can be used for the pipeline...";
fil["91"]= "Pipeline_Configuration/Retry.html@@@Retrying the Pipeline@@@By default, when the Data Collector encounters a stage-level error that might cause a pipeline to fail, it retries the pipeline - it waits a period of time, and then tries again to run the pipeline...";
fil["92"]= "Pipeline_Configuration/Validation.html@@@Implicit and Explicit Validation@@@The Data Collector performs two types of validation: Implicit validation Implicit validation occurs by default as the Data Collector console saves your changes. Implicit validation lists missing or...";
fil["93"]= "Pipeline_Design/ControlCharacters.html@@@Control Character Removal@@@You can use several stages to remove control characters - such as escape or end-of-transmission characters - from data. Remove control characters to avoid creating invalid records...";
fil["94"]= "Pipeline_Design/DatainMotion.html@@@Data in Motion@@@When you configure a pipeline, you define how you want data to be treated: Do you want to prevent the loss of data or the duplication of dat...";
fil["95"]= "Pipeline_Design/DelimitedDataRecordTypes.html@@@Delimited Data Record Types@@@For delimited data in the list-map record type, you can use standard record functions to process data. For data in the list record type, you should either use the delimited data functions or include the full field path in standard record functions...";
fil["96"]= "Pipeline_Design/DesigningDataFlow.html@@@Designing the Data Flow@@@When you connect a stage to multiple stages, all data passes to all connected stages. You can configure required fields for a stage to discard records before they enter the stage, but by default all records are passed...";
fil["97"]= "Pipeline_Design/DroppingUnwantedRecords.html@@@Dropping Unwanted Records@@@Preconditions are conditions that a record must satisfy to enter the stage for processing. Like required fields, if a record does not meet a precondition, it is diverted to the pipeline for error handling. You can define preconditions for any processor and most destination stages...";
fil["98"]= "Pipeline_Design/PipelineDesign_title.html@@@Pipeline Concepts and Design@@@...";
fil["99"]= "Pipeline_Design/SDCRecordFormat.html@@@SDC Record Data Format@@@SDC Record is a proprietary data format that the Data Collector uses to generate error records. The Data Collector can also use the data format to read and write dat...";
fil["100"]= "Pipeline_Design/What_isa_Pipeline.html@@@What is a Pipeline?@@@A pipeline describes the flow of data from the origin system to destination systems and defines how to transform the data along the way...";
fil["101"]= "Pipeline_Maintenance/DeletingAPipeline.html@@@Deleting a Pipeline@@@You can delete a pipeline when you no longer need it. Deleting a pipeline is permanent. To keep a back up, export the pipeline before you delete it. From the Home page, click the More icon for the...";
fil["102"]= "Pipeline_Maintenance/DuplicatingAPipeline.html@@@Duplicating a Pipeline@@@Duplicate a pipeline when you want to keep the existing version of a pipeline while continuing to configure a duplicate version. A duplicate is an exact copy of the original pipeline...";
fil["103"]= "Pipeline_Maintenance/ExportingAPipeline.html@@@Exporting a Pipeline@@@Export a pipeline to create a backup or to use the pipeline with another Data Collector...";
fil["104"]= "Pipeline_Maintenance/ImportingAPipeline.html@@@Importing a Pipeline@@@Import a pipeline to use a pipeline developed on a different Data Collector or to restore a backup file. Import a pipeline from a pipeline file. Pipeline files are JSON files exported from a Dat...";
fil["105"]= "Pipeline_Maintenance/PipelineMaintenance_title.html@@@Pipeline Maintenance@@@...";
fil["106"]= "Pipeline_Maintenance/StartingAPipeline.html@@@Starting a Pipeline@@@You can start a pipeline when it is valid. When you start a pipeline, the Data Collector runs the pipeline until you stop the pipeline or shut down the Data Collector...";
fil["107"]= "Pipeline_Maintenance/StoppingAPipeline.html@@@Stopping a Pipeline@@@Stop a pipeline when you want the Data Collector to stop processing data for the pipeline...";
fil["108"]= "Pipeline_Monitoring/DataCollectorWindow-Monitor.html@@@Data Collector Console - Monitor Mode@@@In Monitor mode, you can use the Data Collector console to view data as it passes through the pipeline...";
fil["109"]= "Pipeline_Monitoring/MonitoringErrors.html@@@Monitoring Errors@@@You can view the errors related to each stage. Stage-related errors include the error records that the stage produces and other errors encountered by the stage...";
fil["110"]= "Pipeline_Monitoring/PipelineMonitoring.html@@@Pipeline Monitoring@@@When the Data Collector runs a pipeline, you can view real-time statistics about the pipeline, examine a sample of the data being processed, and create rules and alerts...";
fil["111"]= "Pipeline_Monitoring/PipelineMonitoring_title.html@@@Pipeline Monitoring@@@...";
fil["112"]= "Pipeline_Monitoring/Snapshots.html@@@Snapshots@@@A snapshot is a set of data captured as it moves through a running pipeline. You can capture snapshots when you monitor a pipeline...";
fil["113"]= "Pipeline_Monitoring/ViewingPipelineStageStatistics.html@@@Viewing Pipeline and Stage Statistics@@@When you monitor a pipeline, you can view real-time summary and error statistics for the pipeline and for stages in the pipeline...";
fil["114"]= "Pipeline_Monitoring/ViewingtheRunHistory.html@@@Viewing the Run History@@@You can view a run summary for each run of the pipeline when you view the pipeline history...";
fil["115"]= "Processors/Expression.html@@@Expression Evaluator@@@When you configure an expression, the Expression Evaluator writes the results of the expression to a field. You can use an existing field or create a new field...";
fil["116"]= "Processors/FieldConverter.html@@@Field Converter@@@The following table lists the data types that can be converted to another data type. Byte Array, List, and Map data types cannot be converted...";
fil["117"]= "Processors/FieldHasher.html@@@Field Hasher@@@The Field Hasher uses an algorithm to encode values in a field. The Field Hasher can use MD5, SHA1 or SHA2 to hash field values...";
fil["118"]= "Processors/FieldMasker.html@@@Field Masker@@@You can use the following mask types to mask dat...";
fil["119"]= "Processors/FieldRemover.html@@@Field Remover@@@Configure a Field Remover to remove unwanted fields from the pipeline...";
fil["120"]= "Processors/FieldSplitter.html@@@Field Splitter@@@The Field Splitter splits string data based on a separator character and passes the separated data to new fields. Use the Field Splitter to split complex string values into logical components...";
fil["121"]= "Processors/GeoIP.html@@@Geo IP@@@The Geo IP processor provides geographic location information for IP addresses. The Geo IP processor uses the MaxMind GeoIP2 database file to provide geolocation information. You must provide your own copy of the database file...";
fil["122"]= "Processors/JSONParser.html@@@JSON Parser@@@Configure a JSON Parser to parse a JSON object in a String field...";
fil["123"]= "Processors/JavaScript.html@@@JavaScript Evaluator@@@You can choose the processing mode to use with the JavaScript Evaluator. You can use the same script in each processing mode. However, you should include error handling in the script before you run in batch mode...";
fil["124"]= "Processors/Jython.html@@@Jython Evaluator@@@You can choose the processing mode to use with the Jython Evaluator. You can use the same script in each processing mode. However, you should include error handling in the script before you run in batch mode...";
fil["125"]= "Processors/LogParser.html@@@Log Parser@@@When you use Log Parser to parse log data, you define the format of the log files to be read...";
fil["126"]= "Processors/Processors_overview.html@@@Processors@@@A processor stage represents a type of data processing that you want to perform. You can use as many processors in a pipeline as you need...";
fil["127"]= "Processors/Processors_title.html@@@Processors@@@...";
fil["128"]= "Processors/RDeduplicator.html@@@Record Deduplicator@@@The Record Deduplicator caches record information for comparison until it reaches a specified number of records. Then, it discards the information in the cache and starts over...";
fil["129"]= "Processors/StreamSelector.html@@@Stream Selector@@@A condition defines the data that passes to the associated stream. All records that meet the condition passes to the stream. Use the expression language to define conditions...";
fil["130"]= "Processors/ValueReplacer.html@@@Value Replacer@@@The Value Replacer replaces null values in a field with a constant. The Value Replacer can also replace existing values in a field with Nulls...";
fil["131"]= "RPC_Pipelines/ConfiguringDeliveryGuarantee.html@@@Configuring the Delivery Guarantee@@@The delivery guarantee determines when a pipeline commits the offset. When configuring the delivery guarantee for RPC pipelines, use the same option in origin and destination pipelines...";
fil["132"]= "RPC_Pipelines/ConfiguringRPCPipelines.html@@@Configuration Guidelines for RPC Pipelines@@@To create a valid set of RPC pipelines, some configuration options must be aligned. Use the following guidelines to configure RPC pipelines: origin pipeline In the origin pipeline, configure the...";
fil["133"]= "RPC_Pipelines/Deployment_Architecture.html@@@Deployment Architecture@@@When using RPC pipelines, consider your needs and environment carefully as you design the deployment architecture...";
fil["134"]= "RPC_Pipelines/EnableSSL.html@@@Enable SSL@@@You can enable the RPC pipelines to transfer data securely using SSL. To use SSL, enable SSL for both the RPC destination and the RPC origin...";
fil["135"]= "RPC_Pipelines/RPC_ID.html@@@Defining the RPC ID@@@The RPC ID is a user-defined identifier that allows an RPC origin and RPC destination to recognize each other...";
fil["136"]= "RPC_Pipelines/RPCpipeline.html@@@RPC Pipelines@@@Remote Protocol Call pipelines, a.k.a. RPC pipelines, are a set of pipelines that pass data from one pipeline to another over the WAN without writing to an intermediary system. Use RPC pipelines to securely transmit data across data centers...";
fil["137"]= "RPC_Pipelines/RPCpipelines_title.html@@@RPC Pipelines@@@...";
fil["138"]= "Troubleshooting/AccessingErrorMessages.html@@@Accessing Error Messages@@@Informational and error messages display in different location based on the type of information: Pipeline configuration issues The Data Collector console provides guidance and error details in the...";
fil["139"]= "Troubleshooting/ClusterMode.html@@@Cluster Execution Mode@@@Use the following tips for help with pipelines in cluster mode: I got the following validation error when configuring a cluster pipeline. What does it mean? Validation_0071 - Stage  &lt;stage id&gt;  does...";
fil["140"]= "Troubleshooting/Destinations.html@@@Destinations@@@Use the following tips for help with destination stages and systems. Why is the pipeline failing entire batches when only a few records have a problem? Due to Cassandra requirements, when you write to...";
fil["141"]= "Troubleshooting/Monitoring.html@@@Monitoring@@@Use the following tips for help with monitoring the pipeline...";
fil["142"]= "Troubleshooting/Origins.html@@@Origins@@@Use the following tips for help with origin stages and systems. Why isn t the Directory origin reading all of my files? Directory reads files based on their file name pattern in lexicographic...";
fil["143"]= "Troubleshooting/Performance.html@@@Performance@@@Use the following tips for help with performance: Why is my batch size only 1000 records when I configured my origin for larger batches? The Data Collector maximum batch size overrides the maximum...";
fil["144"]= "Troubleshooting/PipelineBasics.html@@@Pipeline Basics@@@Use the following tips for help with pipeline basics: When I go to the Data Collector console, I get a  Webpage not available  error message. The Data Collector is not running. Start the Dat...";
fil["145"]= "Troubleshooting/Troubleshooting_title.html@@@Troubleshooting@@@...";
fil["146"]= "Tutorial/BasicTutorial.html@@@Basic Tutorial@@@Now before we run the basic pipeline, let s add a data rule and alert. Data rules are user-defined rules used to inspect data moving between two stages...";
fil["147"]= "Tutorial/BeforeYouBegin.html@@@Before You Begin@@@Before you start this tutorial, you ll need to do a few things: Download sample data. You can download sample data from the following location...";
fil["148"]= "Tutorial/ExtendedTutorial.html@@@Extended Tutorial@@@Now that the extended pipeline is complete, let s reset the origin and run the pipeline again...";
fil["149"]= "Tutorial/Overview.html@@@Tutorial Overview@@@This tutorial walks through creating and running a pipeline. You can download sample data so you can perform data preview, run the completed pipeline, and monitor the results...";
fil["150"]= "Tutorial/Tutorial-title.html@@@Data Collector Tutorial@@@...";
