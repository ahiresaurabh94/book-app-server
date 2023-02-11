const mongoose = require("mongoose");
const MongoDB_API = "mongodb://127.0.0.1/bookApp";
const PORT = 9000;

const app = require("./app");
mongoose.set('strictQuery', true);

 function main() {
    mongoose.connect(MongoDB_API, (err) => {
        if(err) console.log("err>>> " + err);
        else console.log("Connected to Database");
    })

    app.listen(PORT, (err) => {
        if(err) console.log("err>>> " + err);
        else console.log("running on server " + PORT);
    })
} 
main() 