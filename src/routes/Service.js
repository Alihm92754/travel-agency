import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-about"
                heroImg="https://plus.unsplash.com/premium_photo-1676550900179-f7ec8dacdb09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                title="Ways We Serve You"
                btnClass="hide"
            />
            <Trip />
            <Footer  />
        </>
    );

}

export default Service;