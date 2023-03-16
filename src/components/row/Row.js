import { Fragment, useEffect, useState } from "react";
import classes from './Row.module.css'
import RowItem from "./RowItem";
import axios from "../../axios";

function Row(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [props.fetchURL]);

    console.log(movies);
    return (
        <Fragment>
            <h2 className={classes.category}>{props.category}</h2>
            <div className={classes.row_posters}>
                {movies.map(movie => 
                (
                    ((props.isLargeRow && movie.poster_path) || (!props.isLargeRow && movie.backdrop_path)) &&                
                        <RowItem 
                            key={movie?.name || movie?.title || movie?.original_name} 
                            name= {movie?.name || movie?.title || movie?.original_name}
                            imgURL={props.isLargeRow ? movie?.poster_path : movie?.backdrop_path}
                            isLargeRow = {props.isLargeRow}
                        />
                    )
                )}
            </div>
        </Fragment>
    );
}

export default Row;