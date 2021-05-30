import {Sequelize}  from "sequelize";
 export const sequelize = new Sequelize(
    process.env.dbname,
    process.env.dbuser_local,
    process.env.dbpassword_local,
    {
        dialect: "mysql",
        operatorsAliases: 0,
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
          replication: {
            read: [
              {
                host: process.env.dbhost_ro || process.env.dbhost_local,
                username: process.env.dbuser_local,
                password: process.env.dbpassword_local,
              },
            ],
            write: {
              host: process.env.dbhost_local,
              username: process.env.dbuser_local,
              password: process.env.dbpassword_local,
            },
          },
    }
)

export default sequelize;