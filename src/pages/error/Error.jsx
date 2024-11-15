import React from "react"

import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { ErrorMain } from "../../components/errorMain/ErrorMain"

export default function Error() {
    return (
        <div className="home">
            <Header />
            <ErrorMain />
            <Footer />


        </div>
    )
}