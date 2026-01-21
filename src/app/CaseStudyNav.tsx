
import { useEffect, useState } from 'react';
export function CaseStudyNav({links = ['outcome', 'challenge', 'methods', 'examples']}) {
  const [isMenuSticky, setIsMenuSticky] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
          // Sticky menu activates when scrolling past the hero section (approximately 645px from Figma)
          const heroHeight = 850;
          setIsMenuSticky(window.scrollY >= heroHeight);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = isMenuSticky ? 180 : 0; // Account for sticky menu height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

    return (
              <nav 
        className={`z-10 cursor-pointer  ${
          isMenuSticky 
            ? 'fixed top-[50px] left-[40px] lg:left-[calc(25vw-243px-40px)] z-40' 
            : 'absolute top-[933px] left-[40px] lg:left-0'
        }  duration-300  p-[24px] flex flex-col  w-[243px] hidden lg:flex `}
        style={{
          transition: 'left 0.3s'
        }}
      >
        {
            links.map((link, index) => (
                <>
              <button 
                key={index}
                onClick={() => scrollToSection(link)}
                className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[16px] tracking-[0.32px] uppercase text-left hover:text-[#8b9544] transition-colors  cursor-pointer py-6"
              >
                {link}
              </button>
                      <div className="h-[1px] bg-[#818380] w-full" />
              </>
            ))
        }


      </nav>
    )
}