import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
import { FaUser,FaComments,FaHeart,FaFacebookF,FaTwitter,FaDribbble,FaBehance } from "react-icons/fa";
import Header from './Header';
import Footer from './Footer';

function Blog() {
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
                                   <h2>Blog Detail</h2>
                              </div>
                         </Col>
                    </Row> 
                    <Container>
                         <Row>
                              <Col lg={8} md={12}>
                                   <img src={require("./image/blog_1.jpg")} className='w-100 b_img'></img>
                                   <p className='blog_p'>Second divided from form fish beast made every of seas all gathered us saying he our</p>
                                   <div className='d-flex'>
                                        <div className='b_icon d-flex'>
                                             <a><FaUser ></FaUser ></a>
                                             <p>Travel, Lifestyle</p>
                                        </div>
                                        <div className='b_icon1 d-flex'>
                                             <a><FaComments ></FaComments ></a>
                                             <p>03 Comment</p>
                                        </div>
                                   </div>
                                   <p className='b_pere'>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
                                   <p className='b_pere'>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
                                   <div className='dark_border'>
                                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</p>
                                   </div>
                                   <p className='b_pere'>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
                                   <p className='b_pere'>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
                                   <div className='b_border'></div>
                                   <div className='d-flex justify-content-between'>
                                        <div className='d-flex heart'>
                                        <a><FaHeart></FaHeart></a>
                                        <p>Lily and 4 people like this</p> 
                                        </div>
                                        <div className='sos_icon'>
                                             <a><FaFacebookF ></FaFacebookF ></a> 
                                             <a><FaTwitter ></FaTwitter ></a>
                                             <a><FaDribbble ></FaDribbble ></a>  
                                             <a><FaBehance ></FaBehance ></a>  
                                        </div>
                                   </div>
                                   <Col className='d-none d-sm-block'>
                                        <div className='d-flex'>
                                        <Col >
                                        <div className='pre_post d-flex justify-content-start'>
                                                  <img src={require("./image/preview.jpg")} className='w-100'></img>  
                                                  <div className='pre_cont'>
                                                       <p>Prev Post</p>
                                                       <a>Space The Final Frontier</a>
                                                  </div>
                                             </div>
                                        </Col>
                                        <Col>
                                             <div className='next_post d-flex align-end justify-content-end'>
                                                  <div className='pre_cont text-end'>
                                                       <p>Next Post</p>
                                                       <a>Space The Final Frontier</a>
                                                  </div>
                                                  <img src={require("./image/next.jpg")} className='w-100'></img>  
                                             </div>
                                        </Col>
                                   </div>
                                   <div className='b_border'></div>
                              </Col>
                              <Col>
                                   <div className='user_white d-flex'>
                                        <img src={require("./image/author.png")} className='w-100'></img> 
                                        <div className='user_the '>
                                             <h5>Harvard milan</h5>
                                             <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>
                                        </div>
                                   </div>    
                              <div className='b_border'></div>
                              </Col>
                              </Col>
                              <Col lg={4} className='d-lg-block d-none'>
                                   <div className='bg-white'>
                                        <div className='d-flex'>
                                             <input type='text' placeholder='search Keyword' className='search'></input>
                                             <a className='search_btn'>Search</a>
                                        </div>
                                   </div>
                                   <Col>
                                        <div className='category'>
                                             <h3>Category</h3>
                                             <div className='b_border'></div>
                                             <p>Resaurant food(37)</p>
                                             <div className='b_border'></div>
                                             <p>Travel news(10)</p>
                                             <div className='b_border'></div>
                                             <p>Modern technology(03)</p>
                                             <div className='b_border'></div>
                                             <p>Product(11)</p>
                                             <div className='b_border'></div>
                                             <p>Inspiration(21)</p>
                                             <div className='b_border'></div>
                                             <p>Health Care(21)</p>
                                             <div className='b_border'></div>   

                                        </div>
                                   </Col>
                                   <Col>
                                        <div className='category'>
                                             <h3>Recent Post</h3>
                                             <div className='b_border'></div>
                                             <div className='d-flex post_blog1'>
                                                  <img src={require("./image/post_1.jpg")} className='w-5'></img>
                                                  <p>January 12, 2019</p>
                                             </div>
                                             <div className='d-flex post_blog'>
                                                  <img src={require("./image/post_2.jpg")} className='w-5'></img>
                                                  <p>02 Hours ago</p>
                                             </div>
                                             <div className='d-flex post_blog'>
                                                  <img src={require("./image/post_3.jpg")} className='w-5'></img>
                                                  <p>03 Hours ago</p>
                                             </div>
                                             <div className='d-flex post_blog'>
                                                  <img src={require("./image/post_4.jpg")} className='w-5'></img>
                                                  <p>01 Hours ago</p>
                                             </div>
                                        </div>
                                   </Col>
                                   <Col>
                                   <div className='category'>
                                             <h3>Tag Cloude</h3>
                                             <div className='b_border'></div>
                                             <div className='cloud'>
                                                  <a>Project</a>
                                                  <a>Love</a>
                                                  <a>technology</a>
                                                  <a>Travel</a>
                                             </div>
                                             <div className='cloud'>
                                                  <a>Resaurant</a>
                                                  <a>life style</a>
                                                  <a>design</a>
                                             </div>
                                             <div className='cloud'>
                                                  <a>illustarion</a>
                                             </div>
                                        </div>
                                   </Col>
                                   <Col>
                                   <div className='category'>
                                        <h3>Instagram Feeds</h3>
                                        <div className='b_border'></div>
                                        <div className='feed_img'>
                                             <img src={require("./image/post_5.jpg")} className='w-5'></img>
                                             <img src={require("./image/post_6.jpg")} className='w-5'></img>
                                             <img src={require("./image/post_7.jpg")} className='w-5'></img>
                                        </div>
                                        <div className='feed_img1'>
                                             <img src={require("./image/post_8.jpg")} className='w-5'></img>
                                             <img src={require("./image/post_9.jpg")} className='w-5'></img>
                                             <img src={require("./image/post_10.jpg")} className='w-5'></img>
                                        </div>
                                   </div>
                                   </Col>
                              </Col>
                              
                         </Row>
                    </Container>
                    <Container>
                         <Row className='blog_form'>
                              <Col lg={8} md={12} sm={12}>
                                   <input type='text' placeholder='Write Comment' className='mess'></input>
                                   <Row>
                                        <Col lg={6} md={6} sm={12}>
                                             <input type='text' placeholder='Name' className='name'></input>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                             <input type='text' placeholder='Email' className='name'></input>
                                        </Col>
                                   </Row>
                                   <Col lg={12} md={12} sm={12}>
                                        <input type='text' placeholder='Website' className='sub'></input>
                                   </Col>
                                   <Row>
                                        <Col lg={3} md={3} sm={3}>
                                             <div className='comment'>POST COMMENT</div>
                                        </Col>
                                        <Col sm={9}></Col>
                                   </Row>
                              </Col>
                         </Row>
                    </Container>
              </div>
              <Footer></Footer>
          </>
     )
}
export default Blog;