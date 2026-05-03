interface INavigationLink {
    num: number
    link: string
    pageNo: number
    onClickFn: () => void
}

export const NavigationLink = ({num, link, onClickFn, pageNo}: INavigationLink) => {
    return (
        <button 
            onClick={onClickFn}
            className={`text-sm cursor-pointer tracking-widest font-Barlow-Condensed relative`}
        >
            <span className="font-bold">0{num}</span>    {link}
            <div className={`${pageNo===num ? 'scale-x-200 opacity-100 translate-0' : ""} absolute top-11.5 left-1/2 -translate-x-1/2 w-[50%] h-1 transition duration-300 bg-white opacity-0`}></div>
        </button>
    )
}