const Profile = require('../models/profile');

exports.getProfiles = async (req, res) => {
    const profile = await Profile.find();
    res.status(200).json({profile})
}

exports.postProfile = async (req, res) => {
    const { name } = req.body;
    // const imagePath = `${req.protocol}://${req.get('host')}/public/uploads/` + req.file.filename;
    const imagePath = 'http://localhost:3000/public/images/' + req.file.filename;

    const profile = new Profile({
        name,
        imagePath
    })

    const createdProfile = await profile.save();
    res.status(201).json({
        profile: {
            ...createdProfile._doc
        }
    })
}