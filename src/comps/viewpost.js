import {React, useState, useEffect} from 'react';
import Navbar from './navbar';
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Blog from '../styles/Blog.module.css'


const Viewpost = ({url}) => {
    const [posts, setposts] = useState([]);
    const {slug} = useParams()
    
  ``

    const getPost = async () => {
        const res = await fetch(url + '/articles/' + slug)
        const json = await res.json()

        if (res.ok) {
            setposts([json])
        }
    }
    useEffect(() => {
        getPost()
        console.log(slug)
 
    }, []);
    
    return (
        <div>
            <Navbar/>
            <div >
                {
                    posts.map((post) => {
                        const todaysDate = new Date(post.createdAt).toLocaleDateString()
                        return (
                            <div className={Blog.wrapper}>
                                <div className={Blog.content}>
                                    <h1>{post.title}</h1>
                                    <p id={Blog.dateandtitle}>{todaysDate}</p>
                                
                                    <div className={Blog.inner}>
                                        <ReactMarkdown children={post.content}/> 
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Viewpost;
