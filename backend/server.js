const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/milk", require("./routes/milkRoutes"));
app.use("/api/edit", require("./routes/editRoutes"));

app.listen(5000, () => console.log("Backend running on 5000"));
