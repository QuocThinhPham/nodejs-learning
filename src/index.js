const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");

const route = require("./routes");
const db = require("./config/db");

// connect DB
db.connect();

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));
// template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      increment: function (a) {
        return a + 1;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
