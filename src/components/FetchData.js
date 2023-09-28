export function fetchArchiveData(websiteUrl, currentDate) {
    
    const tenYearsAgo = new Date(currentDate.getFullYear() - 10, currentDate.getMonth(), currentDate.getDate());
    const formattedDate = tenYearsAgo.toISOString().slice(0, 10).replace(/-/g, "");
    
    const apiUrl = `https://archive.org/wayback/available?url=${websiteUrl}&timestamp=${formattedDate}`;

    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const archivedUrl = data.archived_snapshots?.closest?.url;
            return archivedUrl;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return null;
        });
}

