import * as React from "react";

interface Props {
  errorMessage: string;
}

export const ErrorMessage: React.FC<Props> = ({ errorMessage }) => {
  return (
    <div className="error-wrapper">
      <span>{errorMessage}</span>
    </div>
  );
};
