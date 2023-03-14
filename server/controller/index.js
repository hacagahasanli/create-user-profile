import CreateProfile from "../services/CreateProfile/index.js"

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
}

export default new ProfileController()