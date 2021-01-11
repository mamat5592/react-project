export const addComment = (text, key) => ({
    type : 'ADD_COMMENT',
    payload : {
        text: text,
        key: key
    }
})