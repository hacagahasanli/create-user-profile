import ky from "ky";

const api = ky.create({ prefixUrl: 'http://localhost:5000/ms' });

// const secureApi = api.extend({
//     headers:{

//     }
// })

export const all_profiles = async () => await api.get(`all-profiles`).json()
export const create_profile = async (profile) => await api.post(`new-profile`, { json: profile }).json()
export const update_profile = async (profile) => await api.put(`update-profile`, { json: profile }).json()