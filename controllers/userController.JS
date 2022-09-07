const user = require("../models/userschema")
const bcryptjs = ("bcryptjs")

//  adding a user

const addUser = async (req, res) => {
    // enscripting a password
    const salt = await bcryptjs.genSalt(10)
    const hashedpassword = await bcryptjs.hash(req, body.password, salt)
    
    const user = new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    
    await newuser.save();
    res.statuse(201).json({
        _id: newuser._id,
        username: newUser.username,
        email: newUser.email
    })
}
module.exports={addUser}