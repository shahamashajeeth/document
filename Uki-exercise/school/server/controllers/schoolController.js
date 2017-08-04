var mongoose = require("mongoose");
var school = require("../data/school");
var _ = require("underscore");

var router = require("express").Router();
router.route("/schools/:id?").get(getSchools).post(addschool).delete(deleteschool);

function getSchools(req, res) {
    School.find(function (err, schools) {
        if (err)
            res.send(err);
        else
            res.json(schools);
    });
}

function addschool(req, res) {
    var school = new school(_.extend({}, req.body));
    school.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(school);
    });
}

function deleteschool(req, res) {
    var id = req.params.id;
    school.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
