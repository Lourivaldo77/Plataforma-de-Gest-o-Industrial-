import app from "./app.js";
import syncDatabase from "./config/init-db.js";

const PORT = Number(process.env.PORT || 4000);

(async () => {
  await syncDatabase();

  app.listen(PORT, () => {
    console.log(`Backend rodando em http://localhost:${PORT}`);
  });
})();
