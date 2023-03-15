import Profile from "../../models/index.js"

class UpdateProfile {
    async updateProfile(profile) {
        if (!profile._id) throw new Error("Id not defined")
        const updatedProfile = Profile.findByIdAndUpdate(profile._id, profile, { new: true })
        return updatedProfile
    }
}

export default new UpdateProfile()