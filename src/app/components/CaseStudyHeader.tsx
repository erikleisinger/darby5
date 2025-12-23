import React from "react";
export function CaseStudyHeader({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="-translate-y-1/2 left-0 sticky top-[-120px]  bg-[#f1eee7] rounded-tr-[10px] px-[20px] md:px-[30px] lg:px-[40px] py-[20px] md:py-[24px] max-w-full md:max-w-[90%] lg:max-w-none w-fit">
      <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
        {/* CASE STUDY: Main Title */}
        <h1 className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] text-[#222021] text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] lg:leading-[55px] tracking-[-1.5px] lg:tracking-[-2.56px] uppercase">
          {title}
        </h1>

        {/* CASE STUDY: Subtitle */}
        <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] text-[#555] text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] tracking-[0.4px] max-w-full lg:max-w-[800px]">
          {description}
        </p>

        {children}
      </div>
    </div>
  );
}
