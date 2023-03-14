import { Fragment } from "react";
import Banner from "../../banner/Banner";
import Navbar from "../../navbar/Navbar";

function HomePage(params) {
    return (
        <Fragment>
            <Navbar />
            <Banner />
        </Fragment>
    );
}

export default HomePage;