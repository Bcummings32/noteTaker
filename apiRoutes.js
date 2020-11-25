const fs = require('fs');
var app = require("express").Router();
var storage = require("./db/storage")
// const { inherits } = require('util');

let notes = [];
var lastID = 0;

init();
module.exports = function(app) {
    
  app.get("/api/notes", function(req, res) {
      
    storage.getNotes().then(res.json(notes)).catch((err)=>res.status(500).json(err));
    
});

app.post("/api/index", function(req, res) {
    req.body.id = parseInt(lastId);
    notes.push(req.body);
    writeToJsonFile(notes);
    res.json(true)
});

app.delete("/api/index/:id",function(req, res) {
    var filteredNotes = notes.filter(note => note.id !== parseInt(req.params.id));
    writeToJsonFile(filteredNotes);
    notes = filteredNotes;
    res.json(true);
});

function init() {
    fs.readFile("./db/notes.json", "utf8", function (err, data))

}


