import ZoomFadeSlideshow from "./components/ZoomFadeSlideshow";
import Navbar from "./components/nav.bar";
import Scroll from "./components/scrollanimation";
import Gateway from "./components/Gateway";
import VideoSection from "./components/videosection";
import Japantrails from "./components/japantrails";
import Destination from "./components/Destination";
import Latestarticle from "./components/latestarticle";
import Experience from "./components/experience";
import Feedback from "./components/feedback";
import Footer from "./components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <head>
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Hi+Melody&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Protest+Riot&display=swap" rel="stylesheet" />
            </>
          </head>
          <Navbar />
          <ZoomFadeSlideshow />
          <Scroll />
          <Gateway />
          <VideoSection />
          <Japantrails />
          <Destination />
          <Latestarticle />
          <Experience />
          <Feedback />
          <Footer />
        </main>

        );
}
