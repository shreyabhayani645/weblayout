import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
function Ourblog() {
     return(
          <>
          <div className="bg-black">
               <Container>
                    <Row className='section-tittle '>
                         <Col lg={12} md={12} className='justify-content-between flex-wrap align-items-center d-flex'>
                              <h1 className='text-white'>Our Blogs</h1>
                              <a className='btn_1'>More Blog</a>
                         </Col>
                         
                        
                    </Row>
               </Container>
               <Row>
                    <Col lg={12} xl={6}>
                         <Row className='our_blog'>
                              <Col  xl={6} lg={6} md={6} className='blog_img'>
                                   <img src={require("./image/blog1.jpg")} className='w-100' ></img>
                              </Col>
                              <Col  xl={6} lg={6} md={6} className='blog_tit align-self-center'>
                                   <h3>Tomato, black olive, feta & anchovy tart ulla mco laboris</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
                                   <a className='learn'>LEARN MORE</a>
                              </Col>
                         </Row>
                    </Col>
                    <Col lg={12}  xl={6}>
                         <Row className='our_blog'>
                              <Col  xl={6} lg={6} md={6} className='blog_img '>
                                   <img src={require("./image/blog2.jpg")} className='w-100'></img>
                              </Col>
                              <Col  xl={6}   lg={6} md={6} className='blog_tit align-self-center'>
                                   <h3>Tomato, black olive, feta & anchovy tart ulla mco laboris</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
                                   <a className='learn'>LEARN MORE</a>
                              </Col>
                         </Row>  
                    </Col>
               </Row>
          </div>
          </>
     )
}
export default Ourblog;