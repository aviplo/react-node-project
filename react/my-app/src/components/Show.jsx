import React from 'react'
import { useState, useEffect} from 'react';

const Show = () => {
    const params = window.location.href.split("/")[3];
    const [file,setFile]=useState()
    console.log(`${params}`);
    // useEffect(()=>{
    //     fetch(`http://localhost:5002/${params}/show`)
    //     .then(a => a.text())
    //     .then(data => setFile(data))
    // },[])
    console.log(file);
  return (
    <div>
    <iframe src={`http://localhost:5002/${params}/show`} title="W3Schools Free Online Web Tutorials" />
  </div>
  )
}

export default Show