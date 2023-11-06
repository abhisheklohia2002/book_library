const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/Allroutes");
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("/api",router);
mongoose.connect(`mongodb+srv://home:home@cluster0.sulz4do.mongodb.net/book?retryWrites=true&w=majority`,{

}).then((res)=>console.log("db is connected")).catch((err)=>console.log(`not connected db`))
app.listen(PORT,()=>console.log(`server is Running at ${PORT}`))
