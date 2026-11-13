import sequelize from "./database.js";

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com MySQL validada.");

    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados com o MySQL.");
  } catch (error) {
    console.error("Erro ao conectar ao MySQL:", error.message);
  }
};

export default syncDatabase;
