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



async function imgRatioIsAppropriate(url) {

    //check 
    const ratio = await getImageRatio(url);
    console.log(ratio);
    return ratio >= 0.9 && ratio <= 1.4;

}

async function getImageRatio(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = function () {
            const ratio = img.naturalWidth / img.naturalHeight;
            resolve(ratio);
        };

        img.onerror = function () {
            reject('Failed to load image');
        };

        img.src = url;
    });
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

            const ratioIsOk = await imgRatioIsAppropriate(newUrl);

            if (!dogsArr.some(dog => dog.breed === formattedBreedName) && ratioIsOk) {
                dogsArr.push({
                    breed: formattedBreedName,
                    url: newUrl
                });
                goToNext = true;
            }
        }
    }
    console.log('Finished fetching dogs');
    return dogsArr;
}


// getDogs();

export default getDogs;