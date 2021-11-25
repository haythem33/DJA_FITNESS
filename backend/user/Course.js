const courseModel = require("../models/CourseModel");
const router = require("express").Router();

router.post("/addCourse", async (req, res) => {
  const courses = new courseModel({
    coach: req.body.coach,
    price: req.body.price,
    courseName: req.body.courseName,
    dateBegin: req.body.dateBegin,
    dateEnd: req.body.dateEnd,
    nbLimite: req.body.nbLimite,
  });
  await courses.save();
  res.status(200).send("courses added");
});
router.get("/getCourses", async (req, res) => {
  const courses = await courseModel.find().populate("users.userId");
  if (courses.length > 0) {
    res.status(200).send(courses);
    return;
  }
  res.status(404).send("NO COURSES");
});
router.post("/joinCourse/:id/:userId", async (req, res) => {
  const course = await courseModel.findOne({
    _id: req.params.id,
    users: { userId: req.params.userId },
  });
  if (course) {
    res.status(406).send("user aleardy in course");
    return;
  }
  let obj = { userId: req.params.userId, rating: null };
  await courseModel.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { users: obj } }
  );
  res.status(200).send("user added to course");
});
router.put("/rateCourse/:id/:userId", async (req, res) => {
  const course = await courseModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { "users.$[u].rating": req.body.rating } },
    {
      arrayFilters: [{ "u.userId": req.params.userId }],
      new: true,
    }
  );
  if (!course) {
    res.status(500).end("ERROR");
    return;
  }
  res.status(200).end("UPDATED");
});
router.get("/getCourseRating/:id",async (req, res) => {
    const course = await courseModel.findOne({_id : req.params.id});
    let total = 0;
    course.users.map((u) => {
        if(u.rating) {
            total += u.rating;
        }
    })
    res.status(200).end((total / course.users.length)+"");
})
router.get("/getUserCourseRating/:id/:idUser",async (req, res) => {
  const course = await courseModel.findOne({_id:req.params.id,"users.userId": req.params.idUser});
  if(!course){
    res.status(404).end("NO RATING");
    return;
  }
  let rating = course.users.find(u => u.userId.equals(req.params.idUser));
  res.status(200).end(JSON.stringify(rating));
})
module.exports = router;
