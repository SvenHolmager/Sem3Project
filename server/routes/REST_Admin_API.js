var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Teacher = require('../model/teachersFacade');
var Period = require('../model/periodsFacade');
var Class = require('../model/classesFacade');
var Student = require('../model/studentsFacade');
var Semester = require('../model/semestersFacade');
var Task = require('../model/tasksFacade');
var CompletedTasks = require('../model/completedTasksFacade');

function isDbRunning() {
    if (typeof global.mongo_error !== "undefined") {
        res.status(500);
        res.end("Error: " + global.mongo_error + " To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return false;
    }
    return true;
}

router.post('/oneTeacher', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    var newTeacher = req.body;

    Teacher.addNewTeacher(newTeacher, function (err, teacherNew) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(teacherNew));
    });

});

router.post('/moreTeachers', function (req, res) { //does add just the first object
    if (!isDbRunning()) {
        return;
    }
    var newTeachers = req.body;

    Teacher.addMoreTeachers(newTeachers, function (err, teacherNew) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(teacherNew));
    });
});

router.post('/oneStudent', function (req, res) {  //needs a class in the database
    if (!isDbRunning()) {
        return;
    }
    var newStudent = req.body;
    Student.addStudent(newStudent, function (err, studentNew) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(studentNew));
    });
});

router.post('/moreStudents', function (req, res) {  //does add just the first object
    if (!isDbRunning()) {
        return;
    }
    var newStudents = req.body;

    Student.addMoreStudents(newStudent, function (err, studentNew) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(studentNew));
    });
});

router.post('/period', function (req, res) {  //needs a semester in the database
    if (!isDbRunning()) {
        return;
    }
    var newPeriod = req.body;
    Period.addNewPeriod(newPeriod, function (err, periodNew) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(periodtNew));
    });
});

router.post('/semester', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    var newSemester = req.body;
    Semester.addSemester(newSemester, function (err, semesterNew) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(semesterNew));
    });
});

router.post('/task', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    var newTask = req.body;
    Task.addNewTask(newTask, function (err, taskNew) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(taskNew));
    });
});

router.post('/receivedScore', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    var completedTask = req.body;
    CompletedTasks.addNewCompletedTask(newCompletedTask, function (err, completedTask) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(completedTask));
    });
});

router.put('/editReceivedScore', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    var newCompletedTaskForEdit = req.body;
    Period.findByIdAndUpdate(req.params.id, newCompletedTaskForEdit, function (err, CompletedTask) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(CompletedTask));
    });
});

/*
 router.get('/attendanceScore/:id', function (req, res) { //should be day, not id
 if (!isDbRunning()) {
 return;
 }
 completedLessonModel.findById(req.params.id), function (err, attendancePerDayScore) {
 if (err) {
 res.status(err.status || 400);
 res.end(JSON.stringify({error: err.toString()}));
 return;
 }
 res.header("Content-type", "application/json");
 res.end(JSON.stringify(attendancePerDayScore));
 });
 });
 */
/*router.get('/attendanceScore/:id', function (req, res) { //should be day, not id  //to look in ca3
 if (!isDbRunning()) {
 return;
 }
 var newAttendanceScore = req.body;
 completedTaskModel.findById(req.params.id, function (id, callback) {
 model.lessonModel.find(newAttendanceScore: id)
 .populate('order')
 .populate('product')
 .exec(function (err, details) {

 model.OrderModel.populate(details,'customer', function (err, details) {

 if (err) {
 callback(err);
 }
 console.log(details);
 callback(null, details);
 });
 });
 });

 */


module.exports = router;
