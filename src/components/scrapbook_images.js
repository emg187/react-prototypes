import React from "react";

export default props=>{
    const {src} = props.about;
    const {style} = props.about;

    return (
        <img className="scrapbook-image" src={src} style={style}/>
    );
}

