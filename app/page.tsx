import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col lg:flex-row justify-between items-end lg:px-25 px-10 max-lg:items-center max-lg:text-center">
      <div className="mt-4 sm:mt-26 lg:mt-34 text-BLUE-300">
        <h1 className="font-Barlow-Condensed tracking-[0.15em] text-lg font-extralight">
          SO, YOU WANT TO TRAVEL TO          
          <div className="font-Bellefair text-8xl mt-4 text-white">SPACE</div>
        </h1>
        <div className="mt-7 text-sm tracking-wide leading-6 sm:max-w-lg">
            {`Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the
            edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!`}
        </div>
      </div>          
      <Link
        href={'/destination/moon'} 
        className="transition duration-500 hover:text-BLUE-900/50 hover:ring-60 ring-white/20 bg-white rounded-full w-48 h-48 text-2xl text-BLUE-900 font-Bellefair flex justify-center items-center cursor-pointer max-sm:mt-26 max-lg:mt-20"
      >
        EXPLORE
      </Link>     
    </div>
  );
}

