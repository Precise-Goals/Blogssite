import React from 'react';
import { useParams } from 'react-router-dom';
import { blogdeta } from './data1';
import '../App.css'
import './blog.css'

export const Bdata = () => {
  const { id } = useParams();
  const blog = blogdeta.find((blog) => blog.id === String(id));

  if (!blog) {
    return <div className="error">404 Blog Not Found</div>;
  }

  return (
    <div className='wrap'>
      <div className="tile"><h1>{blog.title}</h1></div>
      <div className="desc1"><p>{blog.desc1}</p></div>
      <div className="coverimg"><img src={blog.cover} alt="cover" loading='lazy' width={1280} height={720} /></div>
      <div className="desc2"><p>{blog.desc2}</p></div>
      <div className="image"><img src={blog.image} alt="cover" loading='lazy' width={1280} height={720} /></div>
      <div className="desc3"><p>{blog.desc3}</p></div>
      <div className="conc"><p>{blog.conc}</p></div>
    </div>
  )
};
