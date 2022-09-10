import { CHANGE_NAME, DECREMENT, INCREMENT, TOGGLE } from "./type"

const initialState = {
    isShowing: true,
    number: 0,
    userName: "parth"
}

export const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return { ...state, number: state.number + 1 }
    }

    if (action.type === DECREMENT) {
        return { ...state, number: state.number - 1 }
    }

    if (action.type === CHANGE_NAME) {
        return { ...state, userName: "Nikita" }
    }

    if (action.type === TOGGLE) {
        return { ...state, isShowing: !state.isShowing }
    }
    return state
}
