var Agenda = require('agenda');
var Agendash = require('agendash');

var tasks = require('../tasks')

var mongoConnectionString = config['agendaMongodbUrl']
var agenda = new Agenda({ db: { address: mongoConnectionString } })

agenda.define('delete old users', function (job, done) {
  console.log(new Date() + " # " + job.attrs.name + ":" + JSON.stringify(job.attrs.data));
  console.log("------")
  console.log("we will delete user here")
  done()
});

for (const task of tasks) {
  agenda.define(task.name, task.handle)
}

agenda.on('ready', function () {
  //agenda.every('3 minutes', 'delete old users');

  // Alternatively, you could also do:
  agenda.every('*/5 * * * *', 'delete old users');
  for (const task of tasks) {
    agenda.every(task.schedule, task.name);
  }

  agenda.start();
});



export default Agendash(agenda)
