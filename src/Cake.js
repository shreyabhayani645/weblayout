import './App.css';
import Header from './Header';
import { Container,Row,Col } from 'react-bootstrap';
import Instagram from './Instagram';
import Footer from './Footer';


function Cake() {
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
                                   <h2>Delicious Cakes</h2>
                              </div>
                         </Col>
                    </Row>  
                    <Container className='cake_main'>
                         <Row>
                              <Col lg={4} md={6}>
                              <div class='item1'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items1.jpg")} className='w-100'></img>
                                   </div>
                                   <div className='test_t'>
                                        <h3>Delightful Lemon</h3>
                                        <p>$98.00</p>
                                   </div>                          
                              </div>
                              </Col>
                              <Col lg={4} md={6}>
                              <div class='item1'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items2.jpg")} className='w-100'></img>
                                   </div>
                                   <div className='test_t'>
                                        <h3>Cashmere Tank + Bag</h3>
                                        <p>$98.00</p>
                                   </div>                          
                              </div>
                              </Col>
                              <Col lg={4} md={6}>
                              <div class='item1'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items3.jpg")} className='w-100'></img>
                                   </div>
                                   <div className='test_t'>
                                        <h3>Sweet Suprise</h3>
                                        <p>$98.00</p>
                                   </div>                          
                              </div>
                              </Col>
                         </Row>
                         <Row>
                              <Col lg={4} md={6}>
                              <div class='item1'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items4.jpg")} className='w-100'></img>
                                   </div>
                                   <div className='test_t'>
                                        <h3>Cashmere Tank + Bag</h3>
                                        <p>$98.00</p>
                                   </div>                          
                              </div>
                              </Col>
                              <Col lg={4} md={6}>
                              <div class='item1'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items5.jpg")} className='w-100'></img>
                                   </div>
                                   <div className='test_t'>
                                        <h3>Sweet Suprise</h3>
                                        <p>$98.00</p>
                                   </div>                          
                              </div>
                              </Col>
                              <Col lg={4} md={6}>
                              <div class='item1'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items6.jpg")} className='w-100'></img>
                                   </div>
                                   <div className='test_t'>
                                        <h3>Delightful Lemon</h3>
                                        <p>$98.00</p>
                                   </div>                          
                              </div>
                              </Col>
                         </Row>
                    </Container> 
                    <Instagram></Instagram>
                    <Footer></Footer>
               </div>
               
                    

          </>
     )
}
export default Cake;