/*test*/
import { useState, useEffect } from "react";
import Movie from "../component/Movie";


//  https://yts.mx/api
/// https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year

export const Home = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );

    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false)
  }

  useEffect(() => {
    getMovies();
  },[])

  console.log(movies)

  return (
    <>
      <div>
        {loading ? ( 
        <h1>loading...</h1>
        ) : (
        <div >
          {movies.map((eachMovies) => (
            <Movie 
              key={eachMovies.id}
              id={eachMovies.id}
              mediumCoverImage={eachMovies.medium_cover_image}
              title={eachMovies.title}
              summary={eachMovies.summary}
              genres={eachMovies.genres}
            />
          ))}
        </div>
        )}
      </div>
    </>
  );
}

export default Home;
