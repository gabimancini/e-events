import './hero.css';
import HeroImg from '../../../assets/hero.png';
import Link from '../../atoms/Link/Link';
import classnames from "classnames";
const Hero = () => {
    return (
        <section className='hero-section'>
            <div className='hero-section-text'><h1>Welcome
bla bla bla bla bla</h1>
<p>Lorem ipsum dolor sit amet, torquatos adolescens his ad. Eum ut officiis adversarium, sint aperiam vituperatoribus no sea. Lorem ipsum dolor sit amet, torquatos adolescens his ad.</p>
          <div>
           <Link  className="black" text="How it Works" />
           <Link  className="ghost" text="Get Started" />
           </div>
           </div>
            <div>
                <img src={HeroImg} alt="Hearts" />
            </div>
        </section>
    )
}

export default Hero;