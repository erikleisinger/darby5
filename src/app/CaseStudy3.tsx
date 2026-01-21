// RENAME: Case Study template → "Teaching the Product to Sell Itself"
// CONTENT REPLACED: Page copy and images updated from attached frame
// IMAGES UPDATED: Teaching the Product to Sell Itself
import {  useState } from 'react';
import svgPaths from "../imports/svg-buwgyi628p";
import { ExampleModal } from './components/ExampleModal';
import useScrollTop from './hooks/useScrollTop';
import { CaseStudyNav } from './CaseStudyNav';
export default function CaseStudy3() {
  useScrollTop();

  // POPUP: Track which example is open
  const [openExample, setOpenExample] = useState<number | null>(null);

  // FEATURE: Modal navigation arrows with looping behavior
  const totalExamples = 4;
  
  const handlePrevious = () => {
    if (openExample === null) return;
    // Loop: first example goes to last
    setOpenExample(openExample === 1 ? totalExamples : openExample - 1);
  };

  const handleNext = () => {
    if (openExample === null) return;
    // Loop: last example goes to first
    setOpenExample(openExample === totalExamples ? 1 : openExample + 1);
  };


  // Smooth scroll to section
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
    <div className="bg-[#f1eee7] relative min-h-screen w-full">
      {/* CASE STUDY: Back Button */}
      <button 
        onClick={() => window.history.back()}
        className="absolute left-[24px] top-[24px] cursor-pointer z-50 flex items-center hover:opacity-70 transition-opacity"
        aria-label="Go back"
      >
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p596d4e0} stroke="#F1EEE7" strokeWidth="2" transform="rotate(180 12 12)" />
        </svg>
      </button>

      {/* CASE STUDY: Hero Image */}
      {/* FIX: Mobile hero image set to 5:7 aspect ratio and full viewport height */}
      <div className="w-full h-screen aspect-[5/7] md:aspect-auto md:h-[600px] lg:h-[811px] relative overflow-hidden">
        <img 
          alt="" 
          className="w-full h-[50%] md:h-full object-cover object-center" 
          src="/wp-content/2025/12/Fenia-Case-Study-HERO.webp" 
        />
      </div>

      {/* CASE STUDY: Title Card */}
      <div className="absolute left-0 top-[300px] md:top-[400px] lg:top-[645px] bg-[#f1eee7] rounded-tr-[10px] px-[20px] md:px-[30px] lg:px-[40px] py-[20px] md:py-[24px] max-w-full md:max-w-[90%] lg:max-w-none">
        <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
          {/* CASE STUDY: Main Title */}
          <h1 className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#222021] text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] lg:leading-[55px] tracking-[-1.5px] lg:tracking-[-2.56px] uppercase">
            Teaching the Product to Sell Itself
          </h1>
          
          {/* CASE STUDY: Subtitle */}
          <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#555] text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] tracking-[0.4px] max-w-full lg:max-w-[800px]">
            Fenia Communication was struggling to convey their services in a way that customers understood instantly.
          </p>
          
          {/* CASE STUDY: Tags */}
          <div className="flex flex-wrap gap-[12px] md:gap-[16px]">
            <div className="bg-[#555] border-[3px] border-[#ccc] rounded-[10px] px-[16px] py-[8px] flex items-center gap-[8px]">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_24_342)">
                  <path d={svgPaths.p11104f00} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p3798a2c0} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">UX</span>
            </div>
            
            <div className="bg-[#555] border-[3px] border-[#ccc] rounded-[10px] px-[16px] py-[8px] flex items-center gap-[8px]">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_24_342)">
                  <path d={svgPaths.p34fffa00} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0625" />
                </g>
                <defs>
                  <clipPath id="clip0_24_342">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">UI</span>
            </div>
            
            <div className="bg-[#555] border-[3px] border-[#ccc] rounded-[10px] px-[16px] py-[8px] flex items-center gap-[8px]">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p15da800} stroke="#F1EEE7" strokeLinejoin="round" />
                <path d={svgPaths.pfa8cf00} stroke="#F1EEE7" strokeLinejoin="round" />
              </svg>
              <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">Copywriting</span>
            </div>
            
            <div className="bg-[#555] border-[3px] border-[#ccc] rounded-[10px] px-[16px] py-[8px] flex items-center gap-[8px]">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p25981300} stroke="#F1EEE7" strokeLinejoin="round" />
                <path d={svgPaths.p347ab00} stroke="#F1EEE7" strokeLinejoin="round" />
                <path d={svgPaths.p3d8cf300} stroke="#F1EEE7" strokeLinejoin="round" />
              </svg>
              <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">Illustration</span>
            </div>
          </div>
        </div>
      </div>

   <CaseStudyNav/>

      {/* Content Container */}
      <div className="relative w-full px-[20px] md:px-[40px] lg:px-0">
        {/* CASE STUDY: Outcome Section */}
        {/* FIX: Added 100px spacing between hero and outcomes to prevent overlap */}
        <section id="outcome" className="pt-[180px] md:pt-[200px] lg:pt-[220px] pb-[60px] md:pb-[80px] lg:pb-[100px]">
          <div className="max-w-[879px] mx-auto lg:ml-[25%] flex flex-col gap-[24px]">
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
              Outcome
            </h2>
            
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[24px] w-full">
              {/* Outcome Card 1 */}
              <div 
                className="flex-1 rounded-[10px] px-[24px] md:px-[32px] lg:px-[40px] py-[16px] flex flex-col gap-[24px] min-h-[125px]"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 427.5 125\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(21.375 6.25 -21.375 15.366 213.75 62.5)\\'><stop stop-color=\\'rgba(85,85,85,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(128,114,95,1)\\' offset=\\'0.80769\\'/><stop stop-color=\\'rgba(176,146,106,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
              >
                <div className="flex flex-col gap-[24px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">
                    Customer Growth
                  </p>
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:96_Black_Italic',sans-serif] italic text-[#f1eee7] text-[36px] md:text-[48px] leading-[1] tracking-[-0.96px] uppercase">
                    93%
                  </p>
                </div>
                <div className="h-[1px] bg-[#f1eee7] w-[70.5px]" />
              </div>

              {/* Outcome Card 2 */}
              <div 
                className="flex-1 rounded-[10px] px-[24px] md:px-[32px] py-[16px] flex flex-col gap-[24px] min-h-[125px]"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 427.5 125\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(21.375 6.25 -21.375 15.366 213.75 62.5)\\'><stop stop-color=\\'rgba(85,85,85,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(128,114,95,1)\\' offset=\\'0.80769\\'/><stop stop-color=\\'rgba(176,146,106,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
              >
                <div className="flex flex-col gap-[24px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">
                    Qualified Leads
                  </p>
                  <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] items-start md:items-end">
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro:96_Black_Italic',sans-serif] italic text-[#f1eee7] text-[36px] md:text-[48px] leading-[1] tracking-[-0.96px] uppercase">
                      +2.8/m
                    </p>
                    <div className="flex items-center gap-[4px]">
                      <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p1c8006f1} fill="#39FF14" />
                      </svg>
                      <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#39ff14] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px]">
                        Increase in Visitors
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] bg-[#f1eee7] w-[70.5px]" />
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY: Challenge Section */}
        <section id="challenge" className="pb-[60px] md:pb-[80px] lg:pb-[100px]">
          <div className="max-w-[879px] mx-auto lg:ml-[25%] flex flex-col gap-[24px] md:gap-[40px]">
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
                Challenge
              </h2>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[26px] md:leading-[32px] tracking-[0.64px]">
                Fenia Communication is an ultra-flexible subscription marketing service for small businesses. Potential clients were struggling to understand its value without a lengthy discovery call or explanation. Because of this lack of clarity, Fenia was losing potential clients before they got to the initial face-to-face meeting.
              </p>
            </div>

            <div className="flex flex-col gap-[24px]">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
                We targeted their goals to:
              </p>
              
              <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px]">
                {/* Goal 1 */}
                <div className="flex-1 bg-[#e1c78f] rounded-[10px] px-[16px] py-[30px] md:py-[40px] flex flex-col gap-[16px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#333] text-[48px] md:text-[64px] leading-[55px] tracking-[-2.56px] uppercase">
                    *
                  </p>
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#2e3641] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                    Increase Qualified Leads
                  </p>
                </div>

                {/* Goal 2 */}
                <div className="flex-1 bg-[#e1c78f] rounded-[10px] px-[16px] py-[30px] md:py-[40px] flex flex-col gap-[16px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#333] text-[48px] md:text-[64px] leading-[55px] tracking-[-2.56px] uppercase">
                    *
                  </p>
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] text-[#333] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                    Use those leads to grow their customer base.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY: Method Section */}
        <section id="methods" className="pb-[60px] md:pb-[80px] lg:pb-[100px]">
          <div className="max-w-[879px] mx-auto lg:ml-[25%] flex flex-col gap-[24px]">
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
              Method
            </h2>
            
            <div className="flex flex-col gap-[30px] md:gap-[40px]">
              {/* Method Item 1 */}
              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Grounded in research, we used user flows and strategy sessions to refine Fenia's message and pinpoint their audience: time-strapped millennial business owners juggling too many marketing tasks.
                </p>
              </div>

              {/* Method Item 2 */}
              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Refreshed the visual identity with a new logo and brand that upheld Fenia's core professionalism and trustworthiness, while moving toward a more refined, customer-centric direction.
                </p>
              </div>

              {/* Method Item 3 */}
              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Redesigned the website to use a bold, audience-specific hero, empathetic anti-marketing messaging, interactive tools, and solution-driven content to immediately engage users and guide them toward the support they need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY: Examples Section */}
        <section id="examples" className="pb-[80px] md:pb-[100px] lg:pb-[120px]">
          <div className="max-w-[770px] mx-auto lg:ml-[calc(25%+58px)] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px]">
            {/* Example 1 */}
            {/* POPUP: Click to open larger image */}
            <div className="flex flex-col gap-[16px] items-center">
              <button 
                onClick={() => setOpenExample(1)}
                className="w-full rounded-[9.322px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img 
                  alt="Home Page Anti-Marketing" 
                  className="w-full h-auto object-cover" 
                  src="/wp-content/2025/12/Case-Study-Fenia-Example3.webp" 
                />
              </button>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px] text-center">
                Home Page Anti-Marketing
              </p>
            </div>

            {/* Example 2 */}
            {/* POPUP: Click to open larger image */}
            <div className="flex flex-col gap-[16px] items-center">
              <button 
                onClick={() => setOpenExample(2)}
                className="w-full rounded-[9.322px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img 
                  alt="Solution Driven Content" 
                  className="w-full h-auto object-cover" 
                  src="/wp-content/2025/12/Case-Study-Fenia-Example1.webp" 
                />
              </button>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px] text-center">
                Solution Driven Content
              </p>
            </div>

            {/* Example 3 */}
            {/* POPUP: Click to open larger image */}
            <div className="flex flex-col gap-[16px] items-center">
              <button 
                onClick={() => setOpenExample(3)}
                className="w-full rounded-[9.322px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img 
                  alt="Results Page" 
                  className="w-full h-auto object-cover" 
                  src="/wp-content/2025/12/Case-Study-Fenia-Example2.webp" 
                />
              </button>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px] text-center">
                Results Page
              </p>
            </div>

            {/* Example 4 */}
            {/* POPUP: Click to open larger image */}
            <div className="flex flex-col gap-[16px] items-center">
              <button 
                onClick={() => setOpenExample(4)}
                className="w-full rounded-[9.322px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img 
                  alt="Case Study Examples" 
                  className="w-full h-auto object-cover" 
                  src="/wp-content/2025/12/Case-Study-Fenia-Example4.webp" 
                />
              </button>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px] text-center">
                Case Study Examples
              </p>
            </div>
          </div>
        </section>

        {/* CASE STUDY: CTA Button */}
        <div className="flex justify-center pb-[80px] md:pb-[100px]">
          <button className="bg-[#f1eee7] border-[5px] border-[#8b9544] rounded-[5px] px-[16px] py-[8px] h-[54px] flex items-center gap-[12px] hover:bg-[#8b9544] hover:text-[#f1eee7] transition-colors group">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M6 17L11 12L6 7" stroke="#8B9544" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" className="group-hover:stroke-[#f1eee7]" />
              <path d="M13 17L18 12L13 7" stroke="#8B9544" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" className="group-hover:stroke-[#f1eee7]" />
            </svg>
            <span className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#8b9544] text-[20px] leading-[normal] tracking-[0.4px] group-hover:text-[#f1eee7]">
              Let's Talk
            </span>
          </button>
        </div>

        {/* CASE STUDY: Pagination */}
        <div className="flex justify-between items-center max-w-[1268px] mx-auto pb-[60px] md:pb-[80px] px-[20px]">
          <button className="flex items-center gap-[8px] hover:opacity-70 transition-opacity">
            <svg className="size-[24px] rotate-180" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p2e41d00} fill="#F1EEE7" />
            </svg>
            <span className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#f1eee7] text-[20px] md:text-[24px] leading-[35px] tracking-[0.5px] underline decoration-solid">
              Previous
            </span>
          </button>

          <button className="flex items-center gap-[8px] hover:opacity-70 transition-opacity">
            <span className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#f1eee7] text-[20px] md:text-[24px] leading-[35px] tracking-[0.5px] underline decoration-solid">
              Next
            </span>
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p2e41d00} fill="#F1EEE7" />
            </svg>
          </button>
        </div>
      </div>

      {/* POPUP: Example Modal */}
      {/* FEATURE: Modal navigation arrows with looping behavior */}
      <ExampleModal 
        isOpen={openExample !== null} 
        onClose={() => setOpenExample(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      >
        {openExample === 1 && (
          <img 
            alt="Home Page Anti-Marketing" 
            className="w-full h-auto rounded-[10px]" 
            src="/wp-content/2025/12/Case-Study-Fenia-Example3.webp" 
          />
        )}
        {openExample === 2 && (
          <img 
            alt="Solution Driven Content" 
            className="w-full h-auto rounded-[10px]" 
            src="/wp-content/2025/12/Case-Study-Fenia-Example1.webp" 
          />
        )}
        {openExample === 3 && (
          <img 
            alt="Results Page" 
            className="w-full h-auto rounded-[10px]" 
            src="/wp-content/2025/12/Case-Study-Fenia-Example2.webp" 
          />
        )}
        {openExample === 4 && (
          <img 
            alt="Case Study Examples" 
            className="w-full h-auto rounded-[10px]" 
            src="/wp-content/2025/12/Case-Study-Fenia-Example4.webp" 
          />
        )}
      </ExampleModal>
    </div>
  );
}