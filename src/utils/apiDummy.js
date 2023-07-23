export async function fetchBio(person) {
    let delay = person === 'Cifuyu' ? 2000 : 200;
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(`this is ${person} Bio's`)
        }, delay)
    })
}