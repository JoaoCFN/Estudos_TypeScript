"use strict";
/*
    O union "|" serve para dizer a uma var que ela pode ser de outros tipos.
    No exemplo abaixo temos o "uid" podendo ser number e string
*/
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
logDetails(123, "sapato");
logDetails("123", "sapato");
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as " + user);
}
logInfo(123, "João");
logInfo("123", "João");
function renderPlataform(plataform) {
    return plataform;
}
// renderPlataform("ios"); Não roda pois ios não é uma plataforma definida
renderPlataform("Windows"); // roda pois windows é uma plataforma definida
