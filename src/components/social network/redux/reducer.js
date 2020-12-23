const inisiateState = {
    content : []
}

const add_comment = (state = inisiateState, action) => {
    switch(action.type){
        case 'ADD_COMMENT':
            return {
                ...state ,
                content : [...state.content, action.payload]
            }
        default:
            return state;
    }
}

export default add_comment;