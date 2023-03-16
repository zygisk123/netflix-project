import axios from '../../axios';
import { useEffect, useState } from 'react';
import classes from './Banner.module.css';
import requests from '../../Requests';

function Banner(props) {

    const [movie, setMovie] = useState();
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);

    console.log(movie);
    function truncate(string, maxLength) {
        return string?.length > maxLength ? string.substr(0, maxLength - 1) + '...': string;
        
    }
    return (
        <header className={classes.banner} style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
        
            <div className={classes.banner_content}>
                <h1 className={classes.banner_title}>{movie?.name || movie?.title || movie?.original_name}</h1>
                <button className={classes.banner_button}>Play</button>
                <button className={classes.banner_button}>My List</button>
                <h1 className={classes.banner_description}>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className={classes['banner--fadeBottom']} />
        </header>
    );
}

export default Banner;