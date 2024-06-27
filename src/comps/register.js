import {React, useState} from 'react';
import { useRegister } from '../hooks/useRegister';
import { Link } from 'react-router-dom';
import regstyles from '../styles/Register.module.css'
import Navbar from './navbar';



const Register = () => {
    const {register, error} = useRegister()

    const [form, setform] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
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
    
        // useRegister hook
        
        await register(form)
    
        
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
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div>
                                    <input type="text" name='email' value={form.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div>
                                    <input type="password" name='password' value={form.password} onChange={handleChange}/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="confirm">Confirm password</label>
                                </div>
                                <div>
                                    <input type="password" name='confirm' value={form.confirm} onChange={handleChange} />
                                </div>
                            </div>
                
                            <div className={regstyles.regbtn}>
                                <button onClick={onSubmit}>Register</button>
                                <p>Already registered? <Link to={'/signin'}>signin</Link></p>
                                {error && <div className={regstyles.regerror}>{error}</div>}
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Register;
