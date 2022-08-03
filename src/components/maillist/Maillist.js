import { Divider } from '@mui/material';
import React from 'react'
import '../maillist/maillist.css';

const maillist = () => {
  return (
    <div className='mail'>
  <h1 className='mailTitle'>Save time,Save money</h1>
  <span className='mailDesc'>Sign up and we'll send</span>
  <div className='mailInputContainer'>
  <input type="text" placeholder="your email"/>
  <button >Subscribe</button>
    </div>
    </div>
  )
}

export default maillist
