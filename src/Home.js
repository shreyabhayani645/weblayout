import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from "./Header";
import Foodtheme from './Foodtheme';
import Price from './Price';
import Video from './Video';
import Foodlove from './Foodlove';
import Ourblog from './Ourblog';
import Instagram from './Instagram';
import Footer from './Footer';

function Home() {
     return(
          <>
               <Header></Header>
               <Carousel className='slider'>
                    <Carousel.Item className='slide_img'>
                         <img src={require("./image/slider.webp")} className='w-100'></img>
                         <Carousel.Caption>
                              <h1 className='slider-area'>Healthy Made Delicious Cake</h1>
                              <a className='btn_1'>Order Now</a>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  className='slide_img'>
                         <img src={require("./image/slider.webp")} className='w-100'></img>
                         <Carousel.Caption>
                              <h1 className='slider-area'>Healthy Made Delicious Cake</h1>
                              <a className='btn_1'>Order Now</a>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='slide_img'>
                         <img src={require("./image/slider.webp")} className='w-100'></img>
                         <Carousel.Caption>
                              <h1 className='slider-area'>Healthy Made Delicious Cake</h1>
                              <a className='btn_1'>Order Now</a>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
               <Foodtheme></Foodtheme>
               <Price></Price>
               <Video></Video>
               <Foodlove></Foodlove>
               <Ourblog></Ourblog>
               <Instagram></Instagram>
               <Footer></Footer>
          </>
     )
}
export default Home;