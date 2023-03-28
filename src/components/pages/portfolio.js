import React from 'react';
import lazyDater from '../images/screenshot-lazy-dater.png';
import cartoonify from '../images/profilepage.png'

export default function Portfolio() {
    return (
        <div>
            <h1>My Recent Projects</h1>
            <div className='projects row'>
                <div class="card col-3 m-3">
                    <img src={cartoonify} class="card-img-top" alt="cartoonify" />
                    <div class="card-body">
                        <h5 class="card-title"><a href="https://github.com/annaperlack/cartoonify-my-pic">Cartoonify My Pic</a></h5>
                        <p class="card-text">This is Cartoonify My Pic! This application allows you to upload your images and "cartoonify" them.</p>
                        <a href="https://cartoonify-my-pic.herokuapp.com/login" class="btn btn-primary">Click Here!</a>
                    </div>
                    
                </div>
                <div class="card col-3 m-3">
                    <img src={lazyDater} class="card-img-top" alt="lazy-dater" />
                    <div class="card-body">
                        <h5 class="card-title"><a href="https://github.com/FDJoss/The-Lazy-Dater">The Lazy Dater</a></h5>
                        <p class="card-text">This website is built with HTML, CSS, and Javascript. It uses two API's to pull a random coctail and movie for your fun evening!</p>
                        <a href="https://fdjoss.github.io/The-Lazy-Dater/" class="btn btn-primary">Click Here!</a>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}