import React from 'react';
import './Testimonial.css';
import dreamBg from '../../../../images/dream-bg.png'
import wilson from '../../../../images/Wilson Harry.png';
import ema from '../../../../images/Ema Gomez.png';
import aliza from '../../../../images/Aliza Farari.png';
import TestimonialCard from '../TestimoialCard/TestimonialCard';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]
const Testimonial = () => {
    return (
        <section className="mt-5 pt-5 row">

            <div className="testimonial-text col-md-7 offset-md-1">
                <small  >Testimonial</small>
                <h5> What's Our Patients  <br /> Says</h5>
            </div>

            <div className="col-md-3">
                <img className="img-fluid testimonial-bg" src={dreamBg} alt="" />
                <img className="img-fluid testimonial-bg" src={dreamBg} alt="" />
            </div>

            <div className="row mt-2 pt-5 ">
                
                    {
                        testimonialData.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                    }
                
            </div>
        </section>
    );
};

export default Testimonial;