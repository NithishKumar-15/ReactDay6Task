import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const All = () => {
  return (
    <>
    <div className='d-flex justify-content-between'>
        <div style={{width:"50%"}}>
        <img src='https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png' width="100%" height="100%"></img>
        <h1 className='text-center'>React Project How to use</h1>
        </div>
        
        <div style={{width:"50%"}}>
        <img src='https://www.guvi.in/blog/wp-content/uploads/2023/06/feature-image-unique-project-ideas.jpg' width="100%" height="100%"></img>
        <h1 className='text-center'>Machine Learning</h1>
        </div>

        <div style={{width:"50%"}}>
            <img src='https://www.guvi.in/blog/wp-content/uploads/2023/03/10_hardest_and_easiest_programming_languages_in_2024.webp' width="100%" height="100%"></img>
            <h1 className='text-center'>Learn Programming Language</h1>
        </div>
    </div>
    </>
  )
}
