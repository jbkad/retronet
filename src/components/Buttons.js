export function Buttons({ handleButtonClick }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button 
                type="button"
                className="bg-[#C4302B] text-white font-jaro p-8 rounded-lg text-center text-lg md:text-xl w-full mx-auto hover:font-extrabold hover:text-black hover:underline underline-offset-4"
                onClick={() => handleButtonClick('https://www.youtube.com')}
            >
                YouTube
            </button>
            <button 
                type="button"
                className="bg-[#FF4300] text-black font-jaro p-8 rounded-lg text-center text-lg md:text-xl w-full mx-auto hover:font-extrabold hover:text-white hover:underline underline-offset-4" 
                onClick={() => handleButtonClick('https://www.reddit.com')}
            >
                Reddit
            </button>
            <button 
                type="button"
                className="bg-[#0068FF] text-white font-jaro p-8 rounded-lg text-center text-lg md:text-xl w-full mx-auto hover:font-extrabold hover:text-black hover:underline underline-offset-4" 
                onClick={() => handleButtonClick('https://www.bloomberg.com')}
            >
                Bloomberg
            </button>
            <button 
                type="button"
                className="bg-[#FFF0E6] text-black font-jaro p-8 rounded-lg text-center text-lg md:text-xl w-full mx-auto hover:font-extrabold hover:text-grey hover:underline underline-offset-4" 
                onClick={() => handleButtonClick('https://www.ft.com/')}
            >
                Financial Times
            </button>
            <button 
                type="button"
                className="bg-[#720E9E] text-white font-jaro p-8 rounded-lg text-center text-lg md:text-xl w-full mx-auto hover:font-extrabold hover:text-black hover:underline underline-offset-4" 
                onClick={() => handleButtonClick('https://www.yahoo.com')}
            >
                Yahoo
            </button>
            <button 
                type="button"
                className="bg-[#EE3322] text-black font-jaro p-8 rounded-lg text-center text-lg md:text-xl w-full mx-auto hover:font-extrabold hover:text-white hover:underline underline-offset-4" 
                onClick={() => handleButtonClick('https://www.buzzfeed.com')}
            >
                Buzzfeed
            </button>
            <button 
                type="button"
                className="bg-[#FFFFFF] text-black font-jaro p-8 rounded-lg text-center text-lg md:text-xl w-full mx-auto hover:font-extrabold hover:text-black hover:underline underline-offset-4" 
                onClick={() => handleButtonClick('https://www.bbc.com')}
            >
                BBC
            </button>
            <button 
                type="button"
                className="bg-[#000000] text-white font-jaro p-8 rounded-lg text-center text-lg md:text-xl w-full mx-auto hover:font-extrabold hover:text-grey hover:underline underline-offset-4" 
                onClick={() => handleButtonClick('https://www.forbes.com')}
            >
                Forbes
            </button>
            <button 
                type="button"
                className="bg-[#004A82] text-white font-jaro p-8 rounded-lg text-center text-lg md:text-xl w-full mx-auto hover:font-extrabold hover:text-white hover:underline underline-offset-4" 
                onClick={() => handleButtonClick('http://www.theguardian.com/uk')}
            >
                The Guardian
            </button>
            <button 
                type="button"
                className="bg-[#FFFFFF] text-black font-jaro p-8 rounded-lg text-center text-lg md:text-xl w-full mx-auto hover:font-extrabold hover:text-black hover:underline underline-offset-4" 
                onClick={() => handleButtonClick('https://en.wikipedia.org/wiki/Main_Page')}
            >
                Wikipedia
            </button>
        </div>
    )
};