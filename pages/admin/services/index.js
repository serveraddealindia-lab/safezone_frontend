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
import { servicesAPI } from '../../../lib/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentService, setCurrentService] = useState({
    id: null,
    name: '',
    description: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await servicesAPI.getAll();
      setServices(response.data);
    } catch (err) {
      setError('Failed to load services');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (service = null) => {
    if (service) {
      setCurrentService({
        id: service.id,
        name: service.name,
        description: service.description,
        image: null
      });
      setImagePreview(service.image ? `${API_BASE_URL.replace('/api/v1', '')}/uploads/${service.image}` : '');
    } else {
      setCurrentService({
        id: null,
        name: '',
        description: '',
        image: null
      });
      setImagePreview('');
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentService(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    
    if (file) {
      setCurrentService(prev => ({
        ...prev,
        [name]: file
      }));

      // Preview for images
      if (name === 'image') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', currentService.name);
    formData.append('description', currentService.description);
    
    if (currentService.image) {
      formData.append('image', currentService.image);
    }

    try {
      if (currentService.id) {
        await servicesAPI.update(currentService.id, formData);
      } else {
        await servicesAPI.create(formData);
      }
      fetchData();
      handleClose();
    } catch (err) {
      setError('Operation failed');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await servicesAPI.delete(id);
        fetchData();
      } catch (err) {
        setError('Delete failed');
        console.error(err);
      }
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="500px">
          <CircularProgress />
        </Box>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <Alert severity="error">{error}</Alert>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Box sx={{ width: '100%', mt: 2 }}>
        <Button 
          variant="contained" 
          onClick={() => handleOpen()}
          sx={{ mb: 2 }}
        >
          Add Service
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="services table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service) => (
                <TableRow
                  key={service.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {service.id}
                  </TableCell>
                  <TableCell>{service.name}</TableCell>
                  <TableCell>{service.description.substring(0, 50)}{service.description.length > 50 ? '...' : ''}</TableCell>
                  <TableCell>
                    {service.image ? (
                      <img 
                        src={`${API_BASE_URL.replace('/api/v1', '')}/uploads/${service.image}`} 
                        alt={service.name} 
                        style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }}
                      />
                    ) : (
                      'No image'
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton 
                      color="primary" 
                      onClick={() => handleOpen(service)}
                      size="small"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      color="error" 
                      onClick={() => handleDelete(service.id)}
                      size="small"
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

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {currentService.id ? 'Edit Service' : 'Add Service'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            fullWidth
            variant="outlined"
            value={currentService.name}
            onChange={handleChange}
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            fullWidth
            variant="outlined"
            value={currentService.description}
            onChange={handleChange}
            multiline
            rows={4}
          />
          
          <Box sx={{ mb: 2 }}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="image-upload"
              type="file"
              name="image"
              onChange={handleFileChange}
            />
            <label htmlFor="image-upload">
              <Button variant="outlined" component="span" sx={{ mr: 2 }}>
                Upload Image
              </Button>
            </label>
            {imagePreview && (
              <img src={imagePreview} alt="Preview" style={{ maxHeight: 100, marginLeft: 10 }} />
            )}
          </Box>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {currentService.id ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </AdminLayout>
  );
}