dev:
	npm install --registry=https://registry.npmmirror.com && export NODE_ENV=development && npm run prod

check:
	npm install && npm test