import { useAuthContext } from "./useAuthContext"
import { useState } from "react"

export const useRegister = () => {
    const [error, seterror] = useState(null);
    const {dispatch} = useAuthContext()

    const register = async (form) => {
        const res = await fetch(process.env.REACT_APP_URL + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
    
        const json = await res.json()
    
        if (!res.ok) {
            seterror(json.error)
        }
    
        if (res.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json })
        }
    }



    return {register, error}
}