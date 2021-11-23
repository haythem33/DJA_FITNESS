const userModel = require('../models/userModel');
const courseModel = require('../models/CourseModel');
const router = require("express").Router();

router.post('/addCourse',async (req, res) => {
    const courses = new courseModel({
        coach : req.body.coach,
        price : req.body.price,
        courseName : req.body.courseName,
        dateBegin : req.body.dateBegin,
        dateEnd : req.body.dateEnd,
        nbLimite : req.body.nbLimite
    })
    await courses.save();
    res.status(200).send("courses added")
})
router.get('/getCourses', async (req,res) => {
    const courses = await courseModel.find();
    if(courses.length > 0) {
        res.status(200).send(courses);
        return;
    }
    res.status(404).send('NO COURSES');
})
router.post('/joinCourse/:id/:email',async (req,res) => {
    const course = await courseModel.findOne({_id:req.params.id})
    const user = await userModel.findOne({email:req.params.email})
    if(course.users.find(_id => id === user._id)) {
        res.status(406).send('user aleardy in course');
        return;
    }
    course.users.push(user._id);
    await course.save();
    res.status(200).send('user added to course');
})

module.exports = router