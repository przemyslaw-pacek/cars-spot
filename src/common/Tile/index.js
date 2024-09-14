import { useState } from "react";
import arrow from "./arrow.svg";

const truncateText = (text, maxLength) => {
    const lastSpaceIndex = text.lastIndexOf(' ', maxLength);
    return text.length <= maxLength ? text : text.slice(0, lastSpaceIndex + 1) + "[...]";
};

export const Tile = ({ title, text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <h2
                className="
                    text-[18px]
                    sm:text-[21px]
                    xl:text-[25px]
                    tracking-[-0.03em]
                    leading-[24px]
                    sm:leading-[30px]
                    xl:leading-[38px]"
            >
                {title}
            </h2>
            <div className="font-robotoCond text-[12px] sm:text-[14px] mt-2 sm:mt-4">
                <p>
                    {isExpanded ? text : truncateText(text, 220)}
                </p>
                <button
                    onClick={toggleText}
                    className="mt-3 sm:mt-4 xl:mt-6 border-b-[1.5px] flex items-center gap-1.5 pb-1.5"
                >
                    {isExpanded ? "Zwiń" : "Rozwiń"}
                    <img
                        src={arrow}
                        alt="arrow"
                        className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`
                        }
                    />
                </button>
            </div>
        </div>
    );
};