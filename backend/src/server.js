const app = require("./index");
require("dotenv").config();

const connect = require("./configs/db");

const port = process.env.PORT;

app.listen(port, async () => {
	await connect();
    console.log("The Server is Live");
});
