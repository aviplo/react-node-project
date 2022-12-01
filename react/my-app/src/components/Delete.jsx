import React from 'react'

const Delete = () => {
    const name = window.location.href.split("/")[3];
    function send() {
        fetch(`http://localhost:5002/${name}/delete`, {
          method: "DELETE"
        });
      }
  return (
    <div>Delete {name}<br />
    <button onClick={()=>send()}>are you sure?</button>
    </div>
  )
}

export default Delete