export function getFox(endpoint) {
    return window.fetch(endpoint, {
        method: 'GET',
    }).then(async res => {
        const data = await res.json();
        return data.image;
    })
    .catch(err => {
        console.log(err);
    })
}