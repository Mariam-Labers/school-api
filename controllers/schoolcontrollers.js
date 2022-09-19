const school = require("../models/schoolschema")

const createSchool = (req, res) => {
    const newschool = new school({
      schoolname: req.body.schoolname,
      location: req.body.location,
      category: req.body.category,
      facilities: req.body.facilities,
      numofstudents: req.body.numofstudents,
      Address: req.body.address,
      contact: req.body.contact,
    });
    newschool.save();
    res.status(200).json(newschool)

}
// getting a school 
const getSchools = async (req, res) => {
    const schools = await school.find();
    res.status(200).json(schools);


}









    module.exports = {createSchool,getSchools}
