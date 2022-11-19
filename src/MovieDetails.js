import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { NotFoundPage } from "./NotFoundPage";
import { useEffect, useState } from "react";
import { API } from "./global"


export function MovieDetails() {
  const { id } = useParams(); // extract id from URL
  // const movie = movieList[id];
  // console.log(movieList);

    const [movie, setMovie] = useState({})

    useEffect(() => {
      fetch(`${API}/movies/${id}`, {
        method: "GET",
      })
      .then((data) => data.json())
      .then((mv) => setMovie(mv))
    }, [])

  const navigate = useNavigate();


  //GET/movies/:id - to get name
    if(!movie){
      return <NotFoundPage />
    }
  return (
    <div >
      <iframe width="100%" height="550" src={movie.trailer} title="Frozen 2 | Official Trailer 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-detail-container">    
      <div className="movie-spec">
        <h2 className="movie-name">{movie.name}</h2>   
        <p className="movie-rating">⭐ {movie.rating}</p>
      </div>     
      <p className="movie-summary">{movie.summary}</p>  
      {/* <button onClick={() => navigate(-1)}>BACK</button> */}
      <Button 
      onClick={() => navigate(-1)}
      variant="outlined" 
      startIcon={<ArrowBackIosNewIcon />}>  
        BACK
     </Button>
    </div>

    </div>
  );
}