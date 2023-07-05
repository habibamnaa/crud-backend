import {Sequelize} from "sequelize";
import mysql2 from "mysql2";
const db = new Sequelize('railway','root','1yq3YwrKykMBvAFhNGxR',{
    host: 'containers-us-west-164.railway.app',
    port: '6187',
    dialect: "mysql",
    dialectModule: mysql2
}) 

export default db;