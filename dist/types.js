"use strict";
// boolean
var isOpen;
isOpen = true;
// string
var message;
message = "Hello World";
// number
var total;
total = 20;
// array
var items;
items = [1, 2, 3];
var moreItems;
moreItems = [1, 2, 3];
// tuple
var title;
title = [1, "Vamos lá"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa)
var coisa;
coisa = [];
// void
function logger() {
    console.log("curso de typescript");
}
// never
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    key: "car"
};
// Type Inference
// Em alguns casos o typescript já começa a entender sozinho os tipos de variáveis. Isso ajuda a não ficar tipando de forma redundante.
var message2 = "mensagem definida";
