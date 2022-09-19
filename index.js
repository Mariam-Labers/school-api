const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const userRoute = require("./routes/userRoute");
const schoolRoutes =require("./routes/schoolRoutes")
const morgan = require("morgan");

dotenv.config();
const app = express();
connectDB();

//middlewares
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/schools", schoolRoutes)
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>welcome to our school portal</h1>");
});

const PORT = process.env.PORT || 4343;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
