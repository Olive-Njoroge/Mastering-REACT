const People = require('../models/people');

exports.getPeople = async(req, res) => {
    try{
        const people = await People.find();
        res.status(200).json(people)
    }catch(error){
        res.status(500).json({message: "Couldn't retrieve people from the database"});
    }
}

exports.createPeople = async(req, res) => {
    try{
         const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }
        const newPerson = await People.create({ name, email });
        res.status(200).json(newPerson);
    }catch(error){
        res.status(500).json({message: "Couldn't create new person"})
    }
}

exports.updatePeople = async(req, res) => {
    try{
        const id = req.params.id
        const updated = await People.findByIdAndUpdate(id, req.body,{
            new: true,
            runValidators: true
        });

        if (!updated) {
            return res.status(404).json({ message: "Person not found" });
        }

        res.status(200).json(updated);
    }catch(error){
        res.status(500).json({message: "Couldn't update"});
    }
}

exports.deletePeople = async(req, res) => {
    try{
        const id = req.params.id
        const deleted = await People.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Person not found" });
        }

        res.status(200).json({ message: "Person deleted successfully", deleted });

    }catch(error){
        res.status(500).json({message: "Could not delete"});
    }
}