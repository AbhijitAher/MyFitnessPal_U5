const mongoose = require("mongoose")

const foodSchema = mongoose.Schema({

    name : {type: String, required:true},
    calories : {type: Number, required: true},
    carbs : {type: Number, required: true},
    fat : {type: Number, required: true},
    protein : {type: Number, required: true}
},
{
    versionKey : false,
    timesyamps: true,
});

module.exports = mongoose.model("food", foodSchema)

