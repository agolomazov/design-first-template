const path = require('path');
const date = new Date();

module.exports = {
  npmRepository: "http://",
  npmName: "sdk-api",
  npmVersion: `1.0.${date/1000|0}`,
  supportsES6: false,
  targetPath: path.resolve(__dirname, './npm-package'),
  services: [
    { 
      specPath: './tmp/spec.yaml',
    },
  ],
};
