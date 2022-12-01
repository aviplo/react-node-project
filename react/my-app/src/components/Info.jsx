import React from "react";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Info = () => {
  const params = window.location.href.split("/")[3];
  const [content, setContent] = useState();

  useEffect(() => {
    fetch(`http://localhost:5002/a.html/info`)
      .then((data) => data.json())
      .then((a) => setContent(a));
  }, []);
  return (
    <div>
      {content && (
        <ListGroup as="ol" numbered>
          {Object.entries(content).map((item,idx) => (
            <ListGroup.Item
            key={idx}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item[0]}</div>
                {item[1]}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default Info;
