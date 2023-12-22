import "../styles/globals.css";
import "../styles/header.scss";
import "../components/Slider.scss";
import "../components/TopInfluencers/Landing.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.css"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
