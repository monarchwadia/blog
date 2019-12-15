const fs = require('fs');
const path = require('path');
const { generateFilename } = require('../util/filename');

const filename = generateFilename(process.argv.slice(2));
const filepath = path.join(__dirname, "../..", "blog", filename);
fs.writeFileSync(filepath, "");
