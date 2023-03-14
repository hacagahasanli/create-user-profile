import Profile from "../../models/index.js"

class AllProfiles {
    async getAll() {
        const allProfiles = await Profile.find();
        console.log(allProfiles, "ALL PROFILES");
        return allProfiles;
    }
}

export default new AllProfiles()