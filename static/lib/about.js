// language
const HTML_URL = "https://developer.mozilla.org/en-US/docs/Web/HTML/";
const CSS_URL = "https://developer.mozilla.org/en-US/docs/Web/CSS/";
const JAVASCRIPT_URL =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/";
const TYPESCRIPT_URL = "https://www.typescriptlang.org/";
const JAVA_URL = "https://www.java.com/";
const PYTHON_URL = "https://www.python.org/";
const SQL_URL = "https://www.sql.org/";
const R_URL = "https://www.r-project.org/";
const SHELL_URL = "https://www.shellscript.sh/";

// framework
const REACT_URL = "https://reactjs.org/";
const NEXTJS_URL = "https://nextjs.org/";
const NODEJS_URL = "https://nodejs.org/";
const TAILWINDCSS_URL = "https://tailwindcss.com/";
const SPRINGBOOT_URL = "https://spring.io/projects/spring-boot";
const MYBATIS_URL = "https://mybatis.org/mybatis-3/";
const THYMELEAF_URL = "https://www.thymeleaf.org/";
const FLASK_URL = "https://flask.palletsprojects.com/";
const EXPRESS_URL = "https://expressjs.com/";

// database
const SQLITE_URL = "https://www.sqlite.org/";
const MYSQL_URL = "https://www.mysql.com/";
const POSTGRESQL_URL = "https://www.postgresql.org/";
const MONGODB_URL = "https://www.mongodb.com/";
const REDIS_URL = "https://redis.io/";

// devTool
const GIT_URL = "https://git-scm.com/";
const DOCKER_URL = "https://www.docker.com/";
const JENKINS_URL = "https://www.jenkins.io/";
const NGINX_URL = "https://www.nginx.com/";
const POSTMAN_URL = "https://www.postman.com/";
const AWS_URL = "https://aws.amazon.com/";

// agile
const JIRA_URL = "https://www.atlassian.com/software/jira";
const CONFLUENCE_URL = "https://www.atlassian.com/software/confluence";
const KANBAN_URL = "https://www.atlassian.com/agile/kanban";

// project
const FPL_URL = "https://github.com/tonglam/fpl-public";
const FPL_READ_URL =
  "https://github.com/tonglam/fpl-public/blob/main/README.md";
const FPL_DATA_URL = "https://github.com/tonglam/fpl-data-public";
const FPL_DATA_READ_URL =
  "https://github.com/tonglam/fpl-data-public/blob/main/README.md";
const LETLETME_WEB_URL = "https://github.com/tonglam/letletme-web";
const LETLETME_WEB_READ_URL =
  "https://github.com/tonglam/letletme-web/blob/main/README.md";
const MINIPROGRAM_LETLETME_URL =
  "https://github.com/tonglam/miniprogram-letletme";
const MINIPROGRAM_LETLETME_READ_URL =
  "https://github.com/tonglam/miniprogram-letletme/blob/main/README.md";
const FPLDLE_PYTHON_URL = "https://github.com/tonglam/fpldle-python";
const TELEGRAM_BOT_URL = "https://github.com/tonglam/telegramBot-public";
const FPL_ANALYSIS_2223_URL = "https://github.com/tonglam/fpl_analysis_2223";
const FPL_ANALYSIS_2223_READ_URL = "https://rpubs.com/tonglam/1077811";
const REPAIR_LABS_URL = "https://github.com/codersforcauses/repair-labs";
const REPAIR_LABS_READ_URL =
  "https://github.com/codersforcauses/repair-labs/blob/main/README.md";

// url_map
const language_url_map = {
  html: HTML_URL,
  css: CSS_URL,
  js: JAVASCRIPT_URL,
  ts: TYPESCRIPT_URL,
  java: JAVA_URL,
  py: PYTHON_URL,
  sql: SQL_URL,
  r: R_URL,
  shell: SHELL_URL,
};

const framework_url_map = {
  react: REACT_URL,
  next: NEXTJS_URL,
  node: NODEJS_URL,
  tailwind: TAILWINDCSS_URL,
  springboot: SPRINGBOOT_URL,
  mybatis: MYBATIS_URL,
  thymeleaf: THYMELEAF_URL,
  flask: FLASK_URL,
  express: EXPRESS_URL,
};

const database_url_map = {
  sqlite: SQLITE_URL,
  mysql: MYSQL_URL,
  pg: POSTGRESQL_URL,
  mongo: MONGODB_URL,
  redis: REDIS_URL,
};

const devTool_url_map = {
  git: GIT_URL,
  docker: DOCKER_URL,
  jenkins: JENKINS_URL,
  nginx: NGINX_URL,
  postman: POSTMAN_URL,
  aws: AWS_URL,
};

const agile_url_map = {
  jira: JIRA_URL,
  confluence: CONFLUENCE_URL,
  kanban: KANBAN_URL,
};

const project_url_map = {
  fpl: FPL_URL,
  fpl_read: FPL_READ_URL,
  fpl_data: FPL_DATA_URL,
  fpl_data_read: FPL_DATA_READ_URL,
  letletme_web: LETLETME_WEB_URL,
  letletme_web_read: LETLETME_WEB_READ_URL,
  miniprogram_letletme: MINIPROGRAM_LETLETME_URL,
  miniprogram_letletme_read: MINIPROGRAM_LETLETME_READ_URL,
  fpldle_python: FPLDLE_PYTHON_URL,
  telegram_bot: TELEGRAM_BOT_URL,
  fpl_analysis_2223: FPL_ANALYSIS_2223_URL,
  fpl_analysis_2223_read: FPL_ANALYSIS_2223_READ_URL,
  repair_labs: REPAIR_LABS_URL,
  repair_labs_read: REPAIR_LABS_READ_URL,
};

const url_map = {
  ...language_url_map,
  ...framework_url_map,
  ...database_url_map,
  ...devTool_url_map,
  ...agile_url_map,
  ...project_url_map,
};

function handleClickCard(name) {
  url = url_map[name];
  console.log(url);
  if (url) {
    window.open(url, "_blank");
  }
}
