export function filterArray(filterValue, filterArray){
    let moviesToShowUpdated;

    if (filterValue === 'RATE'){
        moviesToShowUpdated = filterArray.sort((a, b) => {
            return b.vote_average - a.vote_average;
        });
    } else if (filterValue === 'RELEASE DATE') {
        moviesToShowUpdated = filterArray.sort((a, b) => {
            const dateA = new Date(a.release_date);
            const dateB = new Date(b.release_date);
            
            return dateB - dateA;
        });
    }

    return moviesToShowUpdated;
}


