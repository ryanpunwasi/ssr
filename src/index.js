import "babel-polyfill";
import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes.js";
import renderer from "./helpers/renderer.js";

import createStore from "./helpers/createStore.js";

const app = express();
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.notFound) res.status(404);

    return res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Listening");
});
