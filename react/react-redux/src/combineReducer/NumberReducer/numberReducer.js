const initialState = {
    number: 0,
    lastName: 100
}

export const numberReducer = (state = initialState, action) => {
    if (action.type === "inc") {
        return { ...state, number: state.number + 1 }
    }
    return state
}