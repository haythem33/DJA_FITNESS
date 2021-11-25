const mongoose = require('mongoose');

const schema = mongoose.Schema({
    coach: { type: String, required: true },
    courseName: { type: String, required: true },
    price: { type: Number, required: true },
    dateBegin: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    nbLimite: { type: Number, required: true },
    users: [
        {
            userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'users' },
            rating: { type: Number, enum: [null,1, 2, 3, 4, 5] }
        }
    ]
})

module.exports = mongoose.model("courses", schema);