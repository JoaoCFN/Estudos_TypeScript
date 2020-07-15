/*
    O Generic entra quanto podemos receber tipos de dados variados. Quando o primeiro dado for passado, ele só aceitara dados daquele tipo específico.
*/

// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// O tipo unknown pode receber qualquer coisa, entrentato, quando ele recebe a sua primeira declaração ele assume o tipo do que foi passado como parâmetro.

// usando o extends no tipo S, ele poder ser tanto número como string.
// o igual no final do extends serve para dizer que o tipo padrão dele é string.

type numOrString = number | string;

function useState<S extends numOrString = string>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: S){
        state = newState;
    }

    return { getState, setState } 
}

const newState = useState();

newState.setState("salve");
console.log(newState.getState());

newState.setState("opa!");
console.log(newState.getState());