const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const userRoute = require("./routes/userRoute");

dotenv.config();
const app = express();
connectDB();
//middlewares
app.use(express());
app.use("/users", userRoute);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("welcome to our school portal");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
