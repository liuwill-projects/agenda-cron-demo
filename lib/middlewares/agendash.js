var Agenda = require('agenda');
var Agendash = require('agendash');

var mongoConnectionString = config['agendaMongodbUrl']
var agenda = new Agenda({db: {address: mongoConnectionString}})

agenda.define('delete old users', function(job, done) {
  console.log(new Date()+" # "+job.attrs.name + ":" + JSON.stringify(job.attrs.data));
  console.log("------")
  console.log("we will delete user here")
  done()
});

agenda.on('ready', function() {
  //agenda.every('3 minutes', 'delete old users');

  // Alternatively, you could also do:
  agenda.every('*/5 * * * *', 'delete old users');

  agenda.start();
});

export default Agendash(agenda)