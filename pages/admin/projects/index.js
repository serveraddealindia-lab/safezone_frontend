import { useState, useEffect } from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  TextField, 
  Box, 
  CircularProgress,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import AdminLayout from '../../../components/AdminLayout';

export default function ProjectsAdminPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    id: null,
    title: '',
    location: '',
    country: '',
    description: '',
    image: '',
    year: new Date().getFullYear(),
    status: 'completed',
    category: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/projects');
      const data = await response.json();
      setProjects(data.data || []);
    } catch (err) {
      setError('Failed to load projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (project = null) => {
    if (project) {
      setCurrentProject({
        id: project.id,
        title: project.title,
        location: project.location,
        country: project.country,
        description: project.description,
        image: project.image,
        year: project.year,
        status: project.status,
        category: project.category
      });
    } else {
      setCurrentProject({
        id: null,
        title: '',
        location: '',
        country: '',
        description: '',
        image: '',
        year: new Date().getFullYear(),
        status: 'completed',
        category: ''
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const url = currentProject.id 
        ? `http://localhost:5000/api/v1/projects/\${currentProject.id}`
        : 'http://localhost:5000/api/v1/projects';
      
      const method = currentProject.id ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentProject)
      });
      
      if (response.ok) {
        fetchData();
        handleClose();
      } else {
        throw new Error('Failed to save project');
      }
    } catch (err) {
      setError('Operation failed');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/projects/\${id}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          fetchData();
        } else {
          throw new Error('Failed to delete project');
        }
      } catch (err) {
        setError('Delete failed');
        console.error(err);
      }
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <Box display='flex' justifyContent='center' alignItems='center' minHeight='500px'>
          <CircularProgress />
        </Box>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <Alert severity='error'>{error}</Alert>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Box sx={{ width: '100%', mt: 2 }}>
        <Button 
          variant='contained' 
          onClick={() => handleOpen()}
          sx={{ mb: 2 }}
        >
          Add Project
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='projects table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => (
                <TableRow
                  key={project.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {project.id}
                  </TableCell>
                  <TableCell>{project.title}</TableCell>
                  <TableCell>{project.location}</TableCell>
                  <TableCell>{project.country}</TableCell>
                  <TableCell>{project.year}</TableCell>
                  <TableCell>
                    <Chip 
                      label={project.status} 
                      color={
                        project.status === 'completed' ? 'success' : 
                        project.status === 'ongoing' ? 'warning' : 'info'
                      }
                      size='small' 
                    />
                  </TableCell>
                  <TableCell>{project.category}</TableCell>
                  <TableCell>
                    <IconButton 
                      color='primary' 
                      onClick={() => handleOpen(project)}
                      size='small'
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      color='error' 
                      onClick={() => handleDelete(project.id)}
                      size='small'
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
        <DialogTitle>
          {currentProject.id ? 'Edit Project' : 'Add Project'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            name='title'
            label='Title'
            fullWidth
            variant='outlined'
            value={currentProject.title}
            onChange={handleChange}
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin='dense'
            name='location'
            label='Location'
            fullWidth
            variant='outlined'
            value={currentProject.location}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin='dense'
            name='country'
            label='Country'
            fullWidth
            variant='outlined'
            value={currentProject.country}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin='dense'
            name='description'
            label='Description'
            fullWidth
            multiline
            rows={3}
            variant='outlined'
            value={currentProject.description}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin='dense'
            name='image'
            label='Image URL'
            fullWidth
            variant='outlined'
            value={currentProject.image}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin='dense'
            name='year'
            label='Year'
            type='number'
            fullWidth
            variant='outlined'
            value={currentProject.year}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              name='status'
              value={currentProject.status}
              onChange={handleChange}
            >
              <MenuItem value='completed'>Completed</MenuItem>
              <MenuItem value='ongoing'>Ongoing</MenuItem>
              <MenuItem value='planned'>Planned</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin='dense'
            name='category'
            label='Category'
            fullWidth
            variant='outlined'
            value={currentProject.category}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant='contained'>
            {currentProject.id ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </AdminLayout>
  );
}
