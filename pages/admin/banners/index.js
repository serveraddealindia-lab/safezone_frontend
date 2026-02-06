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
import { bannersAPI } from '../../../lib/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export default function BannersPage() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState({
    id: null,
    title: '',
    subtitle: '',
    link: '',
    status: 'active',
    image: null
  });
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await bannersAPI.getAll();
      setBanners(response.data);
    } catch (err) {
      setError('Failed to load banners');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (banner = null) => {
    if (banner) {
      setCurrentBanner({
        id: banner.id,
        title: banner.title,
        subtitle: banner.subtitle,
        link: banner.link,
        status: banner.status,
        image: null
      });
      setImagePreview(banner.image ? `${API_BASE_URL.replace('/api/v1', '')}/uploads/${banner.image}` : '');
    } else {
      setCurrentBanner({
        id: null,
        title: '',
        subtitle: '',
        link: '',
        status: 'active',
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
    setCurrentBanner(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    
    if (file) {
      setCurrentBanner(prev => ({
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
    formData.append('title', currentBanner.title);
    formData.append('subtitle', currentBanner.subtitle);
    formData.append('link', currentBanner.link);
    formData.append('status', currentBanner.status);
    
    if (currentBanner.image) {
      formData.append('image', currentBanner.image);
    }

    try {
      if (currentBanner.id) {
        await bannersAPI.update(currentBanner.id, formData);
      } else {
        await bannersAPI.create(formData);
      }
      fetchData();
      handleClose();
    } catch (err) {
      setError('Operation failed');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this banner?')) {
      try {
        await bannersAPI.delete(id);
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
          Add Banner
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="banners table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Subtitle</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {banners.map((banner) => (
                <TableRow
                  key={banner.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {banner.id}
                  </TableCell>
                  <TableCell>{banner.title}</TableCell>
                  <TableCell>{banner.subtitle}</TableCell>
                  <TableCell>
                    {banner.image ? (
                      <img 
                        src={`${API_BASE_URL.replace('/api/v1', '')}/uploads/${banner.image}`} 
                        alt={banner.title} 
                        style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }}
                      />
                    ) : (
                      'No image'
                    )}
                  </TableCell>
                  <TableCell>{banner.status}</TableCell>
                  <TableCell>
                    <IconButton 
                      color="primary" 
                      onClick={() => handleOpen(banner)}
                      size="small"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton 
                      color="error" 
                      onClick={() => handleDelete(banner.id)}
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
          {currentBanner.id ? 'Edit Banner' : 'Add Banner'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            fullWidth
            variant="outlined"
            value={currentBanner.title}
            onChange={handleChange}
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="dense"
            name="subtitle"
            label="Subtitle"
            fullWidth
            variant="outlined"
            value={currentBanner.subtitle}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            name="link"
            label="Link"
            fullWidth
            variant="outlined"
            value={currentBanner.link}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={currentBanner.status}
              onChange={handleChange}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
                  
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
            {currentBanner.id ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </AdminLayout>
  );
}