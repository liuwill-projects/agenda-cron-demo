export default function (request, response, next) {
  response.set('Access-Control-Allow-Origin', request.header.origin)
  response.set('Access-Control-Allow-Headers', 'Identity,Cms,Token,Appkey,X-PINGOTHER,Content-Type,Content-Length, Authorization, Accept,X-Requested-With,Auth-App-Store')

  response.set('Access-Control-Allow-Credentials', true)
  response.set('Access-Control-Allow-Methods', 'PATCH,PUT,POST,GET,DELETE,OPTIONS')
  response.set('X-Powered-By', ' 3.2.1')
  next()
}

