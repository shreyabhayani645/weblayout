import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
import { FaFacebook,FaInstagram,FaTwitter,FaLocationArrow,FaPhoneAlt     } from "react-icons/fa";

function Footer(){
     return(
          <>
               <div className='bg-black'>
                    <Container>
                         <Row className='f_line'>
                              <Col lg={12} md={12} sm={12} className='justify-content-between flex-wrap align-items-center d-flex'>
                              <div className='me-md-5 f_img'>
                                   <img src={require("./image/logo.png")}></img>
                              </div>
                                  <ul className='d-flex'>
                                   <li>HOME</li>
                                   <li>CAKES</li>
                                   <li>ABOUT</li>
                                   <li>BLOG</li>
                                   <li>CONTACT</li>
                                  </ul>
                              </Col>
                         </Row>
                         <Row className='row justify-content-between foot_line'>
                              <Col lg={6}>
                                   <p className='foot_p'>
                                   Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                   </p>
                                   <div className='d-flex'>
                                        <div className='foot_btn justify-content-center d-flex'>
                                             <a className='foot_icon'><FaInstagram></FaInstagram></a>
                                             <a className='foot_th'>Instagram</a>
                                        </div> 
                                        <div className='foot_btn justify-content-center d-flex'>
                                             <a className='foot_icon'><FaFacebook></FaFacebook></a>
                                             <a className='foot_th'>Facebook</a>
                                        </div> 
                                        <div className='foot_btn justify-content-center d-flex'>
                                             <a className='foot_icon'><FaTwitter></FaTwitter></a>
                                             <a className='foot_th'>Twitter</a>
                                        </div> 
                                   </div>
                              </Col>
                              <Col lg={3} md={6} className='location align-item-center'>
                                   <a className='loc_icon'><FaLocationArrow ></FaLocationArrow ></a>
                                   <h3>location</h3>
                                   <p>4736 Poe Lane, HOT SPRINGS, Montana-59845</p>
                              </Col>
                              <Col lg={3} md={6} className='location align-item-center'>
                                   <a className='loc_icon'><FaPhoneAlt  ></FaPhoneAlt  ></a>
                                   <h3>location</h3>
                                   <p>4736 Poe Lane, HOT SPRINGS, Montana-59845</p>
                              </Col>
                         </Row>
                         <Row>
                              <Col className='text-center' lg={12}>
                                   <p className='l_foot'>
                                   Copyright ©2024 All rights reserved | This template is made with  by Colorlib
                                   </p>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Footer;