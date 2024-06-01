import { useMediaQuery } from 'react-responsive';
import { Boxes } from '../components/background-boxes'
import { HeroHeading } from '../components/HeroHeading'
import Navbar from '../components/Navbar'

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center" >
      <Navbar />
      {isMobile ? null : <Boxes /> }
      <HeroHeading />
      </div>
      </div>
    </>
  )
}

export default Hero