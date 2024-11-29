// Page About : affiche la bannière et les sections collapsibles
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Banner } from "../../components/banner/Banner";
import { Collapse } from "../../components/collapse/Collapse";
import bannerImg from "../../assets/images/banner/banner_about.jpg";
import CollapseInfo from "../../datas/collapse.json";

export default function About() {
    return (
        <>
            <div className="about">
                {/* En-tête de la page */}
                <Header />

                {/* Bannière de la page */}
                <div className="about__banner">
                    <Banner source={bannerImg} />
                </div>

                {/* Sections collapsibles */}
                {CollapseInfo.map((item) => ( //on récupére les infos du collapse en question dans collapseInfo 
                    <Collapse key={item.title} title={item.title} text={item.text} />
                ))}
            </div>

            {/* Pied de page */}
            <Footer />
        </>
    );
}
