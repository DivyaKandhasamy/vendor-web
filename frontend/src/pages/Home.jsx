import React from 'react';
import Analytics from '../components/Analytics';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Grid from '../components/Grid'

function Home() {
  return (
    <div>
      <div>
        <div className='w-full -z-50 pattern-bg h-full'/>
        <Hero />
      </div>
      <div>
        <div className='w-full -z-50 pattern-bg h-full'/>
        <Cards />
      </div>
      <Analytics/>
      <Grid/>
      <div>
        <div className='w-full -z-50 pattern-bg h-full'/>
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
