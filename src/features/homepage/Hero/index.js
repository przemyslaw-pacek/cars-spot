import { ButtonLink } from "../../../common/ButtonLink";
import cars from "./cars.png";

export const Hero = () => (
    <header
        className="
            relative
            m-[30px]
            sm:m-[60px]
            xl:m-[120px]
            mb-[40px]
            sm:mb-[80px]
            xl:mb-[173px]
            h-[380px]
            sm:h-[400px]
            lg:h-[580px]
            xl:h-[612px]"
    >
        <div>
            <h1
                className="
                    text-[30px]
                    sm:text-[44px]
                    xl:text-[76px]
                    tracking-[-0.04em]
                    leading-[38px]
                    sm:leading-[42px]
                    xl:leading-[84px]"
            >
                Sprzedajemy samochody <br />z europy
            </h1>
            <p
                className="
                    font-robotoCond
                    text-[16px]
                    leading-[24px]
                    mt-[16px]
                    sm:mt-[24px]
                    xl:mt-[32px]"
            >
                Kup komfortowy pojazd, aby każda podróż <br />
                była wyjątkowym przeżyciem.
            </p>
            <div
                className="
                    font-robotoFlex
                    mt-[24px]
                    sm:mt-[36px]
                    xl:mt-[48px]
                    flex
                    gap-3
                    sm:gap-4
                    xl:gap-6"
            >
                <ButtonLink
                    link="#gallery"
                    text="Zobacz zdjęcia"
                />
                <ButtonLink
                    bgColor="#F7F7F7"
                    textColor="#0147FF"
                />
            </div>
            <img
                src={cars}
                alt="cars"
                className="
                    absolute
                    top-[246px]
                    sm:top-[208px]
                    right-[-30px]
                    sm:right-[-60px]
                    xl:right-[-120px]
                    pointer-events-none"
            />
        </div>
    </header>
);