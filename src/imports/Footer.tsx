import svgPaths from "./svg-ro01cix2zi";
import imgLogoAlt1 from "figma:asset/9341ed0809e514c6973e446535e1f9b2a8ffc975.png";

function Frame() {
  return (
    <div className="content-stretch flex font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] gap-[24px] items-center leading-[normal] not-italic relative shrink-0 text-[#555] text-[16px] text-nowrap tracking-[0.32px] uppercase w-[705px]">
      <p className="relative shrink-0 text-center">Offerings</p>
      <p className="relative shrink-0 text-center">Stories</p>
      <p className="relative shrink-0 text-center">About</p>
      <p className="relative shrink-0">Collaborators</p>
      <p className="relative shrink-0 text-center">Contact</p>
      <p className="relative shrink-0 text-center">Privacy Policy</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[705px]">
      <div className="h-[60.212px] relative shrink-0 w-[214.089px]" data-name="Logo Alt 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoAlt1} />
      </div>
      <Frame />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="relative shrink-0 size-[32.094px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0941 32.0941">
        <g clipPath="url(#clip0_4_1070)" id="Social Icons">
          <path d={svgPaths.p1ee81980} fill="var(--fill-0, #F1EEE7)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_1070">
            <rect fill="white" height="32.0941" width="32.0941" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIcons1() {
  return (
    <div className="relative shrink-0 size-[32.094px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0941 32.0941">
        <g clipPath="url(#clip0_4_1051)" id="Social Icons">
          <path d={svgPaths.p3439d780} fill="var(--fill-0, #F1EEE7)" id="Vector" />
          <path d={svgPaths.p2bde0600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p370f0b00} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_4_1051">
            <rect fill="white" height="32.0941" width="32.0941" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessageFill() {
  return (
    <div className="absolute left-[3.81px] size-[24px] top-[4px]" data-name="Message_fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Message_fill">
          <path d={svgPaths.p26ba6c80} fill="var(--fill-0, #F1EEE7)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function SendFill() {
  return (
    <div className="relative rounded-[7.294px] shrink-0 size-[32.094px]" data-name="Send_fill">
      <div aria-hidden="true" className="absolute border-[#f1eee7] border-[2.188px] border-solid inset-0 pointer-events-none rounded-[7.294px]" />
      <MessageFill />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <SocialIcons />
      <SocialIcons1 />
      <SendFill />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#e1c78f] relative size-full to-[#7b6d4e]" data-name="Footer">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[40px] py-[28px] relative size-full">
          <Frame1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}