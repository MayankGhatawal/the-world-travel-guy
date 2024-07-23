import React from "react";
import './HomePage.css';
import USA from '../Images/USA.webp'
import NBC from '../Images/NBC.webp'
import TIME from '../Images/Time.webp'
import BBC from '../Images/BBC.webp'
import TL from '../Images/TL.webp'
import Travel from '../Images/Travel.jpg'
import Des from '../Images/Destination.jpg'
import about from '../Images/about.jpg'
import Image1 from '../Images/Image1.jpg'


function HomePage(){
    return(
        <>
            <div class="featured">Featured</div>
            <div className="news-name">
                <img src={USA} alt="company-1"/>
                <img src={NBC} alt="company-2"/>
                <img src={TIME} alt="company-3"/>
                <img src={BBC} alt="company-4"/>
                <img src={TL} alt="company-5"/>
            </div>
            <div className="Links">
                <img src={Travel} alt="Links"/>
                <img src={Des} alt="Links"/>
                <img src={about} alt="Links"/>
            </div>
            <div className="Links-format">
                <p>TRAVEL BLOGS</p>
                <p>DESTINATIONS</p>
                <p>ABOUT</p>
            </div>
            <div className="Featured-context">
                <img src={Image1} alt="context" />
                <div className="Featured-font">
                <p className="title">Thanks For Looking!</p>
                <p className="title1">I'm <b>David Leiter</b>, the guy behind this website. I'm an American who's been traveling the world full time for 8 years now. <br/><br/>

I started this travel blog in 2019 to document my own international trips, share my photos, and help others learn how to travel the world and find some really good spots off the beaten path.<br/><br/>

I'm currently based in Bali, Indonesia, where I met my wife Intan, who’s a Bali local. Now she joins me on these wild and crazy adventures too.<br/><br/>

Together, we've done some bucket list hikes, climbed active volcanoes, seen exotic wildlife, and visited some spectacular castles, temples, and monuments around the world.<br/><br/>

I've worked with and been featured by BBC Travel, NBC News, Time, and other companies.<br/><br/>

I haven’t been everywhere, but it’s on my list. I hope this world travel blog can help and inspire you in your own journeys as well!</p>
<button className="Read-button">Read More &rarr;</button>
            </div>
            </div>
        </>
    );
}

export default HomePage