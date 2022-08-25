import Head from "next/head";
import Hero from '../components/Hero';
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero heading='Contact' message='Smash the form below for more work and nature pics.' />
            <ContactForm />
        </div>
    );
};