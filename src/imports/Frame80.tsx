import imgHero31 from "figma:asset/aaea1de5c1a74189313e7c1d7a4784117b89018e.png";
import imgHeroV21 from "figma:asset/9d737f1e8132ce86b9ad571c8e8b74453cf7a454.png";
import imgHero21 from "figma:asset/325b7b635cea8ee47225b694f3bd67709249471f.png";

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-[505px] w-[1307px]">
      <div className="flex h-[106.948px] items-center justify-center relative shrink-0 w-[688.396px]" style={{ "--transform-inner-width": "1209.53125", "--transform-inner-height": "55" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.496deg]">
          <p className="font-['Neue_Haas_Grotesk_Display_Pro:95_Black',sans-serif] leading-[55px] not-italic relative text-[#333] text-[64px] tracking-[-2.56px] uppercase w-[687.547px]">
            <span>{`Great Design Begins with `}</span>
            <span className="text-[#8b9544]">Intention.</span>
          </p>
        </div>
      </div>
      <div className="flex h-[25.313px] items-center justify-center min-w-full relative shrink-0 w-[min-content]" style={{ "--transform-inner-width": "260.578125", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.496deg] w-full">
          <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[32px] not-italic relative text-[#333] text-[20px] tracking-[0.4px] w-full">Darby Yule Creative Studios</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-1/2 top-[calc(50%-119.04px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="relative shrink-0 size-[425px]" data-name="Hero3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHero31} />
      </div>
      <div className="relative shrink-0 size-[425px]" data-name="Hero v2 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroV21} />
      </div>
      <div className="relative shrink-0 size-[425px]" data-name="Hero2 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHero21} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[663.089px] left-[67px] top-[calc(50%+86.04px)] translate-y-[-50%] w-[1307px]">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] gap-[22px] items-center leading-[normal] not-italic right-[66px] text-[#555] text-[16px] top-[40px] tracking-[0.32px] uppercase">
      <p className="relative shrink-0 text-center w-[141px]">Offerings</p>
      <p className="relative shrink-0 text-center w-[141px]">Stories</p>
      <p className="relative shrink-0 text-center w-[141px]">About</p>
      <p className="relative shrink-0 text-nowrap">Collaborators</p>
      <p className="relative shrink-0 text-center w-[141px]">Contact</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Frame3 />
      <Frame4 />
    </div>
  );
}