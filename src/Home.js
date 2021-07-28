import React from 'react';
import PreviewCard from './PreviewCard';

const Home = () => {

    const artistsCTA = "Discover the artists";
    const auctionsCTA = "Take part in the auctions";
    const collectionsCTA = "Browse our collections";
    const aboutCTA = "Learn about us";

    return (
        <div className="home-container">
            <div className="home-summary">
                <h1>
                    Welcome to Wisp of Tone
                </h1>
                <br></br>
                <p>
                    We are the premier virtual museum and auction house where world renowned artists
                    and their followers gather to share unique digital-first experiences. Our carefully
                    curated selection of artists create collections for exclusive display here. We empower
                    artists and their followers in their experience creation and sharing endeavors.
                </p>
            </div>
            <div className="home-preview-card-container">
                <PreviewCard
                    link={"/artists"}
                    callToAction={artistsCTA}
                    content={null} />
                <PreviewCard
                    link={"/auctions"}
                    callToAction={auctionsCTA}
                    content={null} />
                <PreviewCard
                    link={"/collections"}
                    callToAction={collectionsCTA}
                    content={null} />
                <PreviewCard
                    link={"/about"}
                    callToAction={aboutCTA}
                    content={null} />
            </div>
        </div>
    );
}

export default Home;