import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobPostingById } from "../../apis/JobPostingsApi";
import { Paper, Typography, Box, Button } from "@mui/material";

const ViewJobPosting = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobPosting, setJobPosting] = useState(null);

  useEffect(() => {
    const fetchJobPosting = async () => {
      try {
        const response = await getJobPostingById(id);
        setJobPosting(response.item);
      } catch (error) {
        console.error("Failed to fetch job posting:", error);
      }
    };
    fetchJobPosting();
  }, [id]);

  if (!jobPosting) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Paper sx={{ padding: 4, maxWidth: 800, margin: "auto", mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        {jobPosting.jobTitle}
      </Typography>
      <Typography variant="h6">Company:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {jobPosting.companyName} ({jobPosting.companyLocation})
      </Typography>
      <Typography variant="h6">Description:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {jobPosting.jobDescription}
      </Typography>
      <Typography variant="h6">Mode:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {jobPosting.jobMode}
      </Typography>
      <Typography variant="h6">Type:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {jobPosting.jobType}
      </Typography>
      <Typography variant="h6">Category:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {jobPosting.jobCategory}
      </Typography>
      <Typography variant="h6">Expected Salary:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {jobPosting.expectedSalary}
      </Typography>
      <Typography variant="h6">Required Skills:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {jobPosting.requiredSkills}
      </Typography>
      <Typography variant="h6">Qualifications:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {jobPosting.qualifications}
      </Typography>
      <Typography variant="h6">Responsibilities:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {jobPosting.responsibilities}
      </Typography>
      <Typography variant="h6">Apply Link:</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <a
          href={jobPosting.applyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {jobPosting.applyLink}
        </a>
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button variant="contained" onClick={() => navigate("/jobs")}>
          Back to Job Postings
        </Button>
      </Box>
    </Paper>
  );
};

export default ViewJobPosting;