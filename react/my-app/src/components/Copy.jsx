import React from 'react'

const Copy = () => {
  const name = window.location.href.split('/')[3]
  function send() {
    fetch(`http://localhost:5002/${name}/copy`, {
      method: "POST"
    });
  }
  return (
    <div>Copy
    <button onClick={()=>send()}>copy</button>
    </div>
  )
}

export default Copy