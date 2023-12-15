import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../img/roma.jpg";
import Trip2 from "../img/greece.jpg";
import Trip3 from "../img/rio.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Our Recent Trips</h1>
            <p>Explore our latest journeys, inspiring your next unforgettable adventure.</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip In Italy"
                    text="Italy: A European gem with over 2,000 years of history, 51 UNESCO World Heritage Sites, and a coastline stretching 4,700 miles along the Mediterranean. As a top global tourist destination, Italy welcomes millions of visitors annually, offering diverse experiences from the snowy peaks of the Alps to the sun-soaked beaches of the Amalfi Coast. Indulge in Italy's culinary excellence, home to 20 regions and countless pasta varieties, as you immerse yourself in a culture rich in art, architecture, and natural beauty."
                />

                <TripData
                    image={Trip2}
                    heading="Trip In Greece"
                    text="Greece: A timeless Mediterranean paradise with a history spanning 3,000 years, 18 UNESCO World Heritage Sites, and a coastline extending over 8,000 miles across the Aegean and Ionian Seas. As a premier global travel destination, Greece welcomes millions of visitors annually, offering a diverse range of experiences from the ancient ruins of Athens to the idyllic islands of Santorini and Mykonos. Savor Greece's legendary cuisine, from succulent souvlaki to delectable baklava, and immerse yourself in a culture rich in mythology, architecture, and breathtaking natural landscapes."
                />

                <TripData
                    image={Trip3}
                    heading="Trip In Brazil"
                    text="Brazil: A captivating South American wonder, boasting a diverse culture, 22 UNESCO World Heritage Sites, and an astonishing 4,655 miles of coastline along the Atlantic Ocean. As one of the world's top travel destinations, Brazil entices millions of visitors annually with its remarkable landmarks, from the iconic Christ the Redeemer statue to the vast Amazon rainforest. Savor the flavors of Brazilian cuisine, from feijoada to acai bowls, and immerse yourself in a vibrant culture steeped in music, dance, and breathtaking natural beauty."
                />
            </div>
        </div>
    );
}
export default Trip; 