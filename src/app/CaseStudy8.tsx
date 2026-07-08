import { useEffect, useState } from 'react';
import svgPaths from "../imports/svg-buwgyi628p";
import { ExampleModal } from './components/ExampleModal';
import useScrollTop from './hooks/useScrollTop';
import { CaseStudyNav } from './CaseStudyNav';

export default function CaseStudy8() {
  useScrollTop();

  const [openExample, setOpenExample] = useState<number | null>(null);
  const totalExamples = 4;

  const handlePrevious = () => {
    if (openExample === null) return;
    setOpenExample(openExample === 1 ? totalExamples : openExample - 1);
  };

  const handleNext = () => {
    if (openExample === null) return;
    setOpenExample(openExample === totalExamples ? 1 : openExample + 1);
  };

  return (
    <div className="bg-[#f1eee7] relative min-h-screen w-full">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute left-[24px] top-[24px] cursor-pointer z-50 flex items-center hover:opacity-70 transition-opacity"
        aria-label="Go back"
      >
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p596d4e0} stroke="#F1EEE7" strokeWidth="2" transform="rotate(180 12 12)" />
        </svg>
      </button>

      {/* Hero Section */}
      {/* TODO: Replace with dedicated hero image when available */}
      <div className="w-full h-screen md:h-[600px] lg:h-[811px] relative">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/wp-content/2026/07/BCAI-AuthorityContent.webp"
        />

        {/* Title Card */}
        <div className="absolute left-0 bottom-0 md:bottom-auto md:top-[400px] lg:top-[645px] bg-[#f1eee7] rounded-tr-[10px] px-[20px] md:px-[30px] lg:px-[40px] py-[20px] md:py-[24px] max-w-full md:max-w-[90%] lg:max-w-none">
          <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
            <h1 className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#222021] text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] lg:leading-[55px] tracking-[-1.5px] lg:tracking-[-2.56px] uppercase">
              Finding the Humanity in AI
            </h1>

            <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#555] text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] tracking-[0.4px] max-w-full lg:max-w-[800px]">
              BC+AI Ecosystem had the humanity to earn real trust in AI, but almost none of it was reaching their communications or socials.
            </p>

            <div className="flex flex-wrap gap-[12px] md:gap-[16px]">
              <div className="bg-[#555] border-[3px] border-[#ccc] rounded-[10px] px-[16px] py-[8px] flex items-center gap-[8px]">
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p15da800} stroke="#F1EEE7" strokeLinejoin="round" />
                  <path d={svgPaths.pfa8cf00} stroke="#F1EEE7" strokeLinejoin="round" />
                </svg>
                <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">Strategy</span>
              </div>

              <div className="bg-[#555] border-[3px] border-[#ccc] rounded-[10px] px-[16px] py-[8px] flex items-center gap-[8px]">
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p15da800} stroke="#F1EEE7" strokeLinejoin="round" />
                  <path d={svgPaths.pfa8cf00} stroke="#F1EEE7" strokeLinejoin="round" />
                </svg>
                <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">Social</span>
              </div>

              <div className="bg-[#555] border-[3px] border-[#ccc] rounded-[10px] px-[16px] py-[8px] flex items-center gap-[8px]">
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p15da800} stroke="#F1EEE7" strokeLinejoin="round" />
                  <path d={svgPaths.pfa8cf00} stroke="#F1EEE7" strokeLinejoin="round" />
                </svg>
                <span className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#f1eee7] text-[16px] leading-[32px] tracking-[0.64px]">Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CaseStudyNav />

      {/* Content Container */}
      <div className="relative w-full px-[20px] md:px-[40px] lg:px-0">

        {/* Outcome Section */}
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
                    LinkedIn Impressions
                  </p>
                  <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] items-start md:items-end">
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro:96_Black_Italic',sans-serif] italic text-[#f1eee7] text-[36px] md:text-[48px] leading-[1] tracking-[-0.96px] uppercase">
                      +396%
                    </p>
                    <div className="flex items-center gap-[4px]">
                      <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p1c8006f1} fill="#39FF14" />
                      </svg>
                      <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#39ff14] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px]">
                        3,470 in the pilot's first month
                      </p>
                    </div>
                  </div>
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
                    Instagram Interactions
                  </p>
                  <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] items-start md:items-end">
                    <p className="font-['Neue_Haas_Grotesk_Display_Pro:96_Black_Italic',sans-serif] italic text-[#f1eee7] text-[36px] md:text-[48px] leading-[1] tracking-[-0.96px] uppercase">
                      +1,900%
                    </p>
                    <div className="flex items-center gap-[4px]">
                      <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p1c8006f1} fill="#39FF14" />
                      </svg>
                      <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#39ff14] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px]">
                        Pilot month one
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] bg-[#f1eee7] w-[70.5px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section id="challenge" className="pb-[60px] md:pb-[80px] lg:pb-[100px]">
          <div className="max-w-[879px] mx-auto lg:ml-[25%] flex flex-col gap-[24px] md:gap-[40px]">
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
                Challenge
              </h2>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[26px] md:leading-[32px] tracking-[0.64px]">
                BC+AI Ecosystem is a grassroots nonprofit building Vancouver's artificial intelligence community. Its real advantage is human: it is community-run, not institutional, at a moment when people have little trust for AI organizations. But that humanity wasn't reaching its communications or socials. The voice online sounded like any other AI org, so the trust that could have set BC+AI apart never formed, and without trust, attention didn't turn into leads.
              </p>
            </div>

            <div className="flex flex-col gap-[24px]">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
                I targeted their goals to:
              </p>

              <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px]">
                <div className="flex-1 bg-[#e1c78f] rounded-[10px] px-[16px] py-[30px] md:py-[40px] flex flex-col gap-[16px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#333] text-[48px] md:text-[64px] leading-[55px] tracking-[-2.56px] uppercase">
                    *
                  </p>
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#2e3641] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                    Get the humanity behind BC+AI into its voice online.
                  </p>
                </div>

                <div className="flex-1 bg-[#e1c78f] rounded-[10px] px-[16px] py-[30px] md:py-[40px] flex flex-col gap-[16px]">
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#333] text-[48px] md:text-[64px] leading-[55px] tracking-[-2.56px] uppercase">
                    *
                  </p>
                  <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#2e3641] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                    Turn earned trust into community leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Method Section */}
        <section id="methods" className="pb-[60px] md:pb-[80px] lg:pb-[100px]">
          <div className="max-w-[879px] mx-auto lg:ml-[25%] flex flex-col gap-[24px]">
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#333] text-[18px] md:text-[20px] leading-[32px] tracking-[0.4px]">
              Method
            </h2>

            <div className="flex flex-col gap-[30px] md:gap-[40px]">
              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Ran competitive teardowns of three rival organizations and built a ten-tab benchmark workbook, backed by community surveys and a BC+AI knowledge base.
                </p>
              </div>

              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Pinpointed the wedge: in a field people don't trust, BC+AI's grassroots humanity was its edge, and founder Kris Krüg's personal profile was its most underused proof of it.
                </p>
              </div>

              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Built the strategic spine: an Awareness to Credibility to Leads funnel, then mapped channels, content pillars, and cadence to each stage.
                </p>
              </div>

              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Surfaced growth levers the ecosystem wasn't using: certificate programs, youth initiatives, office hours, and creator collaborations.
                </p>
              </div>

              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Shipped organic content across Instagram, LinkedIn, and video with zero paid spend, writing in a human, community-first voice and A/B testing format, copy, and timing against the funnel.
                </p>
              </div>

              <div className="bg-[#555] p-[16px] flex gap-[16px] items-start rounded-[4px]">
                <svg className="size-[32px] md:size-[44px] shrink-0 mt-[4px]" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p1b564560} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                  <path d={svgPaths.pf73b980} stroke="#F1EEE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
                </svg>
                <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-white text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[0.4px]">
                  Tracked everything in GA4 and Meta Business Suite, reporting through a branded executive summary and monthly performance snapshots.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="pb-[80px] md:pb-[100px] lg:pb-[120px]">
          <div className="max-w-[770px] mx-auto lg:ml-[calc(25%+58px)] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px]">
            {/* Example 1 — Funnel SVG */}
            <div className="flex flex-col gap-[16px] items-center">
              <button
                onClick={() => setOpenExample(1)}
                className="w-full rounded-[9.322px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  alt="Awareness to Credibility to Leads funnel"
                  className="w-full h-auto object-cover"
                  src="/wp-content/2026/07/bc-ai-funnel.svg"
                />
              </button>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px] text-center">
                The Awareness to Credibility to Leads Funnel
              </p>
            </div>

            {/* Example 2 — Awareness */}
            <div className="flex flex-col gap-[16px] items-center">
              <button
                onClick={() => setOpenExample(2)}
                className="w-full rounded-[9.322px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  alt="Awareness Example"
                  className="w-full h-auto object-cover"
                  src="/wp-content/2026/07/BCAI-EngagementExample.webp"
                />
              </button>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px] text-center">
                Awareness Example
              </p>
            </div>

            {/* Example 3 — Credibility */}
            <div className="flex flex-col gap-[16px] items-center">
              <button
                onClick={() => setOpenExample(3)}
                className="w-full rounded-[9.322px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  alt="Credibility Example"
                  className="w-full h-auto object-cover"
                  src="/wp-content/2026/07/BCAI-AuthorityContent.webp"
                />
              </button>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px] text-center">
                Credibility Example
              </p>
            </div>

            {/* Example 4 — Leads */}
            <div className="flex flex-col gap-[16px] items-center">
              <button
                onClick={() => setOpenExample(4)}
                className="w-full rounded-[9.322px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  alt="Leads Example"
                  className="w-full h-auto object-cover"
                  src="/wp-content/2026/07/BCAI-LeadExample.webp"
                />
              </button>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] text-[#333] text-[14px] md:text-[16px] leading-[32px] tracking-[0.64px] text-center">
                Leads Example
              </p>
            </div>
          </div>
        </section>

        {/* CTA Button */}
        <div className="flex justify-center pb-[80px] md:pb-[100px]">
          <a href="/#contact-message" className="bg-[#f1eee7] border-[5px] border-[#8b9544] rounded-[5px] px-[16px] py-[8px] h-[54px] flex items-center gap-[12px] hover:bg-[#8b9544] hover:text-[#f1eee7] transition-colors group">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M6 17L11 12L6 7" stroke="#8B9544" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" className="group-hover:stroke-[#f1eee7]" />
              <path d="M13 17L18 12L13 7" stroke="#8B9544" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" className="group-hover:stroke-[#f1eee7]" />
            </svg>
            <span className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#8b9544] text-[20px] leading-[normal] tracking-[0.4px] group-hover:text-[#f1eee7]">
              Let me help
            </span>
          </a>
        </div>

        {/* Pagination */}
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

      {/* Example Modal */}
      <ExampleModal
        isOpen={openExample !== null}
        onClose={() => setOpenExample(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      >
        {openExample === 1 && (
          <img
            alt="Awareness to Credibility to Leads funnel"
            className="w-full h-auto rounded-[10px]"
            src="/wp-content/2026/07/bc-ai-funnel.svg"
          />
        )}
        {openExample === 2 && (
          <img
            alt="Awareness Example"
            className="w-full h-auto rounded-[10px]"
            src="/wp-content/2026/07/BCAI-EngagementExample.webp"
          />
        )}
        {openExample === 3 && (
          <img
            alt="Credibility Example"
            className="w-full h-auto rounded-[10px]"
            src="/wp-content/2026/07/BCAI-AuthorityContent.webp"
          />
        )}
        {openExample === 4 && (
          <img
            alt="Leads Example"
            className="w-full h-auto rounded-[10px]"
            src="/wp-content/2026/07/BCAI-LeadExample.webp"
          />
        )}
      </ExampleModal>
    </div>
  );
}
