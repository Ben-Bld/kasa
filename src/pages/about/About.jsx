import React from "react"
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"

import { Banner } from "../../components/banner/Banner"
import bannerImg from '../../assets/images/banner/banner_about.jpg'

import { Collapse } from "../../components/collapse/Collapse"

export default function About() {
    return (
        <div className="home">
            <Header />
            <Banner source={bannerImg} />

            <Collapse />

            <Footer />


        </div>
    )
}