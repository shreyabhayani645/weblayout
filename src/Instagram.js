import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
import { FaInstagram } from "react-icons/fa";



function Instagram() {
     return(
          <>
               <div className="bg-black">
                    <Container>
                         <Row>
                              <Col lg={12} md={12} sm={12} className='text-center'>
                                   <h1 className='follow'>Follow us on Instagram</h1>
                                   <div className='insta_btn justify-content-center d-flex'>
                                        <a className='insta_icon'><FaInstagram></FaInstagram></a>
                                        <a className='insta_th'>Cakeshop</a>
                                   </div>                                   
                              </Col>
                         </Row>
                         <Row className='in_img'>
                              <Col lg={3} md={6} className='in_img1'>
                                   <div><img src={require("./image/instra1.jpg")} className='w-100'></img></div>
                              </Col>
                              <Col lg={3} md={6} className='in_img1'>
                                   <div><img src={require("./image/instra2.jpg")} className='w-100'></img></div>
                              </Col>
                              <Col lg={3} md={6} className='in_img1'>
                                   <div><img src={require("./image/instra3.jpg")} className='w-100'></img></div>
                              </Col>
                              <Col lg={3} md={6} className='in_img1'>
                                   <div><img src={require("./image/instra4.jpg")} className='w-100'></img></div>
                              </Col>
                         </Row>
                        
                    </Container>
               </div>
          </>
     )
}
export default Instagram;