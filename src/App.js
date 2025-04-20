import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Layout/Header';
import Events from './pages/Events';
import News from './pages/News';
import Mentorship from './pages/Mentorship';
import JobPostings from './pages/JobPostings';
import Gallery from './pages/Gallery';
import InterviewExp from './pages/InterviewExp';
import EditEventForm from './components/Events/EditEventForm';
import EditMentorship from './components/EditMentorship';
import EditNewsForm from './components/News/EditNewsForm';
import EditGallery from './components/Gallery/EditGallery';
import AddAlbum from './components/Gallery/AddAlbum';
import AddEvent from './components/Events/AddEvent';
import EditInterviewExperience from './components/InterviewExperience/EditInterviewExperience';
import ViewInterviewExperience from './components/InterviewExperience/ViewInterviewExperience';
import AddNewsForm from './components/News/AddNewsForm';
import AddInterviewExperience from './components/InterviewExperience/AddInterviewExperience';
import ViewEvent from './components/Events/ViewEvent';
import ViewNews from './components/News/ViewNews';
import ViewGallery from './components/Gallery/ViewGallery';
import AddJobPosting from './components/JobPostings/AddJobPosting';
import EditJobPosting from './components/JobPostings/EditJobPosting';
import ViewJobPosting from './components/JobPostings/ViewJobPosting';
import { getAllEvents } from './apis/EventApi';

const demoNews = [
  {
    newsId: 1,
    newsTitle: "Tech Innovations 2024",
    newsDescription: "Latest trends in tech.",
    newsImage: "https://via.placeholder.com/50",
    category: "Technology",
    author: "John Doe",
    newsDate: "2024-08-10T00:00:00Z",
    isActive: true,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-05T15:00:00Z",
  },
  {
    newsId: 2,
    newsTitle: "Finance Market Crash",
    newsDescription: "Impact of economic slowdown.",
    newsImage: "https://via.placeholder.com/50",
    category: "Finance",
    author: "Jane Smith",
    newsDate: "2024-08-12T00:00:00Z",
    isActive: false,
    createdAt: "2024-08-02T11:00:00Z",
    updatedAt: "2024-08-06T16:00:00Z",
  },
];

const jobPostingsData = [
  {
    jobsPostingId: 1,
    jobTitle: "Software Engineer",
    jobDescription: "Develop and maintain web applications.",
    companyName: "TechCorp",
    companyLocation: "San Francisco",
    jobMode: "Remote",
    jobType: "Full-time",
    jobCategory: "Technical",
    expectedSalary: "$100,000 - $120,000",
    applyLink: "https://example.com/apply",
    requiredSkills: "JavaScript, React, Node.js",
    qualifications: "Bachelor's degree in Computer Science",
    responsibilities: "Develop features, fix bugs, and write tests.",
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-05T15:00:00Z",
  },
  {
    jobsPostingId: 2,
    jobTitle: "Marketing Specialist",
    jobDescription: "Plan and execute marketing campaigns.",
    companyName: "Marketify",
    companyLocation: "New York",
    jobMode: "Onsite",
    jobType: "Part-time",
    jobCategory: "Non-Technical",
    expectedSalary: "$50,000 - $60,000",
    applyLink: "https://example.com/apply",
    requiredSkills: "SEO, Content Marketing, Analytics",
    qualifications: "Bachelor's degree in Marketing",
    responsibilities: "Create campaigns, analyze performance, and optimize.",
    createdAt: "2024-08-02T11:00:00Z",
    updatedAt: "2024-08-06T16:00:00Z",
  },
];

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();
        setEvents(data.items);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/editEvent/:id" element={<EditEventForm events={events} />} />
          <Route path="/viewEvent/:id" element={<ViewEvent events={events} />} />
          <Route path="/news" element={<News />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/editMentorship/:id" element={<EditMentorship />} />
          <Route path="/editNews/:id" element={<EditNewsForm news={demoNews} />} />
          <Route path="/viewNews/:id" element={<ViewNews news={demoNews} />} />
          <Route path="/viewGallery/:id" element={<ViewGallery />} />
          <Route path="/editGallery/:id" element={<EditGallery />} />
          <Route path="/addAlbum" element={<AddAlbum />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/addNews" element={<AddNewsForm />} />
          <Route path='/editInterviewExperience/:id' element={<EditInterviewExperience />} />
          <Route path='/viewInterviewExperience/:id' element={<ViewInterviewExperience />} />
          <Route path='/addInterviewExperience' element={<AddInterviewExperience />} />
          <Route path="/jobs" element={<JobPostings />} />
          <Route path="/addJobPosting" element={<AddJobPosting />} />
          <Route path="/editJobPosting/:id" element={<EditJobPosting jobPostings={jobPostingsData} />} />
          <Route path="/viewJobPosting/:id" element={<ViewJobPosting jobPostings={jobPostingsData} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/interview-experience" element={<InterviewExp />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
