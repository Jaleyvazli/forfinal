import { Carousel} from 'react-bootstrap';
import '../../../styles/slider.css';
import bar2 from '../../../assets/images/view/bar2.jpg'
import bar1 from '../../../assets/images/view/bar1.jpg';
import bar3 from '../../../assets/images/view/bar3.jpg';
import terrace1 from '../../../assets/images/view/terrace1.jpg';
import terrace2 from '../../../assets/images/view/terrace2.jpg';
import view from '../../../assets/images/view/view.jpg';
import frontwindow from '../../../assets/images/view/maxresdefault.jpg';
const Home = () => {
  // const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div className='generalslider'>
      {/* <Box py={20}> */}
      <Carousel className='allslide'>
        <Carousel.Item interval={800}>
          <img
            className="slideitem"
            src={bar2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="slideitem"
            src={bar1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="slideitem"
            src={bar3}
            alt="Third slide"
          />
        </Carousel.Item>
     
      <Carousel.Item interval={800}>
          <img
            className="slideitem"
            src={terrace1}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="slideitem"
            src={terrace2}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="slideitem"
            src={view}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="slideitem"
            src={frontwindow}
            alt="Seventh slide"
          />
        </Carousel.Item> 
        </Carousel>
   </div>

  );
};
export default Home;
