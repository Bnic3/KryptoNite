const moment = require('moment-timezone')
const { createLogger, format, transports } = require('winston');
const { combine,label, printf } = format;



const myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const appendTimestamp = format((info, opts) => {
    if(opts.tz)
      info.timestamp = moment().tz(opts.tz).format();
    return info;
  });

const logger = createLogger({
  format: combine(
    label({ label: 'Kryptonite!' }),
    appendTimestamp({ tz: 'Africa/Lagos' }),
    myFormat
  ),
  transports: [new transports.File({ filename: 'access-combined.log' })]
});
//new transports.File({ filename: 'access-combined.log' })
module.exports = logger