import { TechnologyInfo } from "@/app/components/technology-info";

export default function Layout() {
  return (
    <div className="flex flex-col pb-10 max-lg:text-center max-sm:items-center">
      <div className="font-Barlow-Condensed mt-10 text-[21px] tracking-[0.15em] font-extralight flex gap-6 sm:max-lg:pl-9">
        <span className="text-white/50 font-bold">03</span>
        <h1>SPACE LAUNCH 101</h1>
      </div>
      <div className="grid lg:flex lg:flex-row-reverse lg:items-center mt-8 lg:mt-14">
        <TechnologyInfo/>
      </div>      
    </div>
  );
}

