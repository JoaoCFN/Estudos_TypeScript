"use strict";
// Type Utilities
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
    O readonly é auto explicativo. Passando ele para algo, você define que o atributo pode ser apenas lido e não alterado.
*/
var todo = {
    title: "Assistir Dark de novo",
    description: "Relembrar detalhes da série",
    completed: false
};
console.log(todo);
/*
    O partial serve para dizer que os campos passados para serem atualizados podem conter todos os atruibutos do objeto atual ou não, ou seja, os atributos passados podem ser parciais.
*/
function updateTodo(todo, fieldsUpdate) {
    // recebe um objeto e retorna um novo objeto
    return __assign(__assign({}, todo), fieldsUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Zerar God of War 3",
    completed: false
};
var todo4 = {
    title: "Terminar curso de TypeScript",
    completed: true
};
