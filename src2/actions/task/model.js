import Sequelize from "sequelize";
import { sequelize } from "../../database/connect";

export default sequelize.define(
"task",
{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.VARCHAR,
        allowNull: false,
    }
}
)

const createTask = async({payload}) => {
    try{
        const documentation = {
            reqDataFields: ["name"],

        }
    }catch{

    }
}