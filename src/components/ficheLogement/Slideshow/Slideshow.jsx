
import left from '../../../assets/images/icons/left.svg'
import right from '../../../assets/images/icons/right.svg'
import { useState } from "react";


export function Slideshow(props) {

    let slider = props.slide


    const [slideValue, changeSlide] = useState(0)
    let length = props.slide.length - 1
    function nextSlide() {
        if (slideValue < length) {
            changeSlide(slideValue + 1)
        }
        else {

            changeSlide(slideValue - (slideValue))
        }


    }
    function prevSlide() {
        if (slideValue > 0) {
            changeSlide(slideValue - 1);
        } else {
            changeSlide(length);
        }
    }

    function hideNext() {
        if (length == 0) {
            return "hide"
        }
    }


    return (
        <div className="container-slideshow">
            <div className="container-slideshow__leftArrow">
                <img onClick={prevSlide} src={left} className={`container__slideshow__lefttArrow__file ` + hideNext()}></img>



            </div>
            <div className="container-slideshow__rightArrow">
                <img onClick={nextSlide} src={right} className={`container__slideshow__rightArrow__file ` + hideNext()}></img>
            </div>

            <div className="container-slideshow__pageNumber ">
                <p className={hideNext()}>{slideValue + 1}/{slider.length}</p>
            </div>

            <img className="container-slideshow__img" src={slider[slideValue]} alt="" />
        </div>
    )
}