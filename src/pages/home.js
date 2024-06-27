import {React, useState, useEffect} from 'react';
import Navbar from '../comps/navbar';
import Preview from '../comps/preview';
import home from '../styles/Home.module.css'
import { usePostContext } from '../hooks/usePostContext';


const Home = ({url}) => {
  const {posts, dispatch} = usePostContext()

    useEffect(() => {
      const getPosts = async () => {
        const res = await fetch(url + '/articles')
        const json = await res.json()
        
        if (res.ok) {
          dispatch({type: 'GET_POSTS', payload: json})
        }
        console.log(json)
      }
          
      getPosts()

    }, []);
  
  

  return (
    <div >
      <Navbar/>
      <div className={home.cardwrapper}>
        {
          posts && posts.map(post => {
            
            return (
              <div key={post._id}>
                <Preview
                  title={post.title}
                  descrip={post.description}
                  date={post.createdAt}
                  slug={post.slug}
                />
              </div>
            )
          })
        }

      </div>
      
    </div>
  );
}

export default Home;