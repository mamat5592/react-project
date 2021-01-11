const inisiateState = {
    content : {}
}
//'bah bah che post khargholadeii man in post shoma ro pasandidam va be hamin dalil an ra milikam','soltan post ha'
const add_comment = (state = inisiateState, action) => {
    switch(action.type){
        case 'ADD_COMMENT':
            return {
                content : {...state.content,[action.payload.key]:[action.payload.text]}
            }
        default:
            return state;
    }
}

export default add_comment;