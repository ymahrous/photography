import Head from "next/head";
import Hero from '../components/Hero';
import MyWork from "../components/MyWork";

export default function Work() {
    return (
        <div>
            <Head>
                <title>Work</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero heading='My Work' message='This is some of my recent work traveling around the world.' />
            <MyWork />
        </div>
    );
};