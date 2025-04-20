
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaSchool } from "react-icons/fa";

const AchievementsGallery = () => {
  const [achievementData, setAchievementData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const achievementTexts = [
          {
            id: 1,
            text: "Our alumni successfully launched a startup that secured ₹1 crore in seed funding within the first year.",
            source: "BPIT Innovation Cell",
          },
          {
            id: 2,
            text: "Multiple alumni were featured in Forbes 30 Under 30 for their contributions to AI and sustainability.",
            source: "Alumni Affairs Committee",
          },
          {
            id: 3,
            text: "A group of alumni developed a low-cost medical device that is now used in over 200 rural clinics.",
            source: "BPIT Alumni Foundation",
          },
          {
            id: 4,
            text: "An alumnus received the National Research Fellowship for groundbreaking work in quantum computing.",
            source: "Department of Computer Science",
          },
          {
            id: 5,
            text: "Alumni-led CSR drive provided scholarships to over 50 underprivileged students last year.",
            source: "BPIT Giving Back Initiative",
          },
        ];
        setAchievementData(achievementTexts);
      } catch (error) {
        console.error("Error fetching achievement data:", error);
      }
    };
    fetchData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center pt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Alumni Achievements</h2>
        <div className="w-full max-w-4xl px-4">
          <Slider {...sliderSettings}>
            {achievementData.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center px-4">
                <FaQuoteLeft className="text-4xl text-blue-500 mb-4" />
                <p className="text-lg italic text-gray-700 max-w-2xl mb-4">{item.text}</p>
                <div className="flex items-center gap-2 text-cyan-500 font-semibold">
                  <FaSchool className="text-base" />
                  <span>{item.source}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AchievementsGallery;
