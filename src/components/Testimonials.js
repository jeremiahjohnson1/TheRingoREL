import React from 'react';
import TestimonialSliders from './TestimonialSliders';

const Testimonials = () => {
  return (
    <section className='h-[20vh] lg:mb-[120px]'>
      <div className='container mx-auto flex items-center justify-center lg:justify-end h-full'>
        <div className='w-full mx-auto lg:mx-0 lg:max-w-[570px]' style={{marginTop: '100px'}}>
          <TestimonialSliders/>
        </div>
      </div>
    </section>
  )
}

export default Testimonials