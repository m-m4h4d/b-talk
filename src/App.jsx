import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

// Each page is loaded on demand, so visitors only download the code for
// the pages they open.
const Landing = lazy(() => import('./Components/Landing'));
const Signup = lazy(() => import('./Components/Signup'));
const Login = lazy(() => import('./Components/Login'));
const Question = lazy(() => import('./Components/Question'));
const Stepper = lazy(() => import('./Components/Stepper'));
const InstructorSearch = lazy(() => import('./Components/InstructorSearch'));
const DashboardInstructor = lazy(() => import('./Components/DashboardInstructor'));
const DashboardStudent = lazy(() => import('./Components/DashboardStudent'));
const DashboardAdmin = lazy(() => import('./Components/DashboardAdmin'));
const InstructorListing = lazy(() => import('./Components/InstructorListing'));
const InstructorDetail = lazy(() => import('./Components/InstructorDetail'));
const Chat = lazy(() => import('./Components/Chat'));
const Contact = lazy(() => import('./Components/Contact'));
const About = lazy(() => import('./Components/About'));

const PageLoader = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
    </Box>
);

function App() {
    return (
        <Router>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/question" element={<Question />} />
                    <Route path="/stepper" element={<Stepper />} />
                    <Route path="/instructor-search" element={<InstructorSearch />} />
                    <Route path="/instructor-dashboard" element={<DashboardInstructor />} />
                    <Route path="/student-dashboard" element={<DashboardStudent />} />
                    <Route path="/admin-dashboard" element={<DashboardAdmin />} />
                    <Route path="/instructor-listing" element={<InstructorListing />} />
                    <Route path="/instructors/:id" element={<InstructorDetail />} />
                    <Route path="/instructor-detail" element={<Navigate to="/instructor-listing" replace />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
