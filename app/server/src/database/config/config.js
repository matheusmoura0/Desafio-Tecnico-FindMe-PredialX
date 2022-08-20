
const SQlite = require('sqlite3')

module.exports = {
    development: {
        dialect: 'sqlite',
        storage: './database/app.sqlite', // or ':memory:'
        dialectOptions: {
          // Your sqlite3 options here
          // for instance, this is how you can configure the database opening mode:
            mode: SQlite.OPEN_CREATE,
        },
}};
