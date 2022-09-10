import { CHANGE_NAME, DECREMENT, INCREMENT } from "./type"

export const increment = () => {
    return { type: INCREMENT }
}

export const decrement = () => {
    return { type: DECREMENT }
}

export const changeName = () => {
    return { type: CHANGE_NAME }
}