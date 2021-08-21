const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class SideController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("home", { courses: multipleMongooseToObject(courses) })
      )
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SideController();
