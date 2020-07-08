// boolean
let isOpen: boolean;
isOpen = true;

// string
let message: string;
message = "Hello World";

// number
let total: number;
total = 20;

// array
let items: number[];
items = [1, 2, 3];
let moreItems:  Array<number>;
moreItems = [1, 2, 3];

// tuple
let title: [number, string];
title = [1, "Vamos lá"];

// enum
enum Colors{
    white = "#fff",
    black = "#000"
}

// any (qualquer coisa)
let coisa: any;
coisa = [];

// void
function logger(){
    console.log("curso de typescript");
}

// null || undefined
type Bla = string | undefined;

// never
function error(): never {
    throw new Error("error");
}

// object
let cart: object
cart = {
    key: "car"
};

// Type Inference
// Em alguns casos o typescript já começa a entender sozinho os tipos de variáveis. Isso ajuda a não ficar tipando de forma redundante.
let message2 = "mensagem definida";