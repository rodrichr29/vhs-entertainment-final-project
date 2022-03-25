import React from "react";
import { Link } from 'react-router-dom';

const Catalog = () => {
    return (
        <>
            <div className='catalog-title'>
                <h1><strong>Catalog</strong></h1>
            </div>
            <div className='movies'>
                <h4 className='title-1 title-home-1'>Action</h4>
                <ul>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                </ul>
            </div>  
            <div className='movies'>
                <h4 className='title-1 title-home-1'>Comedy</h4>
                <ul>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                </ul>
            </div>
            <div className='movies'>
                <h4 className='title-1 title-home-1'>Drama</h4>
                <ul>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                </ul>
            </div>
            <div className='movies'>
                <h4 className='title-1 title-home-1'>Horror</h4>
                <ul>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                    <Link to="/movie"><img src='https://via.placeholder.com/150x200' className='movie-img' alt='place-holder.jpg' href='/'></img></Link>
                </ul>
            </div>
            <div className='movies'>
                <h4 className='title-1 title-home-1'>Romance</h4>
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

export default Catalog;