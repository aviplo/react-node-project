import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const AllFiles = () => {
  const [files, setFiles] = useState();


  useEffect(() => {
    fetch("http://localhost:5002")
      .then((data) => data.json())
      .then((a) => setFiles(a))//setFiles(a));
  }, []);
  
  return (
    <div>
     {files &&  files.map((item,idx)=>
      <Card style={{ width: '18rem' }} key={idx}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{item}</Card.Title>
        
        <Button href={item} variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     )}
    </div>
  );
};

export default AllFiles;
