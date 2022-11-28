import React from 'react'
import { useEffect, useState } from 'react';

const A = () => {
    const url = window.location.href.split('/')[3]
    // console.log(url);
    const [content, setContent] = useState();
    useEffect(() => {
        console.log(`http://localhost:5002/${url}`);
        fetch(`http://localhost:5002/${url}`).then((data) => data.json()).then((a) => setContent(a))

    }, [])
    return (
        <div>
            <hr />{content && content}</div>
    )
}

export default A