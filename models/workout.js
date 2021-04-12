const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },

    exercise: [
        {
            type: {
                type: String,
                required: " The type of exercise is required"
            },

            name: {
                type: String, 
                required: " The name of exercsie is required"
            },

            duration: {
                type: Number,
                required: "The duration is required "
            },

            weight: {
                type: Number,
            },

            reps: {
                type: Number,
            },

            sets: {
                type: Number,
            },
            
            distance: {
                type: Number,
            }

        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports= Workout;