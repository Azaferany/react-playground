import React from "react";
import "./Title.scss";

type Props = {
  text: string;
};

function Title({ text }: Props) {
  return <h1 className={"custom-title"}>{text}</h1>;
}

export default Title;
