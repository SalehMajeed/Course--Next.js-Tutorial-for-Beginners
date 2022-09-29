import Head from "next/head";
// import style from "../styles/About.module.css";
import Footer from "../components/Footer";
import style from "../styles/About.module.scss";
function About() {
  return (
    // <button className={(style.highlight, "btn btn-primary")}>button</button>
    // <div className={style.highlightscss}>About</div>
    <>
      <Head>
        <title>About </title>
        <meta name="description" content="learn" />
      </Head>
      <div style={{ color: "purple" }}>About</div>
    </>
  );
}

export default About;

About.getLayout = function pageLayout(page) {
  console.log(page);
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
