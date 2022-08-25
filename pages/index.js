import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import InstaGallery from '../components/InstaGallery';
import { SliderData } from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Capture Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero heading='Capture Photography' message='I capture moments in nature peace and keep them glory.' />
      <Slider slides={SliderData} />
      <InstaGallery />
    </div>
  );
};