import React from 'react';
import classes from './Hero.module.css';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/kometi0.jpg" alt="An image showing fantaz" width={300} height={300} />
      </div>
      <h1>Hi, I'm Fantaz</h1>
      <p>I develop the internet, with help from frontend frameworks like NextJS.</p>
    </section>
  );
};

export default Hero;
