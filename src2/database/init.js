import { sequelize } from "../database/connect";

export const initDB = async () => {
  let db = await sequelize();
};

initDB().then();
