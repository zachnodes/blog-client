import React from 'react';
import preview from '../styles/Preview.module.css'
import {Link} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostContext } from '../hooks/usePostContext';

const Preview = ({title, descrip, date, slug, postID, userID}) => {
    const {user} = useAuthContext()
    const {dispatch} = usePostContext()
    const todaysDate = new Date(date).toLocaleDateString()
    

    const delPosts = async () => {
        const res = await fetch(url + '/profile/' + postID, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
        })

        const json = await res.json()
        
        if (res.ok) {
          dispatch({type: 'DELETE_POSTS', payload: json})

        }
        if (!res.ok) {
            console.log(json.error)
        }
        
      }
      
    
    return (
        <div className={preview.cardwrapper}>
            <div className={preview.card}>
                
                    <div className={preview.contentwrapper}>
                        <div >
                            <Link id={preview.links} to={`/articles/${slug}`}><h2 id={preview.title}>{title}</h2></Link>
                        </div>
                        <div>
                            <p>{todaysDate}</p>
                        </div>
                        <div>
                            <p>{descrip}</p>
                        </div>
                    </div>
                    <div className={preview.actions}>
                        <Link id={preview.links} to={`/articles/${slug}`}><div>Read More</div></Link>
                        {userID && <Link id={preview.links} to={`/articles/edit/${slug}`}><div>Edit</div></Link>}
                        {userID && <div id={preview.delete} onClick={() => delPosts()}>Delete</div>}
                    </div>
                
            
            </div>
        </div>
    );
}


export default Preview;
