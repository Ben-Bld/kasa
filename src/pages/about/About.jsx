// import React from "react"
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"

import { Banner } from "../../components/banner/Banner"
import bannerImg from '../../assets/images/banner/banner_about.jpg'

import { Collapse } from "../../components/collapse/Collapse"
import CollapseInfo from "../../datas/collapse.json";

export default function About({ title, text }) {
    return (
        <div className="home">
            <Header />
            <Banner source={bannerImg} />

            {CollapseInfo.map((item) => {
                return (
                    <div key={item.title}>
                        <Collapse title={item.title} text={item.text} />
                    </div>
                );
            })}

            <Footer />


        </div>
    )
}