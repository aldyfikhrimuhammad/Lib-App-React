import React from 'react';
import Atomic from '../../Assets/Atomic Habits Landscape.jpeg';
import Dilan from '../../Assets/Dilan 1990 Landscape.jpeg';
import Harry from '../../Assets/Harry Potter Landscape.jpeg';
import '../../styles/Components/Carousel/Carousel.css'

const Flickity = require('react-flickity-component');
const flickityOptions = {
  initialIndex: 1,
  wrapAround: true
}

function CarouselComp() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >

      <div class="gallery-cell">
        <img src={Atomic} alt="Atomic Habits" />
        <div className="position-absolute top-50 start-50 translate-middle text-carousel">
          <h4 className="text-center"><u>Atomic Habits</u></h4>
          <p className="text-center">James Clear</p>
        </div>
      </div>

      <div class="gallery-cell">
        <img src={Dilan} alt="Dilan 1990" />
        <div className="position-absolute top-50 start-50 translate-middle text-carousel">
          <h4 className="text-center"><u>Dilan 1990</u></h4>
          <p className="text-center">Pidi Baiq</p>
        </div>
      </div>

      <div class="gallery-cell">
        <img src={Harry} alt="Harry Potter" />
        <div className="position-absolute top-50 start-50 translate-middle text-carousel">
          <h4 className="text-center"><u>Harry Potter</u></h4>
          <p className="text-center ">J.K Rowling</p>
        </div>
      </div>
    </Flickity>
  )
}

export default CarouselComp