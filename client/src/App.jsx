import { useState, useEffect } from "react"
import ky from "ky"

const App = () => {
  const [profiles, setProfiles] = useState()

  useEffect(() => {
    const getAllProfiles = async () => {
      const profiles = await ky.get('http://localhost:5000/ms/all-profiles').json();
      setProfiles(profiles)
    }
    getAllProfiles()
  }, [])

  return (
    <div className="App">
      {
        profiles?.map(({ _id, author, title, content }) => (
          <ul key={_id}>
            <li>{author}</li>
            <li>{title}</li>
            <li>{content}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default App
