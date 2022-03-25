import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <>
        <div className='movie-pick'>
            <div className='movie-pick-left'>
                <h5><strong>The Month's Pick</strong></h5>
                <h4><strong>MOVIE TITLE</strong></h4>
                <p>ratings</p>
                <p>starring</p>
                <p>catagories</p>
                <p>description</p>
            </div>
            <div>
                <img src='https://via.placeholder.com/250x200' className='home-pick-img' alt='place-holder.jpg'></img><br></br>
                <button type='button' className='link link-pick'><Link to="/movie">Play Now</Link></button>
            </div>
        </div>
        <div className='movies'>
            <h4 className='title-1 title-home-1'>Movies</h4>
            <ul>
                <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
            </ul>
        </div>
        <div className='movies'>
            <h4 className='title-1 title-home-1'>Shows</h4>
            <ul>
                <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
            </ul>
        </div>
    </>
    ) 
}

export default Home;