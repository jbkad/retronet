import { useEffect, useState } from 'react';
import LandingDate from './components/LandingDate';
import { Buttons } from './components/Buttons';
import { fetchArchiveData } from './components/FetchData';
import { Navbar } from './components/Navbar';
  
export async function handleButtonClick(websiteUrl, setLoadingStatus) {
  setLoadingStatus(true);
  try {
    const archivedUrl = await fetchArchiveData(websiteUrl, new Date());

    if (archivedUrl) {
        window.open(archivedUrl, '_blank');
    }   else {
        console.log(`Sorry! We don't have website data for $(url) for this specific date.`);
    }
  }   finally {
      setLoadingStatus(false);
  }
}
  
function Loading() {
  return (
    <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-bg z-10">
        <div className="block text-highlight font-jaro text-6xl animate-pulse">
            Loading...
        </div>
        <div className="block text-md font-redhat text-paragraph max-w-sm py-2">
            If no data from this website was captured on this day, you will be redirected to another date.
        </div>
    </div>
  );
}
  
function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      if (!isLoading) {
          const timeout = setTimeout(() => {
              setIsLoading(false)
          }, 10000);
          
          return () => clearTimeout(timeout);
      }
  }, [isLoading]);

  return (
    <div className="family-barriecito text-center py-5 px-5 mx-auto max-w-5xl h-full bg-bg">
        {isLoading && <Loading />}
        <Navbar />
        <div className="block">
            <span className="text-secondary text-sm font-jaro bg-paragraph py-2 px-5">Step back in time to</span> <LandingDate />
        </div>
        <p className="text-secondary sm:text-base text-sm font-redhat bg-paragraph py-2 px-5 mt-5">
          Welcome to <span className="underline underline-offset-4">Retro Net</span>, your ultimate time-travel portal to the digital past! 
          Witness the pixelated charm, forgotten designs, and web trends that once defined the online landscape. 
          Relive the nostalgia by shooting <span className="underline underline-offset-4">10 years back</span> through a click of a button.
          Please ensure that popup window permissions are enabled in your browser! 
        </p>
        <p className="font-redhat text-sm text-paragraph py-4">
          Sometimes no data was captured from a website on the select date. 
          When this happens, you will be redirected to the next nearest date with captured data. 
        </p>
        <Buttons handleButtonClick={(url) => handleButtonClick(url, setIsLoading)} />
    </div>
  )
};

export default App;