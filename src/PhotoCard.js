import React from "react";

const PhotoCard = props => {

    console.log("Card props", props)

    return (
        <div>
            <h2>{props.photo.title}</h2>
            <img src={props.photo.url}/>
            <div>
                <p>{props.photo.explanation}</p>
                <p>{props.photo.date}</p>
            </div>
        </div>
    )
};

export default PhotoCard;