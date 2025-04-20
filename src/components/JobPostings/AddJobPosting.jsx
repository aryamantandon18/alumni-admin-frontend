import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  FormControlLabel,
  Switch,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createJobPosting } from '../../apis/JobPostingsApi';

const validationSchema = Yup.object({
  jobTitle: Yup.string().required("Job Title is required"),
  jobDescription: Yup.string().required("Job Description is required"),
  companyName: Yup.string().required("Company Name is required"),
  companyLocation: Yup.string().required("Company Location is required"),
  jobMode: Yup.string().required("Job Mode is required"),
  jobType: Yup.string().required("Job Type is required"),
  jobCategory: Yup.string().required("Job Category is required"),
  expectedSalary: Yup.string().required("Expected Salary is required"),
  applyLink: Yup.string()
    .url("Enter a valid application link")
    .required("Application Link is required"),
  requiredSkills: Yup.string().required("Required Skills are required"),
  qualifications: Yup.string().required("Qualifications are required"),
  responsibilities: Yup.string().required("Responsibilities are required"),
  isActive: Yup.boolean(),
});

export default function AddJobPosting() {
  const navigate = useNavigate();
  const [addSuccess, setAddSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      jobDescription: "",
      companyName: "",
      companyLocation: "",
      jobMode: "",
      jobType: "",
      jobCategory: "",
      expectedSalary: "",
      applyLink: "",
      requiredSkills: "",
      qualifications: "",
      responsibilities: "",
      isActive: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await createJobPosting(values);
        setAddSuccess(true);
        setTimeout(() => navigate('/jobs'), 500);
      } catch (error) {
        console.error('Failed to add job posting:', error);
      }
    },
  });

  return (
    <Paper sx={{ padding: 4, maxWidth: 600, margin: "auto", mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Add Job Posting
      </Typography>
      {addSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Job Posting Added Successfully!
        </Alert>
      )}
      <form onSubmit={formik.handleSubmit}>
        <TextField fullWidth label="Job Title" name="jobTitle" {...formik.getFieldProps("jobTitle")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Job Description" name="jobDescription" multiline rows={3} {...formik.getFieldProps("jobDescription")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Company Name" name="companyName" {...formik.getFieldProps("companyName")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Company Location" name="companyLocation" {...formik.getFieldProps("companyLocation")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Job Mode" name="jobMode" {...formik.getFieldProps("jobMode")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Job Type" name="jobType" {...formik.getFieldProps("jobType")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Job Category" name="jobCategory" {...formik.getFieldProps("jobCategory")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Expected Salary" name="expectedSalary" {...formik.getFieldProps("expectedSalary")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Application Link" name="applyLink" {...formik.getFieldProps("applyLink")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Required Skills" name="requiredSkills" {...formik.getFieldProps("requiredSkills")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Qualifications" name="qualifications" {...formik.getFieldProps("qualifications")} sx={{ mb: 2 }} />
        <TextField fullWidth label="Responsibilities" name="responsibilities" multiline rows={3} {...formik.getFieldProps("responsibilities")} sx={{ mb: 2 }} />
        <FormControlLabel
          control={<Switch checked={formik.values.isActive} onChange={(e) => formik.setFieldValue("isActive", e.target.checked)} name="isActive" color="primary" />}
          label={formik.values.isActive ? "Active" : "Inactive"}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="outlined" color="secondary" onClick={() => navigate("/jobs")} sx={{ flex: 1, mr: 1 }}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" disabled={formik.isSubmitting} sx={{ flex: 1 }}>
            Add Job Posting
          </Button>
        </Box>
      </form>
    </Paper>
  );
}