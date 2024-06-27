import { useContext } from "react";
import { AuthContext } from "../context/authcontext";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('Must be inside AuthContextProvider')
    }

    return context
}