const luxon = require("luxon");

const t = luxon.DateTime.local();


console.log(t.toFormat("hh:mma").toLowerCase())