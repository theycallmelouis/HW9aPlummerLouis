const moment = require('moment');

const now = moment();
console.log(`Current date: ${now.format('YYYY-MM-DD')}`);

const anniversary = moment('1976-11-26');
const yearsSince = now.diff(anniversary, 'years');
console.log(`Years since 1976, November 26th: ${yearsSince}`);