import ky from "ky";

export const all_profiles = () => ky.get('http://localhost:5000/ms/all-profiles').json()