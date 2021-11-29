
const sortByRate = (a, b) => {
    return b.vote_average - a.vote_average;
}

const sortByDate = (a, b) => {
    const dateA = new Date(a.release_date);
    const dateB = new Date(b.release_date);
    return dateB - dateA;
}

const sortingFunctions = {
    DATE : sortByDate,
    RATE : sortByRate,
}

export function filterArray(sortValue, array){
    return sortValue ? array.sort(sortingFunctions[sortValue]) : array;
}


