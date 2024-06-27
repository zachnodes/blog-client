import { createContext, useReducer, useEffect} from "react";

export const PostContext = createContext()

export const postReducer = (state, action ) => {
    switch (action.type) {
        case 'GET_POSTS':
            return {
                posts: action.payload
            }
        case 'CREATE_POSTS': 
            return {
                posts: [action.payload, ...state]
            }
        case 'DELETE_POSTS':
            return {
                posts: state.posts.filter(post => post._id !== action.payload._id)
            }
        case 'REMOVE_POSTS':
            return {
                posts: null
            }
        default:
            return state
    }
}

export const PostContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(postReducer, {posts: null})
    console.log(state)


    return (
        <PostContext.Provider value={{...state, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}