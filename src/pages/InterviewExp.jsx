import React, { useEffect, useState } from "react";
import InterviewExperiencesTable from "../components/InterviewExperience/InterviewExperienceTable";
import { drawerWidth } from "../components/Layout/Header";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllInterviewExperiences } from '../apis/InterviewExperienceApi';

const InterviewExp = () => {
  const navigate = useNavigate();
  const [interviewData, setInterviewData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getAllInterviewExperiences();
        setInterviewData(data.items);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch interview experiences:', error);
        setError('Failed to load interview experiences. Please try again later.');
      }
    };
    fetchExperiences();
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
        Interview Experiences
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => navigate("/addInterviewExperience")}
      >
        Add New Experience
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      <InterviewExperiencesTable
        data={interviewData}
        onDelete={(id) => setInterviewData(interviewData.filter((exp) => exp.interviewExperienceId !== id))}
      />
    </Box>
  );
};

export default InterviewExp;
