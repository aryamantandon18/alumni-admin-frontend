import React, { useState, useEffect } from "react";
import Header from "./Header";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS

const EventsGallery = () => {
  const [eventData, setEventData] = useState([]);

  // Use a static array of animal image URLs (replace with API if desired)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Static animal image URLs (free sources)
        const animalImages = [
          {
            id: 1,
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          },
          {
            id: 2,
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          },
          {
            id: 3,
            image: "", 
          },
          {
            id: 4,
            image: "", 
          },
          {
            id: 5,
            image: "", 
          },
        ];
        setEventData(animalImages);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchData();
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-play enabled
    autoplaySpeed: 3000, // Auto-play interval in ms (3 seconds)
    arrows: true, // Show navigation arrows
    centerMode: true, // Center the current slide
    centerPadding: "0", // No padding for centering
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-5">
        <h1 className="text-4xl font-bold text-center mb-6">Events Gallery</h1>
        <div className="w-full max-w-3xl h-[500px]">
          {eventData.length > 0 ? (
            <Slider {...sliderSettings}>
              {eventData.map((event) => (
                <div key={event.id} className="relative w-full h-full overflow-hidden">
                <img
                  src={event.image || "https://via.placeholder.com/800x400?text=No+Image+Available"} // Default fallback
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Found"; // Valid fallback
                  }}
                />
              </div>
              ))}
            </Slider>
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-lg">
              <p className="text-lg text-gray-600">Fetching events...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventsGallery;