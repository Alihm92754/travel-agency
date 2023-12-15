import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-about"
                heroImg="https://images.unsplash.com/photo-1519046798162-b7144ecf8f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                title="Contact for Journey Start"
                btnClass="hide"
            />
            <ContactForm />
            <Footer  />
        </>
    );

}

export default Contact;