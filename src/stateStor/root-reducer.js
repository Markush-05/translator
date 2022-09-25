export default function rootReducer (state, action) {
    switch (true) {
        case( action.type === 'REPLACE'):
            return state = action.new

        case( action.type === 'INCR'):
            return state + 1

        default: 
            return state
        


    }

}