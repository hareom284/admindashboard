import React from 'react'
import "./home.scss";
import  Slidebar from '../../components/slidebar';
import Header from './Header/header';
export default function home() {
  return (
    <div className='container'>
      <Slidebar/>
      <div className='content'>
        <Header/> 
      </div>
    </div>
  )
}
