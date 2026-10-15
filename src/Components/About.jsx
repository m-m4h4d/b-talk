import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Divider, Grid, Paper, Button, MobileStepper, useTheme } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import { Students } from '../Images';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { a, b, c, d } from '../Images';

const AUTOPLAY_INTERVAL = 4000;

const images = [
    {
        label: 'Certified teachers',
        imgPath: a
    },
    {
        label: 'Online courses',
        imgPath: b
    },
    {
        label: 'Certification',
        imgPath: c
    },
    {
        label: '1-to-1 learning',
        imgPath: d
    },
];

const About = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const statistics = [
        { label: 'Subjects', value: '5' },
        { label: 'Enrolled Students', value: '10K' },
        { label: 'Certified Teachers', value: '45' },
        { label: 'Countries', value: '50+' },
    ];

    const handleNavigation = (category) => {
        navigate('/signup', { state: { category } });
    };

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // Auto-advance the carousel; restarting the timer on every step change
    // gives the user a full interval after clicking Back/Next.
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
        }, AUTOPLAY_INTERVAL);
        return () => clearTimeout(timer);
    }, [activeStep, maxSteps]);

    return (
        <div>
            <Navbar />
            <Box sx={{ backgroundColor: '#f7f7f7', padding: '4rem 0' }}>
                <Container>
                    <Typography variant="h3" align="center" gutterBottom>
                        About us
                    </Typography>
                    <Divider variant="middle" sx={{ margin: '0 auto', width: '5%', borderBottomWidth: 6, borderColor: '#00bcd4' }} />
                </Container>
            </Box>
            <Box sx={{ padding: '4rem 0' }}>
                <Container>
                    <Typography variant="h4" align="center" gutterBottom>
                        Who We Are
                    </Typography>
                    <Divider variant="middle" sx={{ margin: '0 auto', width: '5%', borderBottomWidth: 6, borderColor: '#00bcd4' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <Box sx={{ width: '45%' }}>
                            <img src={Students} alt="Students" style={{ width: '100%' }} />
                            <Typography variant="h5">
                                <b>We connect learners with tutors who care about their progress.</b>
                            </Typography>
                        </Box>
                        <Box sx={{ width: '45%' }}>
                            <Typography variant="h5" gutterBottom>
                                We Have An International Learning Community
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Our tutors and students come from all over the world. Whether you are learning a new language, preparing for an exam or picking up a technical skill, you can find a tutor who speaks your language and understands your goals.
                            </Typography><br />
                            <Typography variant="h5" gutterBottom>
                                We Teach Over 10,000 Students
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                From school maths to business English and web programming, our students learn one-on-one with lessons planned around their pace. Every new student starts with a free trial lesson, so you can find the right tutor before you commit.
                            </Typography><br />
                            <Typography variant="h5" gutterBottom>
                                We Are A Modern, Fast-growing Platform
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Built in Canada, BestTalk brings scheduling, payments, messaging and progress tracking together in one place, so students and tutors can focus on learning instead of logistics.
                            </Typography>
                        </Box>
                    </Box><br /><br /><br />
                    <Box align="center" style={{ alignItems: 'center', padding: '4rem 0' }}>
                        <Box align="center" sx={{ maxWidth: 400, flexGrow: 1 }}>
                            <Box sx={{ overflow: 'hidden', maxWidth: 400 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        transition: 'transform 0.5s ease-in-out',
                                        transform: `translateX(${(theme.direction === 'rtl' ? 1 : -1) * activeStep * 100}%)`,
                                    }}
                                >
                                    {images.map((step) => (
                                        <Box
                                            key={step.label}
                                            component="img"
                                            sx={{
                                                height: 255,
                                                display: 'block',
                                                flex: '0 0 100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>
                    </Box>
                    <Typography variant="h4" align="center" gutterBottom>
                        About Us
                    </Typography><br />
                    <Divider variant="middle" sx={{ margin: '0 auto', width: '5%', borderBottomWidth: 6, borderColor: '#00bcd4' }} /><br />
                    <Typography variant="h5" align="center" gutterBottom>
                        Personalized, one-on-one learning with certified tutors, wherever you are.
                    </Typography><br /><br />
                    <Grid container spacing={2}>
                        {statistics.map((stat, index) => (
                            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Paper sx={{ padding: 2, textAlign: 'center' }}>
                                    <Typography variant="h2"><b>{stat.value}</b></Typography>
                                    <Typography variant="h6">{stat.label}</Typography><br />
                                    <Divider variant="middle" sx={{ margin: '0 auto', width: '30%', borderBottomWidth: 6, borderColor: '#A7A7A7' }} />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '2rem', alignItems: 'center' }}>
                        <Typography variant="h6" align="center" gutterBottom sx={{ paddingTop: 20 }}>
                            Change Your Life
                        </Typography><br />
                        <Divider variant="middle" sx={{ margin: '0 auto', width: '5%', borderBottomWidth: 6, borderColor: '#00bcd4' }} /><br />
                        <Typography variant="h4" align="center" gutterBottom>
                            Start learning English with us!
                        </Typography><br /><br />
                        <Button onClick={() => handleNavigation('Learner')} variant="contained" align="center">
                            Register
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </div>
    );
};

export default About;
