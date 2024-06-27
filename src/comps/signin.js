import {React, useState} from 'react';
import { useLogin } from '../hooks/useLogin';
import regstyles from '../styles/Register.module.css'
import Navbar from './navbar';


const Signin = () => {
    const {login, error} = useLogin()
    const [form, setform] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setform(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await login(form)
    }


    return (
        <div>
            <Navbar/>
                <div className={regstyles.wrapper}>
                    <div className={regstyles.formcont}>
                        <form action="">
                            <div>
                                <div>
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div>
                                    <input type="text" name='username' value={form.username} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div>
                                    <input type="password" name='password' value={form.password} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={regstyles.regbtn}>
                                <button onClick={onSubmit}>Login</button>
                                {error && <div className={regstyles.regerror}>{error}</div>}
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );

}

export default Signin;
