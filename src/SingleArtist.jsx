import { useParams, Link } from "react-router-dom"

const SingleArtist = ({artists}) => {
    
    const params = useParams()
    console.log(params)
    const id = params.id*1

    const artist = artists.find((artist) => {
        return artist.id === id
    })
    
    if(!artist){
        return null
    }

    return(
        <div>
            <h1>{artist.name}</h1>
            <Link to='/artists'>
                Back to all Artists
            </Link>
        </div>
    )
}

export default SingleArtist