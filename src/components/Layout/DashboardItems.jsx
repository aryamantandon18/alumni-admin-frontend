import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, keyframes } from '@mui/material/styles'; 
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';

// --- Define Keyframes for Entry Animation ---
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// --- Enhanced Styled Paper with Animation ---
const DashboardPaper = styled(Paper)(({ theme, animationDelay = '0s' }) => ({ // Added animationDelay prop
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius * 2.5, // Slightly more rounded
    minHeight: '180px',
    boxShadow: theme.shadows[4], 
    color: '#ffffff',
    position: 'relative', 
    overflow: 'hidden', 
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

    // --- Apply the Entry Animation ---
    opacity: 0, 
    animation: `${fadeInUp} 0.5s ease-out forwards`,
    animationDelay: animationDelay, 

    '&:hover': {
        transform: 'scale(1.05) translateY(-5px)', 
        boxShadow: theme.shadows[8], 
    },
}));

function DashboardItems() {
    const eventsCount = 15;
    const mentorshipCount = 8;

    return (
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">

            {/* Dashboard Item 1: Events Occurred */}
            <Grid item xs={12} sm={6} md={4}>
                <DashboardPaper
                    // --- Vibrant Gradient 1 ---
                    sx={{
                        background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', 
                    }}
                    animationDelay="0.1s" 
                >
                    <Box display="flex" alignItems="center" mb={1}>
                        <EventIcon sx={{ fontSize: 45, mr: 1.5, color: 'rgba(255, 255, 255, 0.8)' }} />
                        <Typography variant="h5" component="h2" fontWeight="medium">
                            Events Occurred
                        </Typography>
                    </Box>
                    <Typography variant="h3" fontWeight="bold">
                        {eventsCount}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Total active & past events
                    </Typography>
                </DashboardPaper>
            </Grid>

            {/* Dashboard Item 2: Mentorship Programs */}
            <Grid item xs={12} sm={6} md={4}>
                <DashboardPaper
                     // --- Vibrant Gradient 2 ---
                     sx={{
                         background: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)', 
                     }}
                     animationDelay="0.2s" // Stagger animation start
                >
                     <Box display="flex" alignItems="center" mb={1}>
                        <GroupIcon sx={{ fontSize: 45, mr: 1.5, color: 'rgba(255, 255, 255, 0.8)' }} />
                        <Typography variant="h5" component="h2" fontWeight="medium">
                           Mentorships
                        </Typography>
                    </Box>
                    <Typography variant="h3" fontWeight="bold">
                        {mentorshipCount}
                    </Typography>
                     <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Active program connections
                    </Typography>
                </DashboardPaper>
            </Grid>


        </Grid>
    );
}

export default DashboardItems;