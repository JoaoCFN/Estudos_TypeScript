// As interfaces trabalham exclusivamente com objetos
// Já o type alias pode ser usado para outros tipos de dados também
interface Game {
    id?: number | string;
    title: string;
    description: string;
    genre: string
    plataform?: string[]
    getSimilars?: (title: string) => void
}

interface DLC extends Game {
    originalGame: Game,
    newContent: string[]
}

const tlou: Game = {
    id: "123",
    title: "The Last of US",
    description: "The best game",
    genre: "Action",
    plataform: ["PS3", "PS4"],
    getSimilars(title: string){
        console.log(`Similar games to ${title}: Uncharted and Metro`);
    }
}

const leftBehind: DLC = {
    title: "The Last of US",
    description: "The best game",
    genre: "Action",
    plataform: ["PS3", "PS4"],
    originalGame: tlou,
    newContent: ["You play as Ellie and Joe"]

}

console.log(tlou.genre);

if(tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}

class CreateGame implements Game{
    title: string;
    description: string;
    genre: string;

    constructor(title: string, description: string, genre: string){
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
}
