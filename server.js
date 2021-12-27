const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");

const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://das-quiz.herokuapp.com/'];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


app.get("/api/customers", (req, res)=>{
    const customers = [
        {id: 1, name: "Dhairya"},
        {id: 2, name: "Leena"},
        {id: 3, name: "Vipul"},
    ];
    res.json(customers);
});

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'players/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'players/build', 'index.html'));
  });
}

const port = 5000;
http.listen(port, ()=>{
    console.log("Server is listening on port 5000...");
});