const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const dotenv=require("dotenv");
dotenv.config()
const app = express();

app.use(cors({
    origin:'https://sejal-course-selling-app.vercel.app/'
}));
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" })
 .then(()=>console.log('database connected'))
 .catch((err)=>console.log(err))

app.listen(process.env.PORT||3001, () => console.log('Server running on port ' + process.env.PORT||3001 ));
