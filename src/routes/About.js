import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-about"
                heroImg="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                title="Discover Our Story"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    );
}

export default About;