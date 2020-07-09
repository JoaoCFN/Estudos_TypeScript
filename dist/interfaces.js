"use strict";
var tlou = {
    id: "123",
    title: "The Last of US",
    description: "The best game",
    genre: "Action",
    plataform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted and Metro");
    }
};
var leftBehind = {
    title: "The Last of US",
    description: "The best game",
    genre: "Action",
    plataform: ["PS3", "PS4"],
    originalGame: tlou,
    newContent: ["You play as Ellie and Joe"]
};
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var CreateGame = /** @class */ (function () {
    function CreateGame(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
    return CreateGame;
}());
