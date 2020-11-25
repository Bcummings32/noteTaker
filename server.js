const express = require("express");
const fs = require("fs");
const path = require('path');

//express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('assets'));

require('./routes/htmlroutes')(app)
require('./routes/apiroutes')(app)

app.use(express.static("public"));

//Listener    
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

noteData = [];

//look at hot restaurant

//API call response for the notes
// app.get("/api/notes", function(err, res) {
//     try {
//         noteData = fs.readFileSync("Develop/db/db.json", "utf8");
//         noteData = JSON.parse(noteData);
//     }

//     //error handling
//     catch (err) {

//     }
//     res.json(noteData);
// });

// //write note to json
// app.post("/api/notes", function(req, res) {
//     try {
//         noteData = fs.readFileSync("./Develop/db/db.json", "utf8");

//         noteData = JSON.parse(noteData);
//         req.body.id = noteData.length;
//         noteData.push(req.body);
//         noteData = JSON.stringify(noteData);

//         fs.writeFile("./Develop/db/db.json", notesData, "utf8", function(err) {
//             if (err) throw err;
//           });
//           res.json(JSON.parse(noteData));
//     }
//         catch (err) {
//             throw err;
//             console.error(err);

//         }

//         app.delete("/api/notes/:id", function(req, res) {
//             try {
//                 noteData = fs.readFileSync("./Develop/db/db.json", "utf8");
//                 noteData = JSON.parse(noteData);
//                 noteData = noteData.filter(function(note) {
//                     return note.id ! = req.params.id,
//                 });
               
//             }
//         }

//         module.exports = new Store()

