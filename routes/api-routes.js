// Api routes
const router = require("express").Router();
const db = require("../models");

// sends JSON of all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        });
});

module.exports = router;




