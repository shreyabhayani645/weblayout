import { Container,Row,Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import './App.css';

function Foodlove() {
     return(
          <>
          <div className='bg-black'>
               <Container>
                    <Row>
                         <Col lg={12}>
                              <h1 className='text-center text-white f_title'>Food Lover's Say</h1>
                         </Col>
                    </Row>
                    <Row>
                         <Col lg={4} md={4}className='box'>
                              <div className='star'>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                              </div>
                              <p className='text-white d_food'>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
                              <Row>
                                   <div className='info d-flex'>
                                        <Col lg={2} md={3} sm={4} className='user'>
                                             <img src={require("./image/customer1.png")} className='w-30'></img>
                                        </Col>
                                        <Col lg={10} md={9} sm={8}>
                                             <p className='text-white ms-0'>Wilma Mumduya</p>
                                        </Col>
                                   </div>
                              </Row>
                         </Col>
                         <Col lg={4} md={4} className='box'>
                              <div className='star'>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                              </div>
                              <p className='text-white d_food'>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
                              <Row>
                                   <div className='info d-flex'>
                                        <Col lg={2} md={3} sm={4} className='user'>
                                             <img src={require("./image/customer1.png")} className='w-30'></img>
                                        </Col>
                                        <Col lg={10} md={9} sm={8}>
                                             <p className='text-white ms-0'>Wilma Mumduya</p>
                                        </Col>
                                   </div>
                              </Row>
                         </Col>
                         <Col lg={4} md={4} className='box1'>
                              <div className='star'>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                                   <a className='star_1'><FaStar ></FaStar ></a>
                              </div>
                              <p className='text-white d_food'>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
                              <Row>
                                   <div className='info d-flex'>
                                        <Col lg={2} md={3} sm={4} className='user'>
                                             <img src={require("./image/customer1.png")} className='w-30'></img>
                                        </Col>
                                        <Col lg={10} md={9} sm={8}>
                                             <p className='text-white ms-0'>Wilma Mumduya</p>
                                        </Col>
                                   </div>
                              </Row>
                         </Col>
                    </Row>    
               </Container>
                    

          </div>
          </>
     )
}
export default Foodlove;