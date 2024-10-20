import { styles } from '../styles';
import { photo } from '../constants';
import PhotoCard from '../components/PhotoCard'; // Import the PhotoCard component
import herobg from '../assets/herobg.png'; // Import the background image

const About = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <span className='hash-span' id='aboutwrapper'>&nbsp;</span>
      <div className='relative'>
        <div
          style={{
            backgroundImage: `url(${herobg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',  // Ensure background image is centered
            padding: '2rem 0'  // Add padding to ensure content doesn't touch edges
          }}
        >
          <div className='text-center'>
            <h2 className={`${styles.sectionHeadText} text-white`}>Daryna Borzovets</h2>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mt-20'>
          <div className='w-full md:w-1/2'>
            <PhotoCard {...photo[0]} />
          </div>
          <div className='w-full md:w-1/2'>
            <div className='p-6'>
              <h3 className='text-white text-[34px] font-bold'>Introduction</h3>
              <p className={styles.sectionSubText}>
                Junior Front-End Engineer with over two years of experience. Driven by challenges and new technologies, influencing business development and daily life. Delivered projects utilizing best practices across a range of domains, including hospitality, photography and personal websites.   
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
