export const returnValue = (state = {}, action) => {
    switch (action.type) {
        case "something":
            return { ...state }
        default:
            return { ...state }
    }
} 