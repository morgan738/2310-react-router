import {Link} from "react-router-dom"

const Artists = ({artists}) => {
  return(
    <div>
      <h1>Artists</h1>
      <ul>
        {
          artists.map((artist) => {
            return (
              <li key={artist.id}>
                <Link to={`/artists/${artist.id}`}>
                    {artist.name}
                </Link>
                
                </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Artists
