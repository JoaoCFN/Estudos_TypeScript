// account info
// usar ? serve para informar que o atruibuto é opcional
type AccountInfo = {
    id: number | string,
    name: string,
    email?: string
}

// char info
type CharInfo = {
    nickname: string,
    level: number
}

// intersection
// une as informações dos dois tipos
type PlayerInfo = AccountInfo & CharInfo;

const account: AccountInfo = {
    id: "1",
    name: "João",
    email: "joao@hotmail.com"
}

const Char: CharInfo = {
    nickname: "joao",
    level: 100,
}

const player: PlayerInfo = {
    id: 1,
    name: "João",
    email: "joao@hotmail.com",
    nickname: "joao",
    level: 100,
}