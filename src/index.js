import getRouter from "#lib/router.js";

export default {
  async fetch(request, env) {
    const router = getRouter({ request, env });
    return router.handle(request);
  },
};
