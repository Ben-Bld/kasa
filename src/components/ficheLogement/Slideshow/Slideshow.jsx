
import left from '../../../assets/images/icons/left.svg'
import right from '../../../assets/images/icons/right.svg'
import { useState } from "react";


export function Slideshow(props) {

    let slider = props.slide
    console.log("slide lenght = " + props.slide.length)


    console.log(props.slide.length)

    const [slideValue, changeSlide] = useState(0)
    function nextSlide() {

        for (let i = 0; i <= props.slide.length; i++) {
            changeSlide(slideValue + 1)

            console.log(slideValue)
        }

        // if (slideValue <= slide.length) {
        //     changeSlide(slideValue + 1)
        //     console.log(slideValue)
        // }
        // else (
        //     changeSlide(slideValue - 1)
        // )


    }
    function previousSlide() {
        // if (slideValue >= props.slide.length) {
        //     changeSlide(slideValue + 1)
        // }
        // else (
        //     changeSlide(slideValue - 1)
        // )


        for (let i = props.slide.length; i >= 0; i--) {
            changeSlide(slideValue - 1)

            console.log(slideValue)
        }


    }



    return (
        <div className="container-slideshow">
            <div className="container-slideshow__leftArrow">
                <img onClick={previousSlide} src={left} className="container__slideshow__leftArrow__file"></img>



            </div>
            <div className="container-slideshow__rightArrow">
                <img onClick={nextSlide} src={right} className="container__slideshow__rightArrow__file"></img>
            </div>

            <div className="container-slideshow__pageNumber">
                <p>1/4</p>
            </div>

            <img className="container-slideshow__img" src={slider[slideValue]} alt="" />
        </div>
    )
}