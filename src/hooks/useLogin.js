import { useAuthContext } from "./useAuthContext"
import { useState } from "react"

export const useLogin = () => {
    const [error, seterror] = useState(null);
    const {dispatch} = useAuthContext()
    

    const login = async (form) => {
        const res = await fetch(process.env.REACT_APP_URL + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const json = await res.json()

        if (!res.ok) {
            seterror(json.error)
            console.log(error)
        }

        if (res.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
            console.log(localStorage)
        }
   
    }

    return {login, error}


}