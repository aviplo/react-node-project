import React from "react";
import { useEffect,useState } from "react";

const Info = () => {
  const params = window.location.href.split("/")[3];
  const [content, setContent] = useState();

  useEffect(() => {
    fetch(`http://localhost:5002/a.html/info`)
      .then((data) => data.text())
      .then((a) => console.log(a));
  }, []);
  return <div>Info</div>;
};

export default Info;
