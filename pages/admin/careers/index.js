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

export default function CareersAdminPage() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentCareer, setCurrentCareer] = useState({
    id: null,
    title: '',
    department: '',
    location: '',
    type: '',
    description: '',
    requirements: '',
    image: '',
    is_active: true
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/careers');
      const data = await response.json();
      setCareers(data.data || []);
    } catch (err) {
      setError('Failed to load careers');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (career = null) => {
    if (career) {
      setCurrentCareer({
        id: career.id,
        title: career.title,
        department: career.department,
        location: career.location,
        type: career.type,
        description: career.description,
        requirements: career.requirements,
        image: career.image,
        is_active: career.is_active
      });
    } else {
      setCurrentCareer({
        id: null,
        title: '',
        department: '',
        location: '',
        type: '',
        description: '',
        requirements: '',
        image: '',
        is_active: true
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCareer(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const url = currentCareer.id 
        ? `http://localhost:5000/api/v1/careers/${currentCareer.id}`
        : 'http://localhost:5000/api/v1/careers';
      
      const method = currentCareer.id ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentCareer)
      });
      
      if (response.ok) {
        fetchData();
        handleClose();
      } else {
        throw new Error('Failed to save career');
      }
    } catch (err) {
      setError('Operation failed');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this career?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/careers/${id}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          fetchData();
        } else {
          throw new Error('Failed to delete career');
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
          Add Career
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='careers table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {careers.map((career) => (
                <TableRow
                  key={career.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {career.id}
                  </TableCell>
                  <TableCell>{career.title}</TableCell>
                  <TableCell>{career.department}</TableCell>
                  <TableCell>{career.location}</TableCell>
                  <TableCell>{career.type}</TableCell>
                  <TableCell>{career.is_active ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <IconButton 
                      color='primary' 
                      onClick={() => handleOpen(career)}
                      size='small'
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      color='error' 
                      onClick={() => handleDelete(career.id)}
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

      <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
        <DialogTitle>
          {currentCareer.id ? 'Edit Career' : 'Add Career'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            name='title'
            label='Title'
            fullWidth
            variant='outlined'
            value={currentCareer.title}
            onChange={handleChange}
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin='dense'
            name='department'
            label='Department'
            fullWidth
            variant='outlined'
            value={currentCareer.department}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin='dense'
            name='location'
            label='Location'
            fullWidth
            variant='outlined'
            value={currentCareer.location}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin='dense'
            name='type'
            label='Type'
            fullWidth
            variant='outlined'
            value={currentCareer.type}
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
            value={currentCareer.description}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin='dense'
            name='requirements'
            label='Requirements'
            fullWidth
            multiline
            rows={3}
            variant='outlined'
            value={currentCareer.requirements}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin='dense'
            name='image'
            label='Image URL'
            fullWidth
            variant='outlined'
            value={currentCareer.image}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Active</InputLabel>
            <Select
              name='is_active'
              value={currentCareer.is_active}
              onChange={(e) => setCurrentCareer(prev => ({
                ...prev,
                is_active: e.target.value
              }))}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant='contained'>
            {currentCareer.id ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </AdminLayout>
  );
}