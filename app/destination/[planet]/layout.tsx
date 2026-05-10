import { DestinationInfo } from "@/app/components/destination-info";

export default function Layout() {
  return (
    <div className="flex flex-col px-12 pb-10 lg:px-30 max-lg:text-center max-lg:items-center">
      <div className="font-Barlow-Condensed mt-10 text-[21px] tracking-[0.15em] font-extralight flex gap-6">
        <span className="text-white/25 font-bold">01</span>
        <h1>PICK YOUR DESTINATION</h1>
      </div>
      <div className="grid lg:grid-cols-2 mt-8 lg:mt-14">
        <DestinationInfo/>        
      </div>      
    </div>
  );
}

