import React from "react";
import { BrowserRouter } from "react-router-dom";

export const Wrapper = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  return (<BrowserRouter>{children}</BrowserRouter>);
};
