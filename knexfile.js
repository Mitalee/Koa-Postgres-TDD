const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://cijwawjg:iMHsj4UNSpJt4orO9fDa_6PvU-bTYooj@john.db.elephantsql.com:5432/cijwawjg',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://cijwawjg:iMHsj4UNSpJt4orO9fDa_6PvU-bTYooj@john.db.elephantsql.com:5432/cijwawjg',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};