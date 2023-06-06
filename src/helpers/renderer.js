import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

export default req => {
  const content = renderToString(
    <StaticRouter context={{}} location={req.path}>
      <Routes />
    </StaticRouter>
  );
  const html = `<html></html><head></head><body><div id="root">${content}</div><script src="bundle.js"></script></body>`;
  return html;
};
