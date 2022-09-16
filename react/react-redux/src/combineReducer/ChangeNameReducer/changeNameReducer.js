const initialState = {
    userName: "Parth Singh"
}

export const changeNameReducer = (state = initialState, action) => {

    if (action.type === "change") {
        return { ...state, userName: action.payload }
    }

    return state
}