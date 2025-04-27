import express from "express";
import { config } from "./config/config.js";
import { UsuarioController } from "./controller/UsuarioController.js";

const DISPLAY_MSG = `Server running on http://${config.HOST}:${config.PORT}`;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ status: 200, msg: "Server is running" });
});

app.get("/usuarios", UsuarioController.getAll)

app.post("/usuario", UsuarioController.createOne)

app.use((request, response, next) => {
	response.status(404).send('Pagina no encontrada');
});

app.listen(config.PORT, () => {
	console.log(DISPLAY_MSG);
});
