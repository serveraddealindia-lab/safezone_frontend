import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Chip, Box, Tabs, Tab } from '@mui/material';
import { LocationOn, CalendarToday, Flag } from '@mui/icons-material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/projects');
      const data = await response.json();
      setProjects(data.data || []);
      setFilteredProjects(data.data || []);
    } catch (err) {
      setError('Failed to load projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    
    if (newValue === 0) {
      setFilteredProjects(projects);
    } else if (newValue === 1) {
      setFilteredProjects(projects.filter(p => p.status === 'completed'));
    } else if (newValue === 2) {
      setFilteredProjects(projects.filter(p => p.status === 'ongoing'));
    } else if (newValue === 3) {
      setFilteredProjects(projects.filter(p => p.status === 'planned'));
    }
  };

  if (loading) {
    return (
      <Container maxWidth='lg' sx={{ py: 8 }}>
        <Typography variant='h4' align='center'>Loading projects...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth='lg' sx={{ py: 8 }}>
        <Typography variant='h4' color='error' align='center'>{error}</Typography>
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', pt: '5rem' }}>
        {/* Hero Section */}
        <Box 
          sx={{ 
            bgcolor: 'primary.main', 
            py: 8,
            backgroundImage: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)'
          }}
        >
          <Container maxWidth='lg'>
            <Typography 
              variant='h2' 
              align='center' 
              sx={{ 
                color: 'white', 
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Our Projects
            </Typography>
            <Typography 
              variant='h5' 
              align='center' 
              sx={{ 
                color: 'rgba(255,255,255,0.9)', 
                fontWeight: 300,
                mb: 4
              }}
            >
              Fire Safety Projects in UAE, KSA, Oman, India & over 100 Countries
            </Typography>
          </Container>
        </Box>

      {/* Filter Tabs */}
      <Container maxWidth='lg' sx={{ py: 6 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          centered
          sx={{ 
            mb: 4,
            '& .MuiTab-root': {
              fontSize: '1.1rem',
              fontWeight: 500,
              px: 4,
              py: 2
            }
          }}
        >
          <Tab label='All Projects' />
          <Tab label='Completed' />
          <Tab label='Ongoing' />
          <Tab label='Planned' />
        </Tabs>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component='img'
                  height='250'
                  image={project.image || '/placeholder-project.jpg'}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Chip 
                      label={project.status} 
                      color={
                        project.status === 'completed' ? 'success' : 
                        project.status === 'ongoing' ? 'warning' : 'info'
                      }
                      size='small'
                      sx={{ fontWeight: 600 }}
                    />
                    <Chip 
                      label={project.category} 
                      variant='outlined'
                      size='small'
                    />
                  </Box>
                  
                  <Typography 
                    variant='h6' 
                    component='h3' 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 2,
                      color: 'text.primary'
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOn sx={{ fontSize: 16, mr: 1, color: 'primary.main' }} />
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                      {project.location}, {project.country}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CalendarToday sx={{ fontSize: 16, mr: 1, color: 'primary.main' }} />
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                      Year: {project.year}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Flag sx={{ fontSize: 16, mr: 1, color: 'primary.main' }} />
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                      {project.category} Project
                    </Typography>
                  </Box>
                  
                  {project.description && (
                    <Typography 
                      variant='body2' 
                      sx={{ 
                        mt: 2, 
                        color: 'text.secondary',
                        lineHeight: 1.6
                      }}
                    >
                      {project.description}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredProjects.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant='h5' sx={{ color: 'text.secondary', mb: 2 }}>
              No projects found
            </Typography>
            <Typography variant='body1' sx={{ color: 'text.secondary' }}>
              Try selecting a different filter
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
    <Footer />
    </>
  );
}
