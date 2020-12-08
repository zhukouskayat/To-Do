/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import configureRouter from "./routerConfig.js";

export function startApplication(doc) {
  console.log("TODO Application started");

  const router = configureRouter(doc, "/");

  router.navigate("/");
}
