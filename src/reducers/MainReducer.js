export var MainReducer = (
    state={
        reducerText: "Hello",
    },action
) => {
    switch (action.type){
        case "SET_REDUCER_TEXT":
            return Object.assign({}, state, {
                reducerText: action.data
            })
        default:
            return state
    }
}