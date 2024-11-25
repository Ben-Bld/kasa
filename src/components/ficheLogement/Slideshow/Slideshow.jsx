import left from '../../../assets/images/icons/left.svg';
import right from '../../../assets/images/icons/right.svg';
import { useState } from "react";

export function Slideshow(props) {
    let slider = props.slide;

    const [slideValue, changeSlide] = useState(0);
    const [fade, setFade] = useState(false); // New state for fade animation
    let length = props.slide.length - 1;

    function nextSlide() {
        setFade(true); // Trigger fade-out animation
        setTimeout(() => {
            setFade(false); // Reset fade state
            if (slideValue < length) {
                changeSlide(slideValue + 1);
            } else {
                changeSlide(0);
            }
        }, 500); // Match the animation duration
    }

    function prevSlide() {
        setFade(true); // Trigger fade-out animation
        setTimeout(() => {
            setFade(false); // Reset fade state
            if (slideValue > 0) {
                changeSlide(slideValue - 1);
            } else {
                changeSlide(length);
            }
        }, 500); // Match the animation duration
    }

    function hideNext() {
        if (length === 0) {
            return "hide";
        }
    }

    return (
        <div className="container-slideshow">
            <div className="container-slideshow__leftArrow">
                <img onClick={prevSlide} src={left} className={`container__slideshow__leftArrow__file ` + hideNext()} />
            </div>
            <div className="container-slideshow__rightArrow">
                <img onClick={nextSlide} src={right} className={`container__slideshow__rightArrow__file ` + hideNext()} />
            </div>
            <div className="container-slideshow__pageNumber ">
                <p className={hideNext()}>{slideValue + 1}/{slider.length}</p>
            </div>

            <img
                className={`container-slideshow__img ${fade ? "fade-out" : "fade-in"}`}
                src={slider[slideValue]}
                alt=""
            />
        </div>
    );
}
