import {React, useEffect} from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostContext } from '../hooks/usePostContext';
import Navbar from '../comps/navbar';
import Preview from '../comps/preview';
import profile from '../styles/Home.module.css'
import {useParams} from 'react-router-dom'

const Profile = ({url}) => {
    const {posts, dispatch} = usePostContext()
    const {user} = useAuthContext()
    const {username} = useParams()
    useEffect(() => {
      const getPosts = async () => {
        const res = await fetch('/profile/' + username, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
        })

        const json = await res.json()
        
        if (res.ok) {
          dispatch({type: 'GET_POSTS', payload: json})
        }
        
      }
          getPosts() 
          
    }, []);

    return (
        <div>
          <Navbar/>
          <div className={profile.cardwrapper}>
          <h1>Dashboard</h1>
          <h2>Hello {user && user.username}</h2>
              {
                posts && posts.map(post => {
                  return (
                    <div key={post._id}>
                      <Preview
                        title={post.title}
                        descrip={post.description}
                        date={post.createdAt}
                        slug={post.slug}
                        userID={post.user_id}
                        postID={post._id}
                      />
                    </div>
                  )
                })
              } 
          </div>  
        </div>
    );
}

export default Profile;