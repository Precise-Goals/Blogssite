import React from 'react';
import { Link } from 'react-router-dom';
import { blogdeta } from './data1';
import '../App.css'


export const Blogs = () => {
  return (
    <div className="list">
      <div className="blogs">
        <ul>
          {blogdeta.map((blog) => (
            <li key={blog.id}>
              <div className='Blogwrap'>
                <div className="ro1">
                  <div className="text">
                    <Link to={`/blog/${blog.id}`}><h1>{blog.title}</h1></Link>
                    <p>{blog.desc1}</p>
                  </div>
                  <Link to={`/blog/${blog.id}`}><div className="img"><img width={200} height={200} src={blog.thumb} alt="blogphoto" /></div> </Link>
                </div>
                <div className="ro2"><Link to={`/blog/${blog.id}`}><p>{blog.date} - <span className='read'>Read More</span></p></Link></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
