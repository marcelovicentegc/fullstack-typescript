import * as React from "react";
import * as style from "./main.scss";

interface Props {
  errorMessage: string;
}

export const ErrorMessage: React.FC<Props> = ({ errorMessage }) => {
  return (
    <div className={style.errorWrapper}>
      <span>{errorMessage}</span>
    </div>
  );
};
