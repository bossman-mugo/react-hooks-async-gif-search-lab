import react, {useState} from "react";
import GifSearch from "./GifSearch";


function GifListContainer(){
    const [gifs, setGifs] = useState([]);

    function handleSearch(query){
        const apiKey = "lyFN4ucs1L9BG50JSb9WSEleE7eCEpuv";
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=3`;

        fetch (url)
        .then(r => r.json)
        .then(data => {
            const gifData = data.data.map((gif) => ({
                id: gif.id,
                url: gif.images.original.url
            }));
            setGifs(gifData);
        })
        .catch(console.error);

    }

    return (
        <div>

            <GifSearch onSearch={handleSearch} />
            <GifList gifs={gifs} />




        </div>
    )






}

export default GifListContainer;