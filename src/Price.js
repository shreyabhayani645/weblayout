import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container} from 'react-bootstrap';

function Price() {
     const opition={
          responsive:{
            0:{
              items:1,
              loop:true,
              nav:true,
              dotes:false,
            },
            600:{
              items:2,
              loop:true,
              nav:true,
              dotes:false,
            },
            1000:{
              items:3,
              loop:true,
              nav:true,
              dotes:false,
            }
          }
        }
     return(
          <>
               <div className="bg-black"> 
                    <Container>
                         <OwlCarousel className='owl-theme' autoplay loop margin={20} nav  {...opition}>
                              <div class='item'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items1.jpg")} className='w-100'></img>
                                   </div>
                                        <div className='test_t'>
                                             <h3>Delightful Lemon</h3>
                                             <p>$98.00</p>
                                        </div>                          
                              </div>
                              <div class='item'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items2.jpg")} className='w-100'></img>
                                        <div className='test_t'>
                                             <h3>Sweet Superise</h3>
                                             <p>$98.00</p>
                                        </div>
                                   </div>
                              </div>
                              <div class='item'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items3.jpg")} className='w-100'></img>
                                        <div className='test_t'>
                                             <h3>Cashmere Tank & Bag</h3>
                                             <p>$98.00</p>
                                        </div>
                                   </div>
                              </div>
                              <div class='item'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items1.jpg")} className='w-100'></img>
                                        <div className='test_t'>
                                             <h3>Delightful Lemon</h3>
                                             <p>$98.00</p>
                                        </div>
                                   </div>
                              </div>
                              <div class='item'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items2.jpg")} className='w-100'></img>
                                        <div className='test_t'>
                                             <h3>Sweet Superise</h3>
                                             <p>$98.00</p>
                                        </div>
                                   </div>
                              </div>
                              <div class='item'>
                                   <div className='ts_img'>
                                        <div className='caption'>Cart View</div>
                                        <img src={require("./image/items3.jpg")} className='w-100'></img>
                                        <div className='test_t'>
                                             <h3>Cashmere Tank & Bag</h3>
                                             <p>$98.00</p>
                                        </div>
                                   </div>
                              </div>
                         </OwlCarousel>                      
                    </Container>
               </div>
          </>
     )
}
export default Price