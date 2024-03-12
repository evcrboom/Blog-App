import React, { ReactElement } from 'react'
import notFound from "../images/notfound.svg";

function NotFound():ReactElement {
  return (
    <div className='container'>
        <h2 className='title'>ไม่พบหน้าเว็บ (404 Page Not Found)</h2>
        <img src={notFound} alt="notfound" />
    </div>
  )
}

export default NotFound