import imgHero21 from "figma:asset/325b7b635cea8ee47225b694f3bd67709249471f.png";
import imgHeroV21 from "figma:asset/9d737f1e8132ce86b9ad571c8e8b74453cf7a454.png";
import imgHero31 from "figma:asset/aaea1de5c1a74189313e7c1d7a4784117b89018e.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[122px] top-[40px]">
      <div className="relative shrink-0 size-[186px]" data-name="Hero2 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHero21} />
      </div>
      <div className="relative shrink-0 size-[186px]" data-name="Hero v2 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroV21} />
      </div>
      <div className="relative shrink-0 size-[186px]" data-name="Hero3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHero31} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex flex-col gap-[16px] items-start left-[16px] w-[397px]">
      <div className="flex h-[214.428px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1209.53125", "--transform-inner-height": "55" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.496deg] w-full">
          <p className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] leading-[55px] not-italic relative text-[#333] text-[64px] tracking-[-2.56px] uppercase w-full">
            <span>{`Great Design Begins with `}</span>
            <span className="text-[#8b9544]">Intention.</span>
          </p>
        </div>
      </div>
      <div className="flex h-[17.436px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "260.578125", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.496deg] w-full">
          <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[32px] not-italic relative text-[#333] text-[20px] tracking-[0.4px] w-full">Darby Yule Creative Studios</p>
        </div>
      </div>
    </div>
  );
}

export default function MobileView() {
  return (
    <div className="bg-[#f1eee7] relative size-full" data-name="Mobile View">
      <Frame />
      <Frame1 />
    </div>
  );
}