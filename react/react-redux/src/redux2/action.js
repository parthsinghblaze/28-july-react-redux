import { DECREMENT, INCREMENT } from "./type"

export const inc = () => {
    return {
        type: INCREMENT
    }
}

export const dec = () => {
    return {
        type: DECREMENT
    }
}