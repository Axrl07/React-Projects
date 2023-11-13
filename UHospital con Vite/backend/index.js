const app = require("./app.js");

const PORT = 5555;
app.listen(PORT, () => {
  console.log(`Enlace: http://localhost:${PORT}`);
});
