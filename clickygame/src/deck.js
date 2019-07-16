function shuffle(array) {
    //making a variable for the array
    //array.slice copies all of the items into a new array*
    const _array = array.slice(0)
    for (let i = 0; i < array.length - 1; i++) {
        let randomIndex = Math.floor(Math.random * (i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }

    return _array
}

export default function initializeDeck() {
    let id = 0;
    const cards = ['css', 'docker', 'html', 'javascript', 'jquery', 'mysql', 'node', 'react'].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        });
        acc.push({
            id: id++,
            type
        });
        return acc;
    }, []);
    return shuffle(cards);
}