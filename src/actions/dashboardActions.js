import { LOADSTORE } from "./types";

export function loadStore(store){
    return dispatch=>dispatch(loadAction(store))
}

function loadAction (store={}){
    return {
        type:LOADSTORE,
        store
    }

}