import './App.css';
import { Container,Row,Col} from "react-bootstrap";
import { FaFacebook,FaInstagram,FaTwitter   } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
     return(
          <>
               <div className="bg-black">
                    <Row>
                         <Col className='m-3 d-flex justify-content-between flex-wrap align-items-center' lg={12}>
                              <div className='social d-none d-sm-block'>
                                   <a className='soc'><FaFacebook></FaFacebook></a>
                                   <a className='soc'><FaInstagram ></FaInstagram ></a>
                                   <a className='soc'><FaTwitter ></FaTwitter ></a>
                              </div>                             
                              <div className='me-md-5'>
                                   <img src={require("./image/logo.png")}></img>
                              </div>
                              <div className='call_btn d-none d-lg-block'> 
                                   Call Us:+10 783 346 4378
                              </div>
                         </Col>
                    </Row>                         
               </div>
               <Navbar expand="lg" className="bg-black hed_nav justify-content-center">
                         <Container>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="">
                              <Nav.Link href="#home"><Link to="/">HOME</Link></Nav.Link>
                              <Nav.Link href="#link"><Link to="/Cake">CAKE</Link></Nav.Link>
                              <Nav.Link href="#link"><Link to="/About">ABOUT</Link></Nav.Link>
                              <NavDropdown title="BLOG" id="basic-nav-dropdown">
                                   <NavDropdown.Item href="#action/3.1"><Link to="/Blog">BLOG</Link></NavDropdown.Item>
                                   <NavDropdown.Item href="#action/3.2">
                                   <Link to="/Blog">Blog Detail</Link>
                                   </NavDropdown.Item>
                                   <NavDropdown.Item href="#action/3.3"><Link to="/Blog">ELEMENT</Link></NavDropdown.Item>                              
                              </NavDropdown>
                              <Nav.Link href="#link"><Link to="/Contact">CONTACT</Link></Nav.Link>
                         </Nav>
                         </Navbar.Collapse>
                         </Container>
                    </Navbar>
              
          </>
     )
}
export default Header;