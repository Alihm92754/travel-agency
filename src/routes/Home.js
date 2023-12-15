import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Path from "../components/Path";
import Trip from "../components/Trip";


function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1602050855707-b595b17670dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                title="Discover Your Dream Destinations"
                text="Your Passport to Endless Adventures."
                buttonText="Book Your Dream Trip"
                url="/"
                btnClass="show"
            />
            <Path />
            <Trip />
            <Footer  />
        </>
    );
}

export default Home;