"use strict";
/**
  Para usar os decorators precisamos habilitar o "experimentalDecorators" no tsconfig
**/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @Component
// @Selector
// @useState("dsadasdasdasd")
/** Class decorator **/
// Factory
// function Logger(prefix: string){
//     return (target) => {
//         console.log(`${prefix} - ${target}`)
//     }
// }
// @Logger("awesome")
// class Foo {}
// function setAPIVersion(apiVersion: string){
//     return (constructor) => {
//         return class extends constructor {
//             version = apiVersion
//         }
//     }
// }
// // decorator - anotar a versão da API
// @setAPIVersion("1.0.0")
// class API{}
// console.log(new API())
/** Property decorator **/
// function minLength (length: number){
//     return (target: any, key: string) => {
//         let val = target[key];
//         const getter = () => val;
//         const setter = (value: string) => {
//             if(value.length <= length){
//                 console.log(`Error, you don't can create ${key} with less than ${length} characters.`);
//             } 
//             else{
//                val = value 
//             }
//         }
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter
//         });
//     }
// }
// class Movie {
//     // validação - se for menor que 5 - error
//     @minLength(50)
//     title: string;
//     constructor (title: string) {
//         this.title = title;
//     }
// }
// const movie = new Movie("Rei Leão");
// console.log(movie.title);
/** Method decorator **/
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    // esperar um tempo e rodar nosso método
    Greeter.prototype.greet = function () {
        console.log("Hello! " + this.greeting);
    };
    __decorate([
        delay(3000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();
