import React from "react";
import styled from "styled-components";

const PhotoInfo = styled.div`
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    margin: 30px 202px;
`;

const PhotoDesc = styled.p`
    display: flex;
    margin: 20px 15px;
`

const PhotoCard = props => {

    console.log("Card props", props)

    return (
        <div>
            <h2>{props.photo.title}</h2>
            <img src={props.photo.url}/>
            <PhotoInfo>
                <PhotoDesc>{props.photo.explanation}</PhotoDesc>
                <p>{props.photo.date}</p>
            </PhotoInfo>
        </div>
    )
};

export default PhotoCard;