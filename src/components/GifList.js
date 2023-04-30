import React from "react";
import GifListContainer from "./GifListContainer";

function GifList({gifs}){
    return(
        <ul>
            {gifs.map((gif) => (
                <li key={gif.id}>
                    <img src={gif.url} alt={gif.id} />
                </li>
            ))}
        </ul>
    )
}

export default GifList;