import { DECREMENT, INCREMENT } from "./type"

const initialState = {
    number: 0,
    userName: "parth"
}

const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return { ...state, number: state.number + 1 }
    }

    if (action.type === DECREMENT) {
        return { ...state, number: state.number - 1 }
    }

    return state
}

export default reducer