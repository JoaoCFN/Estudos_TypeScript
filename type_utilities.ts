// Type Utilities

type Todo = {
    title: string,
    description: string
    completed: boolean
}

/*
    O readonly é auto explicativo. Passando ele para algo, você define que o atributo pode ser apenas lido e não alterado.
*/

const todo: Readonly<Todo> = {
    title: "Assistir Dark de novo",
    description: "Relembrar detalhes da série",
    completed: false
}

console.log(todo);

/*
    O partial serve para dizer que os campos passados para serem atualizados podem conter todos os atruibutos do objeto atual ou não, ou seja, os atributos passados podem ser parciais.
*/
function updateTodo(todo: Todo, fieldsUpdate: Partial<Todo>){
    // recebe um objeto e retorna um novo objeto
    return { ...todo, ...fieldsUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

/* 
    O Pick serve para capturar propriedades específicas de um outro tipo. No exemplo abaixo pegamos o title e o completed e armazenamos na variável TodoPreview.
*/
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Zerar God of War 3",
    completed: false
}

/*
    O Omit omite determinadas informações que você quiser
*/
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
    title: "Terminar curso de TypeScript",
    completed: true
}