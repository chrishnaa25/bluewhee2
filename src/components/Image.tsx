import React from "react";

type ImageProps = {
    alt: string
    className: string
    src: string
}

const Image = (props: ImageProps) => (
  <img src={props.src} alt={props.alt} className={props.className} />
);

export default Image;
