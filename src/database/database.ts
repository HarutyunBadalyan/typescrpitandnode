import { Sequelize, DataTypes, Model } from 'sequelize'
import * as dotenv from "dotenv";
import path from "path"
dotenv.config({ path:path.join(__dirname,'../','../','.env') });
console.log(process.env.DBNAME)
const sequelize = new Sequelize(process.env.DBNAME || "", process.env.DBUSERNAME || "", String(process.env.DBPASSWORD) || "", {
    host: 'localhost',
    dialect:   'postgres' 
  });

  class TypeUser extends Model {
    declare id: number; // this is ok! The 'declare' keyword ensures this field will not be emitted by TypeScript.
    declare name: string;
  }
  TypeUser.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull:true,
    }
  }, {
     sequelize,
     tableName:"typescipttable"

  
  });
  TypeUser.sync()
 export {TypeUser}