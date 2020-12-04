import React, { Component } from 'react';
import Hero from "../components/HeroPage"
import TextCard from "../components/TextCard"
import ramen from '../img/ramen-1.jpg'
import './home.css'

function Home () {
    return(
        <div>
            <Hero />
            <TextCard heading='You are a Mountain'>
                Rip and Tear is what your assholes will do<br/>
                after you get your hands on our bowls of<br/>
                food
            </TextCard>
        </div>
    );
}

export default Home;