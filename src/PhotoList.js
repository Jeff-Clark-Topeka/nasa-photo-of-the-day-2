import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"

const PhotoList = () => {
    
    const [photos, setPhotos] = useState({});
    
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=kprPmclngiQdPbYhAIQ93eCLFhvpkiej7Aagd6PU")
            .then(response => {
                console.log(response);
                setPhotos(response.data);
            })
            .catch(error => {
                console.log("Error", error)
            })
    }, []);

    return (
        <div>
            <PhotoCard photo={photos}/>
        </div>
    );
};

export default PhotoList;