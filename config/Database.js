import {Sequelize} from "sequelize";
const db = new Sequelize('railway','root','1yq3YwrKykMBvAFhNGxR',{
    host: 'containers-us-west-164.railway.app',
    port: '6187',
    dialect: "mysql"
}) 

export default db;