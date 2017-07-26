import { AT_RIGHT_TIME } from '../constants'

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

function Task() { }

var timeTask = new Task
timeTask["name"] = "at right time"
timeTask["schedule"] = "40 17-19 * * *"
timeTask["handle"] = function (job, done) {
  console.log(job.attrs.name, new Date())
  myEmitter.emit(AT_RIGHT_TIME, job.attrs.name)
  done()
}

module.exports = [timeTask]
