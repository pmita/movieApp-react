export function filterArray(filterValue, filterArray){
    let moviesToShowUpdated;

    if (filterValue === 'STARS'){
        moviesToShowUpdated = filterArray.sort((a, b) => {
            return b.rating - a.rating;
        });
    } else if (filterValue === 'RELEASE DATE') {
        moviesToShowUpdated = filterArray.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            
            return dateB - dateA;
        });
    }

    return moviesToShowUpdated;
}


