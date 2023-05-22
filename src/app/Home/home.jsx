import React from 'react'
import "./home.scss";
import  Slidebar from '../../components/slidebar';

export default function home() {
  return (
    <div className='container'>
      <Slidebar/>
      <div className='content'>
        <h1>this is content</h1>
      </div>
    </div>
  )
}
