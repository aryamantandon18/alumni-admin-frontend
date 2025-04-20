import React, { useEffect, useState } from "react";
import JobPostingsTable from "../components/JobPostings/JobPostingsTable";
import { drawerWidth } from "../components/Layout/Header";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllJobPostings } from "../apis/JobPostingsApi";

const JobPostings = () => {
  const navigate = useNavigate();
  const [jobPostingsData, setJobPostingsData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const data = await getAllJobPostings();
        setJobPostingsData(data.items || []); // Ensure data.items is an array
        setError(null); // Clear error if successful
      } catch (error) {
        if (error.message === "Network Error") {
          setError(
            "Network error: Unable to connect to the server. Please check your internet connection."
          );
        } else if (error.response && error.response.status === 404) {
          setError("No job postings found.");
        } else {
          setError("Failed to load job postings. Please try again later.");
        }
        console.error("Failed to fetch job postings:", error);
      }
    };
    fetchJobPostings();
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
        Job Postings
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
        onClick={() => navigate("/addJobPosting")}
      >
        Add New Job Posting
      </Button>
      <JobPostingsTable
        data={jobPostingsData}
        onDelete={(id) =>
          setJobPostingsData(jobPostingsData.filter((job) => job.jobsPostingId !== id))
        }
      />
    </Box>
  );
};

export default JobPostings;