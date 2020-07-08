/*  
    O union "|" serve para dizer a uma var que ela pode ser de outros tipos.
    No exemplo abaixo temos o "uid" podendo ser number e string 
*/

/* 
    O type alias permite que sejam criados tipos personalizados e ajude a gente a reaproveitar código. No exemplo abaixo temos o Uid virando um tipo para o parâmetro uid das duas funções.
*/

/* -------------------------------------------------------------- */
type Uid = number | string | undefined

function logDetails(uid: Uid, item: string){
    console.log(`A product with ${uid} has a title as ${item}`);
}

logDetails(123, "sapato");
logDetails("123", "sapato");

function logInfo(uid: Uid, user: string){
    console.log(`An user with ${uid} has a name as ${user}`);
}

logInfo(123, "João");
logInfo("123", "João");
/* -------------------------------------------------------------- */

/* 
    Podemos usar também o type para predefinir os tipos para serem usados na aplicação como no exemplo abaixo 
*/

type Plataform = "Windows" | "Linux" | "Mac Os";

function renderPlataform(plataform: Plataform){
    return plataform;
}

// renderPlataform("ios"); Não roda pois ios não é uma plataforma definida
renderPlataform("Windows"); // roda pois windows é uma plataforma definida
