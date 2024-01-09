const express =  require("express");
const mongoose = require('mongoose');

const authRouter = require("./routes/auth");

const PORT =3000;
const app = express();

//middleware
app.use(authRouter);

mongoose.connect().then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log(e);
});

app.listen(PORT , () => {
    console.log(`connected at port ${PORT} `);
});