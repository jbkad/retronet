import { fetchArchiveData } from '../components/FetchData';

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
