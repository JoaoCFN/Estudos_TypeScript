"use strict";
/*
    O Generic entra quanto podemos receber tipos de dados variados. Quando o primeiro dado for passado, ele só aceitara dados daquele tipo específico.
*/
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
// newState.setState(false);
// console.log(newState.getState());
newState.setState("salve");
console.log(newState.getState());
newState.setState(123);
console.log(newState.getState());
newState.setState("opa!");
console.log(newState.getState());
