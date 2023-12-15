import "./Path.css";
import PathData from "./PathData";

const Path = () => {
    return (
        <div className="path">

            <h1>Trending Getaways</h1>
            <p>Discover the world's most sought-after destinations, ready for your adventure.</p>

            <PathData
            className="first-description"
            heading="Christ the Redeemer, Rio de Janeiro"
            text="This Brazilian city is situated at the mouth of Guanabara Bay, famous for its white sand beaches, rainforests, and mountains, not to mention its wonder of the world: the 125-foot-tall statue of Christ the Redeemer, which has come to symbolize Rio de Janeiro."
            img1="https://viatravelers.com/wp-content/uploads/2023/01/Christ-Redeemer-Rio-de-Janeiro-Brazil.jpg.webp"
            img2="https://images.squarespace-cdn.com/content/v1/63b42d68124e4755513cecb9/c4833e41-a256-41d8-8dd9-815a683a2ed3/copacabana-beach.jpg?format=1000w"
            />

            <PathData
            className="first-description-reverse"
            heading="Niagara Falls, New York"
            text="Technically, Niagara Falls is the name of a city in Ontario, Canada, as well as New York, and comprises two different waterfalls on the Niagara River. One is in the United States, American Falls, and the other is in Canada, Horseshoe Falls. Since the waterfalls create so much mist, summer is the best time to visit. Because of the massive water sources, the air feels cooler than it might elsewhere."
            img1="https://www.sixt.com/magazine/wp-content/uploads//sites/6/2021/09/new-york_to_niagara-falls_stop_6-1024x537.jpg"
            img2="https://www.visittheusa.com/sites/default/files/styles/hero_xl_1600x700/public/images/hero_media_image/2017-03/Niagara%20Falls%20State%20Park_New%20York_20150710GH_0122_Web72DPI.jpg?h=ab0421e3&itok=skhvlAaw"
            />

        </div>
    );
};

export default Path;