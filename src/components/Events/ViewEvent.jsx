import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  Box,
  Button,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { getEventById } from '../../apis/EventApi';

const ViewEvent = ({ events }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(id);
        setEvent(data.item);
      } catch (error) {
        console.error('Failed to fetch event:', error);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return <Typography variant="h6">Event not found</Typography>;
  }

  return (
    <Paper sx={{ padding: 4, maxWidth: 800, margin: "auto", mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        {event.eventName}
      </Typography>
      <Typography variant="h6">Description:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {event.eventDescription}
      </Typography>
      <Typography variant="h6">Event Type:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {event.eventType}
      </Typography>
      <Typography variant="h6">Location:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {event.eventLocation}
      </Typography>
      <Typography variant="h6">Date:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {event.eventDate}
      </Typography>
      <Typography variant="h6">Mode:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {event.eventMode}
      </Typography>
      <Typography variant="h6">Category:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {event.category}
      </Typography>
      <Typography variant="h6">Subcategory:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {event.subcategory}
      </Typography>
      <Typography variant="h6">Registration Link:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <a
          href={event.linkToRegister}
          target="_blank"
          rel="noopener noreferrer"
        >
          {event.linkToRegister}
        </a>
      </Typography>
      <FormControlLabel
        control={<Switch checked={event.status} disabled />}
        label={event.status ? "Active" : "Inactive"}
        sx={{ mb: 2, display: "block" }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button variant="contained" onClick={() => navigate("/events")}>
          Back to Events
        </Button>
      </Box>
    </Paper>
  );
};

export default ViewEvent;
