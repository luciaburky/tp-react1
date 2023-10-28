import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return (
    <Carousel style={{margin: '20px',}}>
      <Carousel.Item>
        <img 
        className='d-block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://upload.wikimedia.org/wikipedia/commons/0/09/Casa_de_Carousel_1.JPG" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className='d-block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://jollyrogerpieroc.com/app/uploads/2019/01/pier-day-5-min-scaled.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className='d-block w-100'
        style={{maxHeight:"500px", objectFit:'cover'}}
        src="https://lirp.cdn-website.com/efc89e53/dms3rep/multi/opt/the-history-of-merry-go-rounds-1920w.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
};

export default CarouselHome