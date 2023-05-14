const express = require("express");
//creating the application server
const app = express();
// creating mongo server
const mongoose = require("mongoose");
//importing .env info
const dotenv = require("dotenv");
dotenv.config();
//importing api endpoints from routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");



// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Datbase Connected NOW"))
.catch((error) => console.log(error));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

// now application should listen a port to be execute
app.listen(process.env.PORT ||5000, () =>{
    console.log("Backend server is running");
})