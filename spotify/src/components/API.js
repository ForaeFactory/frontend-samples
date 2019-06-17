const API_URL = 'https://api.500px.com/v1/photos/search?type=photos&image_size%5B%5D=14&consumer_key=your-api-key-here&include_states=true&formats=jpeg&exclude_nude=true';
const Client_ID = '0c586aa8d37b4fc780a949b07e873d26';
const Client_Secret = 'fc31d3ad189e45deae823c78b5fc6708';



function search(searchTerm) {
    const url = `${API_URL}&term=${searchTerm}`;
    return fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result.photos);
        });
}

search("Puppies")

