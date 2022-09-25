export default function createStor(rootReducer, initialState) {
    let state =  rootReducer(initialState, {type: 'REPLACE'})
    let subscribers = []
    return {
        dispatch(action){
            state = rootReducer(state, action)
            subscribers.forEach( sub => sub())

        },

        subscribe(callback){
            subscribers.push(callback)

        },
        getState(){
            return state

        }

    }

}

