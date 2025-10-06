import PropTypes from "prop-types";
import {Link} from "react-router-dom"

export const Movie = ({id,mediumCoverImage,title,summary,genres}) => {
    return (
        <div>
            <img src={mediumCoverImage} alt={title} />
            <h2>
                <Link to={`/detail/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((eachGenres) => (
                    <li key={eachGenres}>{eachGenres}</li>
                ))
                }
            </ul>
        </div>
    )
}
/** 
function Movie({mediumCoverImage,title,summary,genres}) {
    return (
        <div>
            <img src={mediumCoverImage} alt={title} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((eachGenres) => (
                    <li key={eachGenres}>{eachGenres}</li>
                ))
                }
            </ul>
        </div>
    )
}
*/

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    mediumCoverImage: PropTypes.string.isRequired,
    title : PropTypes.string,
    summary : PropTypes.string,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;