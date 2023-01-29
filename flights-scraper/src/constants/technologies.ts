import * as assets from "../assets";

interface Technology {
  product: string;
  logo: any;
  website: string;
  category: Categories;
}
export enum Categories {
  frontend = "FRONTEND",
  clouds = "CLOUD",
  backend = "BACKEND",
  devops = "DEVOPS",
  database = "DATABASE",
  devsecops = "DEVSECOPS",
  monitoring = "MONITORING",
  agile = "AGILE",
  bigdata = "BIGDATA",
  iot = "IOT",
}

export const Technologies: Technology[] = [
  //DATABASE
  {
    product: "MySql",
    logo: assets.mysqlLogo,
    website: "https://www.mysql.com/",
    category: Categories.database,
  },
  {
    product: "mongoDB",
    logo: assets.mongodbLogo,
    website: "https://www.mongodb.com/home",
    category: Categories.database,
  },
  {
    product: "PostgreSQL",
    logo: assets.postgresqlLogo,
    website: "https://www.postgresql.org/",
    category: Categories.database,
  },
  {
    product: "CosmosDB",
    logo: assets.azure_cosmos_dbLogo,
    website: "https://azure.microsoft.com/en-us/products/cosmos-db/",
    category: Categories.database,
  },
  {
    product: "mssql",
    logo: assets.mssqlLogo,
    website: "https://www.microsoft.com/en-us/sql-server",
    category: Categories.database,
  },
  {
    product: "AEROSPIKE",
    logo: assets.aerospikeLogo,
    website: "https://aerospike.com/",
    category: Categories.database,
  },
  {
    product: "dynamodb",
    logo: assets.dynamodbLogo,
    website: "https://aws.amazon.com/dynamodb/",
    category: Categories.database,
  },
  {
    product: "Redshift",
    logo: assets.redshiftLogo,
    website: "https://aws.amazon.com/redshift/",
    category: Categories.database,
  },

  //FRONTEND
  {
    product: "React",
    logo: assets.reactLogo,
    website: "https://reactjs.org/",
    category: Categories.frontend,
  },
  {
    product: "JavaScript",
    logo: assets.javascriptLogo,
    website:
      "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
    category: Categories.frontend,
  },
  {
    product: "VueJS",
    logo: assets.vuejsLogo,
    website: "https://vuejs.org/",
    category: Categories.frontend,
  },
  {
    product: "Electron",
    logo: assets.electronLogo,
    website: "https://www.electronjs.org/",
    category: Categories.frontend,
  },

  //BACKEND
  {
    product: "NodeJS",
    logo: assets.nodejsLogo,
    website: "https://nodejs.org/en/",
    category: Categories.backend,
  },
  {
    product: ".NET Core",
    logo: assets.aspnetcoreLogo,
    website: "https://dotnet.microsoft.com/en-us/",
    category: Categories.backend,
  },
  {
    product: "Python",
    logo: assets.pythonLogo,
    website: "https://www.python.org/",
    category: Categories.backend,
  },
  {
    product: "Vert.X",
    logo: assets.vertxLogo,
    website: "https://vertx.io/",
    category: Categories.backend,
  },

  //CLOUDS
  {
    product: "Azure",
    logo: assets.azureLogo,
    website: "https://azure.microsoft.com/en-us/",
    category: Categories.clouds,
  },
  {
    product: "ORACLE",
    logo: assets.oracleLogo,
    website: "https://www.oracle.com/",
    category: Categories.clouds,
  },
  {
    product: "AWS",
    logo: assets.awsLogo,
    website: "https://aws.amazon.com/",
    category: Categories.clouds,
  },
  {
    product: "GCP",
    logo: assets.gcpLogo,
    website: "https://cloud.google.com/",
    category: Categories.clouds,
  },
 
  //DevOps
  {
    product: "Azure DevOps",
    logo: assets.azure_devopsLogo,
    website: "https://azure.microsoft.com/en-us/products/devops/#overview",
    category: Categories.devops,
  },
  {
    product: "GitHub",
    logo: assets.githubLogo,
    website: "https://github.com/",
    category: Categories.devops,
  },
  {
    product: "Jenkins",
    logo: assets.jenkinsLogo,
    website: "https://www.jenkins.io/",
    category: Categories.devops,
  },
  {
    product: "kubernetes",
    logo: assets.k8sLogo,
    website: "https://kubernetes.io/",
    category: Categories.devops,
  },
  {
    product: "GitLab",
    logo: assets.gitlabLogo,
    website: "https://about.gitlab.com/",
    category: Categories.devops,
  },
  {
    product: "Bitbucket",
    logo: assets.bitbucketLogo,
    website: "https://bitbucket.org/",
    category: Categories.devops,
  },
  {
    product: "docker",
    logo: assets.dockerLogo,
    website: "https://www.docker.com/",
    category: Categories.devops,
  },
  {
    product: "Microsoft TFS",
    logo: assets.microsoftLogo,
    website: "https://azure.microsoft.com/en-us/products/devops/server/",
    category: Categories.devops,
  },
  {
    product: "Ansible",
    logo: assets.ansibleLogo,
    website: "https://www.ansible.com/",
    category: Categories.devops,
  },
  {
    product: "JFrog",
    logo: assets.jfrogLogo,
    website: "https://jfrog.com/",
    category: Categories.devops,
  },
  {
    product: "Nexus Artifactory",
    logo: assets.nexus_artifactoryLogo,
    website: "https://www.sonatype.com/products/nexus-repository",
    category: Categories.devops,
  },
  //DevSecOps
  {
    product: "snyk",
    logo: assets.synkLogo,
    website: "https://snyk.io/",
    category: Categories.devsecops,
  },
  {
    product: "WIZ",
    logo: assets.wizLogo,
    website: "https://www.wiz.io/",
    category: Categories.devsecops,
  },
  {
    product: "Jit",
    logo: assets.jitLogo,
    website: "https://www.jit.io/",
    category: Categories.devsecops,
  },
  {
    product: "Cider Security",
    logo: assets.cider_securityLogo,
    website: "https://www.cidersecurity.io/",
    category: Categories.devsecops,
  },
  {
    product: "Azure Sentinel",
    logo: assets.azure_sentinelLogo,
    website: "https://azure.microsoft.com/en-us/products/microsoft-sentinel/",
    category: Categories.devsecops,
  },
  {
    product: "Orca Security",
    logo: assets.orca_securityLogo,
    website: "https://orca.security/",
    category: Categories.devsecops,
  },
  {
    product: "JFrog Xray",
    logo: assets.jfrog_xrayLogo,
    website: "https://jfrog.com/xray/",
    category: Categories.devsecops,
  },
  {
    product: "Azure Defender",
    logo: assets.microsoftDefenderLogo,
    website: "https://azure.microsoft.com/en-us/products/defender-for-cloud/#overview",
    category: Categories.devsecops,
  },
  //MONITORING
  {
    product: "DATADOG",
    logo: assets.datadogLogo,
    website: "https://www.datadoghq.com/",
    category: Categories.monitoring,
  },
  {
    product: "Nagios",
    logo: assets.nagiosLogo,
    website: "https://www.nagios.org/",
    category: Categories.monitoring,
  },
  {
    product: "Prometheus",
    logo: assets.prometheusLogo,
    website: "https://prometheus.io/",
    category: Categories.monitoring,
  },
  {
    product: "ELK",
    logo: assets.elkLogo,
    website: "https://www.elastic.co/what-is/elk-stack",
    category: Categories.monitoring,
  },

  //AGILE
  {
    product: "monday.com",
    logo: assets.mondayLogo,
    website: "https://monday.com/",
    category: Categories.agile,
  },
  {
    product: "Jira",
    logo: assets.jiraLogo,
    website: "https://www.atlassian.com/software/jira",
    category: Categories.agile,
  },
  {
    product: "Azure DevOps",
    logo: assets.azure_devopsLogo,
    website: "https://azure.microsoft.com/en-us/products/devops/",
    category: Categories.agile,
  },
  {
    product: "Asana",
    logo: assets.asanaLogo,
    website: "https://asana.com/",
    category: Categories.agile,
  },
  //IOT
  {
    product: "Raspberry Pi",
    logo: assets.raspberryPiLogo,
    website: "https://www.raspberrypi.com/",
    category: Categories.iot,
  },
  {
    product: "IOT Hubs",
    logo: assets.event_hubsLogo,
    website: "https://azure.microsoft.com/en-us/products/iot-hub/",
    category: Categories.iot,
  },
  {
    product: "Embedded Systems",
    logo: assets.embedded_systemsLogo,
    website: "https://www.arduino.cc/",
    category: Categories.iot,
  },
  {
    product: "Orange Pi",
    logo: assets.orangepiLogo,
    website: "http://www.orangepi.org/",
    category: Categories.iot,
  },
  //BIG DATA
  {
    product: "Amazon Kinesis",
    logo: assets.amazon_kinesisLogo,
    website: "https://aws.amazon.com/kinesis/",
    category: Categories.bigdata,
  },
  {
    product: "Azure Event Hubs",
    logo: assets.Azure_iot_hubLogo,
    website:
      "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about",
    category: Categories.bigdata,
  },
  {
    product: "Kafka Streams",
    logo: assets.kafkaLogo,
    website: "https://kafka.apache.org/documentation/streams/",
    category: Categories.bigdata,
  },
  {
    product: "Hadoop HDFS",
    logo: assets.hadoopLogo,
    website: "https://hadoop.apache.org/",
    category: Categories.bigdata,
  },
  {
    product: "GCP Streaming Analytics",
    logo: assets.gcpLogo,
    website: "https://cloud.google.com/solutions/stream-analytics",
    category: Categories.bigdata,
  },
  {
    product: "Spark",
    logo: assets.sparkLogo,
    website: "https://spark.apache.org/",
    category: Categories.bigdata,
  },
  {
    product: "Databricks",
    logo: assets.databricksLogo,
    website: "https://www.databricks.com/",
    category: Categories.bigdata,
  },
  { 
    product: "Azure Data Factory",
    logo: assets.azureLogo,
    website: "https://azure.microsoft.com/en-us/products/data-factory/",
    category: Categories.bigdata,
  },
];
