import CreateProfile from "../services/CreateProfile/index.js"
import AllProfiles from "../services/AllProfiles/index.js"

class ProfileController {
    async create(req, res) {
        try {
            const body = req.body
            const addedProfile = await CreateProfile.create(body)
            res.json(addedProfile)
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
}

export default new ProfileController()