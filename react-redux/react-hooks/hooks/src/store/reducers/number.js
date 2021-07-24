export default function numberReducer(state, action) {
    switch(action.type) {
        case 'add2Number':
            return {...state, number: state.number + 2}
        
        case 'x7':
            return {...state, number: state.number * 7}
        case '/25':
            return {...state, number: parseInt(state.number / 25)}
        default:
            return state
    }
}