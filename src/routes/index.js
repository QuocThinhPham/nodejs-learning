const meRoute = require("./me");
const newsRoute = require("./news");
const sideRoute = require("./side");
const coursesRoute = require("./courses");

function route(app) {
  app.use("/me", meRoute);
  app.use("/news", newsRoute);
  app.use("/courses", coursesRoute);
  app.use("/", sideRoute);
}

module.exports = route;
