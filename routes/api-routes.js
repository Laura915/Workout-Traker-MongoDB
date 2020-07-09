// Api routes
const router = require("express").Router();
const db = require("../models");

// sends JSON of all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

// adds a new workout and sends it
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.json(err);
        });
});

// add exercises to a workout, then sends updated workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;




