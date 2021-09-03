const initialState = {
    hello: "world",
}

const defaultReducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default defaultReducer;