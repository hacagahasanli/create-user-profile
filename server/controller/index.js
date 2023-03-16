import CreateProfile from "../services/CreateProfile/index.js"
import AllProfiles from "../services/AllProfiles/index.js"
import UpdateProfile from "../services/UpdateProfile/index.js"

class ProfileController {
    async create(req, res) {
        try {
            const { author } = req.body
            const file = req.image;
            console.log(file, "FILE")
            console.log(body, "BODy");
            // const addedProfile = await CreateProfile.create(body)
            // res.json(addedProfile)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
    async allProfiles(req, res) {
        try {
            const profiles = await AllProfiles.getAll()
            res.json(profiles)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
    async update(req, res) {
        try {
            const profile = req.body
            const updatedProfile = await UpdateProfile.updateProfile(profile);
            res.json(updatedProfile)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

export default new ProfileController()