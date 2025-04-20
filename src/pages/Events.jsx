import React, { useEffect, useState } from "react";
import EventsTable from "../components/Events/EventsTable";
import { drawerWidth } from "../components/Layout/Header";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllEvents } from "../apis/EventApi";

const Events = () => {
  const [eventData, setEventData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();
        setEventData(data.items || []); // Ensure data.items is an array
        setError(null); // Clear error if successful
      } catch (error) {
        if (error.message === "Network Error") {
          setError(
            "Network error: Unable to connect to the server. Please check your internet connection."
          );
        } else if (error.response && error.response.status === 404) {
          setError("No events found.");
        } else {
          setError("Failed to load events. Please try again later.");
        }
        console.error("Failed to fetch events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        paddingTop: 0,
        ml: { sm: `${drawerWidth}px` },
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        transition: "margin 0.3s ease-in-out",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Events
      </Typography>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => navigate("/addEvent")}
      >
        Add New Event
      </Button>
      <EventsTable
        data={eventData}
        onDelete={(id) =>
          setEventData(eventData.filter((event) => event.eventId !== id))
        }
      />
    </Box>
  );
};

export default Events;
