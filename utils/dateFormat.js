const moment = require('moment');

const dateFormatting = (dateValue) => {

    return moment(dateValue).format("dddd, MMMM Do YYYY, [at] hh:mm a");
}

module.exports = dateFormatting;