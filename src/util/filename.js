const moment = require('moment');
const FORMAT = "YYYY-MM-DD-hh-mm"
const REGEXP = /^(\d\d\d\d-\d\d-\d\d-\d\d-\d\d)-[a-z0-9_-]+\.md$/;

function filenameIsValid(filename="") {  
  return (REGEXP.test(filename));
}

function extractDateFromFilename(filename="") {
  const dateString = filename.match(REGEXP)[1];
  const momentDate = moment(dateString, FORMAT);
  if (momentDate.isValid()) {
    return momentDate.toDate();
  } else {
    return null;
  }
}

function generateFilename(titleArguments=[]) {
  const date = moment().format(FORMAT);

  const cleanTitle = titleArguments
    .join(" ")
    .toLowerCase()
    .split(/\W/)
    .filter(x => !!x)
    .join("-");

  return `${date}-${cleanTitle}.md`;
}

module.exports = {
  extractDateFromFilename, generateFilename, filenameIsValid
};