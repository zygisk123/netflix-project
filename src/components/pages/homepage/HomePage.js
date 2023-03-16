import { Fragment } from "react";
import Banner from "../../banner/Banner";
import Navbar from "../../navbar/Navbar";
import Row from '../../row/Row';
import requests from "../../../Requests";


function HomePage(params) {
    const rowProps = [
        {
            rowName: 'Netflix Original',
            request: requests.fetchNetflixOriginals,
            isLargeRow: true,
        },
        {
            rowName: 'Trending',
            request: requests.fetchTrending,
            isLargeRow: false,
        },
        {
            rowName: 'Top Rated',
            request: requests.fetchTopRated,
            isLargeRow: false,
        },
        {
            rowName: 'Action Movies',
            request: requests.fetchActionMovies,
            isLargeRow: false,
        },
        {
            rowName: 'Comedy Movies',
            request: requests.fetchComedyMovies,
            isLargeRow: false,
        },
        {
            rowName: 'Horror Movies',
            request: requests.fetchHorrorMovies,
            isLargeRow: false,
        },
        {
            rowName: 'Romance Movies',
            request: requests.fetchRomanceMovies,
            isLargeRow: false,
        },
        {
            rowName: 'Document Movies',
            request: requests.fetchDocumentMovies,
            isLargeRow: false,
        }
    ];
    return (
        <Fragment>
            <Navbar />
            <Banner />
            {rowProps.map((row) => 
                (<Row key={row.rowName} category={row.rowName} fetchURL={row.request} isLargeRow={row.isLargeRow}/>))}
        </Fragment>
    );
}

export default HomePage;