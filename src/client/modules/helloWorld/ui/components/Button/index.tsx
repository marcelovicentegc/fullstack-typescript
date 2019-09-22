import * as React from "react";
import * as style from "./main.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
}

export const Button: React.SFC<Props> = props => {
  return (
    <button {...props} className={style.button}>
      <span>{props.label}</span>
    </button>
  );
};
