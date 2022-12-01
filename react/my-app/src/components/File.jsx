import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';




const File = () => {

    const url = window.location.href.split('/')[3]
    console.log(url);
  return (
    <div>
    <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Nav.Link href={`/${url}/info`}>Info</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href={`/${url}/show`} eventKey="link-1">show</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href={`/${url}/rename`} eventKey="link-2">rename</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href={`/${url}/delete`} eventKey="link-2">delete</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href={`/${url}/copy`} eventKey="link-2">copy</Nav.Link>
    </Nav.Item>
  </Nav>
  <Outlet/>
</div>
  )
}

export default File