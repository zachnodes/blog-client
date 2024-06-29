import {React, useState, useEffect} from 'react';
import regstyles from '../styles/Register.module.css'
import Navbar from './navbar';
import {useAuthContext} from '../hooks/useAuthContext'
import {usePostContext} from '../hooks/usePostContext'
import {useParams, Navigate, redirect} from 'react-router-dom'



const Newpost = ({url}) => {
    const {slug} = useParams()
    const {user} = useAuthContext()
    const {posts, dispatch} = usePostContext()
    const [nav, setnav] = useState(false);
    const [article, setarticle] = useState({
        title: '',
        description: '',
        content: ''
    });

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setarticle(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })

    }

    const createPost = async () => {
        // must be an authorized request
        const res = await fetch('/articles/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(article)
        })

        const json = await res.json()

        if (res.ok) {
            setnav(true)

        }
        if (!res.ok) {
            console.log(json.error)
        }
        
    }

    return (
        <div>
            <Navbar/>
            <div className={regstyles.wrapper}>
                <div className={regstyles.createpost}>
                    <form >

                        <div>
                            <div>
                                <label htmlFor="title">Title</label>
                            </div>
                            <div>
                                <input type="text" name='title' value={article.title} onChange={handleChange}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="description">Description</label>
                            </div>
                            <div>
                                <textarea id={regstyles.description} name="description" value={article.description} onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="content">Content</label>
                            </div>
                            <div>
                                <textarea name="content" value={article.content} onChange={handleChange}></textarea>
                            </div>
                        </div>

                        <div>
                        <button onClick={() => createPost()}>Submit</button> 
                            
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Newpost;
