const build = require("@remix-run/dev/server-build");

const { createRequestHandler } = require("@remix-run/netlify");

const { installGlobals } = require("@remix-run/node");

installGlobals();

export const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});
