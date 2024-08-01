import React from "react";

type ButtonProps = {
    name: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    className: string
    type?: "button" | "submit" | "reset"
}

export const Button = (props: ButtonProps) => (
  <button type={props.type} className={props.className} onClick={props.onClick}>
    {props.name}
  </button>
);


