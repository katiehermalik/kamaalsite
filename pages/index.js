import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import HeadshotsSection from '../components/HeadshotsSection';
import MediaSection from '../components/MediaSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    console.log(offset)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="main-content">
      <HeroSection />
      <div className="burrito-container divider">
        <div 
          className="burrito"
          style={{transform: `translateY(${offset * -1}px)`}}>
        </div>
      </div>
      <AboutSection />
      <section className="detroit-container city-slide divider">
        <div 
          className="detroit-right city divider-content"
          style={{transform: `translateX(${offset > 800? offset * 0.2 : console.log(offset)}px)`}}
          >
        </div>
        <div 
          className="detroit-left city divider-content"
          style={{transform: `translateX(${offset > 800? offset * -0.5 : console.log(offset)}px)`}}
          >
        </div>
      </section>
      <HeadshotsSection />
      <section className="la-container city-slide divider">
        <div 
          className="LA-right city divider-content"
          style={{transform: `translateX(${offset > 800? offset * 0.2 : console.log(offset)}px)`}}
          >
        </div>
        <div 
          className="LA-left city divider-content"
          style={{transform: `translateX(${offset > 800? offset * -0.5 : console.log(offset)}px)`}}
          >
        </div>
      </section>
      <MediaSection />
      <div className="camera-container divider">
        <div 
          className="camera"
          style={{transform: `translateY(${offset > 200? offset * -0.5 : console.log(offset)}px)`}}>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}
