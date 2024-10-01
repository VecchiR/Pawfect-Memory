async function getRandomImageURL() {
    const url = "https://dog.ceo/api/breeds/image/random";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.message;
    } catch (error) {
        console.error(error.message);
    }
}


async function getDogs() {
    const dogsArr = [];

    for (let i = 0; i <= 24; i++) {
        let goToNext = false;
        while (!goToNext) {
            const newUrl = await getRandomImageURL();
            const breedName = newUrl.match(/breeds\/([^/]+)\//)[1];
            const formattedBreedName = breedName
                .replace(/-/g, ' ')
                .replace(/\b\w/g, char => char.toUpperCase());

            if (!dogsArr.some(dog => dog.breed === formattedBreedName)) {
                dogsArr.push({
                    breed: formattedBreedName,
                    url: newUrl
                });
                goToNext = true;
            }
        }
    }
    return dogsArr;
}


export default getDogs;