import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import Header from './Header';
import Foodtheme from './Foodtheme';
import Video from './Video';
import Foodlove from './Foodlove';
import Ourblog from './Ourblog';
import Instagram from './Instagram';
import Footer from './Footer';

function About() {
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
                                   <h2>About Us</h2>
                              </div>
                         </Col>
                    </Row>  
               </div>
               <Foodtheme></Foodtheme>
               <Video></Video>
               <Foodlove></Foodlove>
               <Ourblog></Ourblog>
               <Instagram></Instagram>
               <Footer></Footer>
          </>
     )
}
export default About;