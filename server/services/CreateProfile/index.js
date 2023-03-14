import Profile from "../../models/index.js"

class CreateProfile {
    async create(profile) {
        const enteredProfile = await Profile.create(profile)
        return enteredProfile
    }
}

export default new CreateProfile()