import React, { useState, useEffect } from "react";
import Header from "./Header";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const NewsCard = styled(Card)(({ theme }) => ({
  display: "flex",
  borderRadius: 12,
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  overflow: "hidden",
  "&:hover": {
    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
  },
  height: "50%", 
}));

const NewsAndEventsContainer = styled("div")(({ theme }) => ({
  padding: "20px",
 
  backgroundColor: "#f9f9f9",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
}));

const NewsAndEvents = () => {
  // Simulate API data with useState (replace with actual API call)
  const [newsData, setNewsData] = useState([
    {
      id: 1,
      title: "Alumni Award Winners Announced",
      date: "14th Jul, 2023",
      description: "Our distinguished alumni have been recognized for their outstanding contributions in various fields.",
    },
    {
      id: 2,
      title: "New Alumni Mentorship Program Launch",
      date: "14th Jul, 2023",
      description: "We are excited to announce the launch of our new mentorship program, connecting students with experienced alumni.",
    },
    {
      id: 3,
      title: "Annual Alumni Meet",
      date: "20th Aug, 2023",
      description: "Join us for the annual alumni meet to reconnect and network with fellow graduates.",
    },
  ]);

  // Simulate API fetch (replace with your actual API call)
  useEffect(() => {
    // Example API call (replace with your fetch logic)
    const fetchData = async () => {
      // const response = await fetch('your-api-endpoint');
      // const data = await response.json();
      // setNewsData(data.slice(0, 3)); // Limit to 3 items
      setNewsData((prevData) => prevData.slice(0, 3)); // For now, slice dummy data to 3 items
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <NewsAndEventsContainer>
        <Typography variant="h4" align="center" gutterBottom>
          News and Events
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "50%", maxWidth: "1400px" }} // Kept width unchanged
        >
          {newsData.map((news) => (
            <Grid item xs={12} md={4} key={news.id}> {/* Changed md={6} to md={4} for 3 columns */}
              <NewsCard>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    color="error"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    {news.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" paragraph>
                    Posted on {news.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.description}
                  </Typography>
                </CardContent>
              </NewsCard>
            </Grid>
          ))}
        </Grid>
      </NewsAndEventsContainer>
    </>
  );
};

export default NewsAndEvents;

