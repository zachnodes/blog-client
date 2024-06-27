import { PostContext } from "../context/postscontext";
import { useContext } from "react";

export const usePostContext = () => {
    const context = useContext(PostContext)

    if(!context) {
        throw Error('Must be inside PostContextProvider')
    }

    return context
}