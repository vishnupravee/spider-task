import React from 'react'
import { IoSearchCircleSharp } from "react-icons/io5";
import { Col, Container, Form, Nav, Navbar, Row }from 'react-bootstrap'
import './Navabar.css'
import{motion} from 'framer-motion'
function Navabar() {
  return (
    <div>
         <Navbar style={{ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} bg="light"  data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><motion.img
         animate={{rotate:[0, 0, 270, 270, 0],scale: [1, 2, 2, 1, 1],}} style={{width:"5rem",height:"5rem"}} src="https://framerusercontent.com/images/tkwdTYWgnpSdgj6Gs0lUfkuSS2k.png"></motion.img></Navbar.Brand>
          <Nav style={{marginLeft:"100px",fontSize:"15px"}} className="me-auto">
            <Nav.Link style={{marginLeft:"30px",color:"black"}} href="#home">Learn</Nav.Link>
            <Nav.Link style={{marginLeft:"30px",color:"black"}} href="#features"> How do i participate?</Nav.Link>
            <Nav.Link style={{marginLeft:"30px",color:"black"}} href="#pricing"> Universities</Nav.Link>
            <Nav.Link style={{marginLeft:"30px",color:"black"}} href="#pricing"> Corporate</Nav.Link>
        </Nav>
        <div style={{fontSize:"40px",marginBottom:"15px"}}>
        <IoSearchCircleSharp />
        </div>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
            style={{backgroundColor:"black",borderRadius:"50px",width:"130px"}}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          </Row>
      </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navabar