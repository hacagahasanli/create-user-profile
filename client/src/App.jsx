import { useState } from "react"
import { useEffect } from "react"

const App = () => {
  const [profiles, setProfiles] = useState()

  useEffect(() => {
    const getAllProfiles = async () => {
      const res = await fetch('http://localhost:5000/ms/all-profiles');
      const data = await res.json();
      setProfiles(data)
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
