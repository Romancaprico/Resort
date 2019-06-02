import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from '../components/FeaturedRooms';



export default function Home()
{
        return(
        <React.Fragment>    
        <Hero>
        <Banner title="Hotel Vintage Yard" subtitle="Since 2017">
        <Link to="/rooms" className="btn-primary">Our Rooms</Link>
        </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </React.Fragment>
    );
}
