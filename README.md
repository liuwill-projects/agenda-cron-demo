# Agenda And Agendash DEMO 🛰
  [![Build Status][travis-image]][travis-url]
  [![Coverage Status][coverage-image]][coverage-url]


本地运行，需要安装mongodb，推荐直接安装docker和docker-compose.
运行之后直接查看`http://localhost:8080/agendash/#`

```shell
#直接看效果
docker-compose up

OR
#本地运行
npm install
npm test
npm start
```

如果使用`docker-compose up`运行的话，访问agendash需要http验证，可以通过下面的命令自己设置用户名密码。

```shell
docker-compose config
AUTH_USER_NAME=name AUTH_PASSWORD=pass docker-compose up

#或者
echo -e "AUTH_USER_NAME=username\n\
AUTH_PASSWORD=password" > .env
docker-compose config
docker-compose up
```

[travis-image]: https://img.shields.io/travis/liuwill-projects/agenda-cron-demo/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/liuwill-projects/agenda-cron-demo
[coverage-image]: https://img.shields.io/coveralls/liuwill-projects/agenda-cron-demo/master.svg?style=flat-square
[coverage-url]: https://coveralls.io/github/liuwill-projects/agenda-cron-demo