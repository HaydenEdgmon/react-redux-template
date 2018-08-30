const SET_REDUCER_TEXT = "SET_REDUCER_TEXT"

export var changeReducerText = (text) => {
    return{
        type: SET_REDUCER_TEXT,
        data: text
    }
} 