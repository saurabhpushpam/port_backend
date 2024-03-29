const express = require('express');
const app = express();
const cors = require("cors");
const http = require("http");
app.use(express.json());


const corsOptions = {
    origin: "http://localhost:5173",
    origin: "https://65c50c3a3838cf2e5bdd1c55--merncrudbysaurav.netlify.app",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}
app.use(cors(corsOptions));
// app.use(cors());

const mongoose = require('mongoose');



// routes 
const getroute = require("./routes/getRoutes");
app.use('/api', getroute);


const PORT = 8000;
const DB = "mongodb+srv://spuspam111:Sp123456@cluster0.0taaaup.mongodb.net/getapi?retryWrites=true&w=majority";
mongoose.connect(DB)
    .then(() => {
        console.log("Connected to MongoDB");
        const server = http.createServer(app);
        server.listen(PORT, () => {
            console.log(`Server is running on :${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });


