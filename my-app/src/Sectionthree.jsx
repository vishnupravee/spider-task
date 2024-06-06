import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { MdMessage } from "react-icons/md";
function Sectionthree() {
   
  return (
    <div style={{backgroundColor:"lightyellow",marginTop:"400px"}}>
        <div style={{textAlign:"center",paddingTop:"40px"}}>
            <p>TOPICS</p>
        </div>
        <div>
            <p style={{fontSize:"30px", fontWeight:"bold",fontStyle:"oblique",textAlign:"center",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} >Most Searched Ones</p>
        </div>
        <div>
       <Card an style={{float:"right",width:"20rem",textAlign:"center",fontSize:"20px",fontWeight:"bold",height:"8rem",paddingTop:"30px",marginRight:"70px",marginTop:"30px",backgroundColor:"grey",color:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <Card.Body >Elibility</Card.Body>
        </Card>
        <Card style={{float:"right",width:"20rem",textAlign:"center",fontSize:"20px",fontWeight:"bold",height:"8rem",paddingTop:"30px",marginRight:"30px",marginTop:"30px",backgroundColor:"black",color:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <Card.Body>University</Card.Body>
        </Card>
        <Card style={{float:"right",width:"20rem",textAlign:"center",fontSize:"20px",fontWeight:"bold",height:"8rem",paddingTop:"30px",marginRight:"30px",marginTop:"30px",backgroundColor:"grey",color:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <Card.Body>Companies</Card.Body>
        </Card>
        <Card style={{float:"right",width:"20rem",textAlign:"center",fontSize:"20px",fontWeight:"bold",height:"8rem",paddingTop:"30px",marginRight:"70px",marginTop:"30px",backgroundColor:"black",color:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <Card.Body>F1 Visa Students</Card.Body>
        </Card>
        <Card style={{float:"right",width:"20rem",textAlign:"center",fontSize:"20px",fontWeight:"bold",height:"8rem",paddingTop:"30px",marginRight:"30px",marginTop:"30px",backgroundColor:"grey",color:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <Card.Body>Admission</Card.Body>
        </Card>
        <Card style={{float:"right",width:"20rem",textAlign:"center",fontSize:"20px",fontWeight:"bold",height:"8rem",paddingTop:"30px",marginRight:"30px",marginTop:"30px",backgroundColor:"black",color:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <Card.Body>Job</Card.Body>
        </Card>

        </div>
        <div style={{marginTop:"400px",textAlign:"center",fontWeight:"bold",fontStyle:"oblique",paddingBottom:"50px"}}>
            <span> Didn't Find Your Topics ?</span> <span style={{marginLeft:"30px",color:"navy"}}>Start Discussing <MdMessage /></span>
        </div>

    </div>
  )
}

export default Sectionthree