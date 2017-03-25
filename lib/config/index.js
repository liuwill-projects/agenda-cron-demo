export const config = {
  agendaMongodbUrl: 'mongodb://127.0.0.1:27017/agenda'
}

if(process.env.MONGODB_HOST){
  config['agendaMongodbUrl'] = `mongodb://${process.env.MONGODB_HOST}:27017/agenda`
}else if(process.env.MONGO_ENV !== "production"){
  config['agendaMongodbUrl'] = "mongodb://127.0.0.1:27017/agenda"
}

global.config = config