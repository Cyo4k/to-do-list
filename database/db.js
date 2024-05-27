const mongoose = require("mongoose");
const connectToDb = () => {
    mongoose
        .connect(
            "mongodb+srv://root:admin@todolist.q4igew4.mongodb.net/?retryWrites=true&w=majority&appName=todolist",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } 
        )
        .then(() => console.log("Mongo DB Atlas Conectado"))
        .catch((err) => console.logo(err));
};

module.exports = connectToDb;
