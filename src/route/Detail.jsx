import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"

export const Detail = () => {
    const params = useParams();
    const [movieInfo, setMovieInfo] = useState([]);

    const getMoviesDetail = async() => {
        console.log(params.id)
        const response = await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`
        )
        const json = await response.json();
        console.log(json)
        setMovieInfo(json.data.movie);

    }

    useEffect(() => {
        getMoviesDetail();
    }, []);

    return (
        <div>
            <img src={movieInfo?.medium_cover_image} alt={movieInfo?.title} />
            <h2>
                {movieInfo?.title}
            </h2>
            <p>{movieInfo?.summary}</p>
            <ul>
                {movieInfo?.genres?.map((eachGenres) => (
                    <li key={eachGenres}>{eachGenres}</li>
                ))
                }
            </ul>
            <Link to="/"><button>go Home</button></Link>
        </div>
    )
}

export default Detail