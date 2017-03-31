dev:
	npm install --registry=https://registry.npm.taobao.org && npm install --registry=https://registry.npm.taobao.org -g babel-cli && export NODE_ENV=development && npm run prod

check:
	npm install && npm test