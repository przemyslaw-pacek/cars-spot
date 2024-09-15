import { useEffect, useState } from "react";
import { deliveryVans, passengerCars } from "./cars";

export const Gallery = ({ activeTab }) => {
    const [currentCar, setCurrentCar] = useState(0);
    const [imageWidth, setImageWidth] = useState(600);
    const [gapWidth, setGapWidth] = useState(64);

    const cars = activeTab === "osobowe" ? passengerCars : deliveryVans;

    const updateImageSize = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 664) {
            setImageWidth(screenWidth * 0.8);
            setGapWidth(screenWidth * 0.1);
        } else {
            setImageWidth(600);
            setGapWidth(64);
        }
    };

    useEffect(() => {
        setCurrentCar(0);

        updateImageSize();

        window.addEventListener("resize", updateImageSize);

        return () => window.removeEventListener("resize", updateImageSize);
    }, [activeTab]);

    const goToCar = (carIndex) => {
        setCurrentCar(carIndex);
    };

    return (
        <section
            className="
                ml-[22px]
                sm:ml-[44px]
                xl:ml-[88px]
                mt-[20px]
                sm:mt-[40px]
                xl:mt-[80px]
                overflow-x-hidden"
        >
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentCar * (imageWidth + gapWidth)}px)`,
                    gap: `${gapWidth}px`,
                }}
            >
                {cars.map((car, index) => (
                    <img
                        key={index}
                        src={car}
                        alt={`car-${index + 1}`}
                        style={{ width: `${imageWidth}px` }}
                    />
                ))}
            </div>
            <nav
                className="
                    mt-6
                    sm:mt-10
                    xl:mt-12
                    mb-10
                    sm:mb-16
                    xl:mb-20
                    py-2
                    flex
                    justify-center
                    gap-2
                    sm:gap-2.5"
            >
                {cars.map((_, index) => (
                    <button
                        key={index}
                        className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full 
                            ${currentCar === index
                                ? "bg-[#0147FF]"
                                : "bg-[#EDEDED]"
                            }`}
                        onClick={() => goToCar(index)}
                    ></button>
                ))}
            </nav>
        </section>
    );
};