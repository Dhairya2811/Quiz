const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const http = require("http").Server(app);
const io = require("socket.io")(http);


var connected_players = [];

const reactBuild = (path.join(__dirname, "front", "build"));
app.use(express.static(reactBuild));

const adminBuild = (path.join(__dirname, "maintain_front/admin", "build"));
app.use(express.static(adminBuild));

io.on("connection", (socket)=>{
    console.log("client connected...");
    socket.on("send_player_name", async msg=>{
        await connected_players.push(msg.name);
        console.log(connected_players);
        setTimeout(()=>{
            let players = connected_players;
            io.emit("player_joined", {"players": players});
        }, 2000);
    });
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(reactBuild, "index.html"));
});

app.get("/admin", (req, res)=>{
    res.sendFile(path.join(adminBuild, "index.html"))
});

http.listen(PORT, ()=>{console.log("Server is running on ", PORT)})
