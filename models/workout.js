// Defines the Workout schema 
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [{
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }]
    },
    //Include virtuals by default so mongoose can identify JSON.stringify
    {
        toJSON: { virtuals: true }
    }
);

// Total duration virtual property
workoutSchema.virtual("totalDuration").get(function(){
    // Reduce function returns exercises array's sum
    return this.exercises.reduce(function( total , exercise){
        return total + exercise.duration;
    }, 0 );
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;