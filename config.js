// using dotenv
// https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f
require("dotenv").config();

module.exports = {
  production: {
    USER: process.env.MLABUSER,
    PASS: process.env.MLABPASS,
    MONGODB_URI: process.env.MLABSTRING,
    COLLECTION: process.env.COLLECTION
  },
  local: {
    MONGODB_URI: process.env.LOCALMONGO
  },
  system: {
    port: process.env.PORT
  }
};
