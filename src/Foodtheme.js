import { Container,Row,Col } from 'react-bootstrap';
import './App.css';

function Foodtheme() {
     return(
          <>
               <div className="bg-black">
                    <Container>
                        <Row className='justify-content-center'>
                              <Col className="col-xl-6 col-lg-7 col-md-9">
                              <div className='food'>
                                   <h1 className='text-center'>This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.</h1>
                              </div>
                              </Col>
                        </Row>
                         <Row className='align-items-center'>
                              <Col className='section-tittle mb-25' lg={6} md={9} sm={8}>
                                   
                                        <h3>This is Schilers. Awesome Food Theme.Purchase it and eat Burgers.</h3>
                                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
                                        <p className='text-white'>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>

                              </Col>
                              <Col lg={6} md={9} sm={8}>
                                   <img src={require("./image/about1.jpg")} className='w-100'></img>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Foodtheme;