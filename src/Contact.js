import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import { FaHome,FaTabletAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import Header from './Header';
import Footer from './Footer';

function Contact() {
     return(
          <>
              <Header></Header>
              <div className='bg-black'>
                    <Row>
                         <Col lg={12} md={12} sm={12}>
                              <div className='c_slide'>
                                   <img src={require("./image/hero1.jpg")} className='w-100 c_img'></img>
                              </div>
                              <div className='c_head'>
                                   <h2>Contact</h2>
                              </div>
                         </Col>
                    </Row> 
                    <Container>
                         <Row>
                              <Col>
                              <div>
                                   <img src={require("./image/map.png")} className='w-100 map'></img>
                              </div>
                              </Col>
                         </Row>
                         <Row>
                              <Col lg={12} className='get_tit'>Get In Touch</Col>
                         </Row>
                         <Row>
                              <Col lg={8} md={12} sm={12}>
                                   <input type='text' placeholder='Enter Message' className='mess'></input>
                                   <Row>
                                        <Col lg={6} md={6} sm={12}>
                                             <input type='text' placeholder='Enter Your Name' className='name'></input>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                             <input type='text' placeholder='Enter Email' className='name'></input>
                                        </Col>
                                   </Row>
                                   <Col lg={12} md={12} sm={12}>
                                        <input type='text' placeholder='Enter Subject' className='sub'></input>
                                   </Col>
                                   <Row>
                                        <Col lg={3} md={2} sm={2}>
                                             <div className='send'>SEND</div>
                                        </Col>
                                   </Row>
                              </Col>
                              
                              <Col lg={4}>
                                   <Row>
                                        <Col lg={12}>
                                             <div className='all_ho'>
                                                  <a className='home_icon'><FaHome></FaHome></a>
                                                  <div className='home_the'>
                                                       <a className='home_a'>Buttonwood, California.</a>
                                                       <p className='home_p'>Rosemead, CA 91770</p>
                                                  </div>
                                             </div>
                                        </Col>
                                   </Row>
                                   <Row>
                                        <Col lg={12}>
                                             <div className='all_ho'>
                                                  <a className='home_icon'><FaTabletAlt ></FaTabletAlt ></a>
                                                  <div className='home_the'>
                                                       <a className='home_a'>Buttonwood, California.</a>
                                                       <p className='home_p'>Rosemead, CA 91770</p>
                                                  </div>
                                             </div>
                                        </Col>
                                   </Row>
                                   <Row>
                                        <Col lg={12}>
                                             <div className='all_ho'>
                                                  <a className='home_icon'><TfiEmail></TfiEmail></a>
                                                  <div className='home_the'>
                                                       <a className='home_a'>Buttonwood, California.</a>
                                                       <p className='home_p'>Rosemead, CA 91770</p>
                                                  </div>
                                             </div>
                                        </Col>
                                   </Row>
                              </Col>
                         </Row>
                    </Container> 
               </div>
               <Footer></Footer>
          </>
     )
}
export default Contact;