const mongoose = require("mongoose")


const schoolschema = mongoose.Schema({
    schoolname: {
        type: String,
        required: true,
        unique: true
    
    },
    location: {
        type: String,
        required: true
    

    },
    category: {
        type: String,
        required: true
        
    },
    facilities: {
        type: Array,
        required: true,
        
        
    },
    numofstudents: {
        type: Number,
        required: true
        
    },

    Addres: {
        gps: String,
        box: String
        
    },

    contact: {
        phone: String,
        email: String
        

    },
    
        
}, {
    timestamps: true,
}
);

const school = mongoose.model("school", schoolschema)
module.exports=school
