
import { Col, Form, Row } from 'react-bootstrap'
import { IoBulbSharp} from 'react-icons/io5'
import { AiFillMessage } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import{motion} from 'framer-motion'


function Sectionone() {
 return (
    <div > 
      <div style={{textAlign:"center",marginTop:"50px"}}> FORUM</div> 
      <motion.div animate={{scale: [1, 2, 2, 1, 1]}} style={{fontSize:"30px", fontWeight:"bold",fontStyle:"oblique",textAlign:"center"}} >Discuss & Evolve</motion.div>
       <div style={{color:"GrayText",textAlign:"center",marginTop:"30px"}}> Engage with Fellow Prefesionals : Join The Program Forum Discussion</div> 
        <div style={{textAlign:"center",marginTop:"30px"}}></div>
       <div style={{marginLeft:"360px"}} >
        <Form inline>
        <Row>
          <Col style={{width:"500px"}} xs="auto">
            <Form.Control
            style={{borderRadius:"50px",height:"40px",borderColor:"black",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
              type="text"
              placeholder="Search Topics"
              className=" mr-sm-2"
            />
            </Col>
         </Row>
      </Form>
      </div>
      <div style={{marginTop:"40px",color:"darkgreen",textAlign:"center"}}>
      <span style={{marginRight:"90px"}}> <AiFillMessage /> START DISCUSSING</span>  <span style={{marginLeft:"50px"}}><IoBulbSharp /> VIEW TOPICS</span>
      </div>
      <div style={{textAlign:"center",fontSize:"40px",marginTop:"50px",color:"lightgrey"}}>
      <FaArrowDown />
      </div>
</div>
  )
}

export default Sectionone