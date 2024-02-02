import { Container,Row,Col } from 'react-bootstrap';
import './App.css';

function Video() {
     return(
          <>
               <div className="bg-black">
                    <Container>
                         <Row>
                              <Col lg={12}>
                                   <div className='video-wrap align-items-center'>
                                        <img src={require("./image/video.jpg")} className='w-100'></img>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Video;