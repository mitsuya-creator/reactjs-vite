export function fetchData(url) {
    if (url === '/planets') {
        return fetchPlanets();
    } else if (url.startsWith('/planets/')) {
        const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
        console.log(match)
        if (!match || !match[1] || !match[1].length) {
            throw Error(`Expected URL like "/planets/earth/places". Received: "${url}".`)
        }
        return fetchPlaces(match[1]);
    } else {
        throw Error(`Expected URL like "/planets/earth/places". Received: "${url}".`)
    }
}

async function fetchPlanets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 'earth', name: 'Earth' },
                { id: 'venus', name: 'Venus' },
                { id: 'mars', name: 'Mars' }
            ])
        }, 1000)
    })
}

async function fetchPlaces(planetId) {
    if (typeof planetId !== 'string') throw Error(`fetchPlaces[planetId] expect a string argument.
    instead received: ${planetId}.`);

    return new Promise(resolve => {
        setTimeout(() => {
            if (planetId === 'earth') {
                resolve([
                    { id: 'laos', name: 'Laos' },
                    { id: 'vietnam', name: 'Vietnam' },
                    { id: 'spain', name: 'Spain' }
                ])
            } else if (planetId === 'venus') {
                resolve([
                    { id: 'aurelia', name: 'Aurelia' },
                    { id: 'diana-chasm', name: 'Diana Cashm' },
                    { id: 'kumsong-vallis', name: 'Kumsong Vallis' }
                ])
            } else if (planetId === 'mars') {
                resolve([
                    { id: 'aluminum-city', name: 'Aluminum City' },
                    { id: 'new-new-york', name: 'New New York' },
                    { id: 'vishniac', name: 'Vishniac' }
                ])
            } else throw Error(`Unknown planetId: ${planetId}`)
        }, 3000);
    })
}