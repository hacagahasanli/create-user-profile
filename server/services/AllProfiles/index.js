import Profile from "../../models/index.js"

class AllProfiles {
    async getAll() {
        const allProfiles = await Profile.find();
        return allProfiles;
    }
}

export default new AllProfiles()