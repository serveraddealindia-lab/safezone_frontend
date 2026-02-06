import { useState, useEffect } from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
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
import { productsAPI, categoriesAPI } from '../../../lib/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    name: '',
    short_desc: '',
    long_desc: '',
    category_id: '',
    image: null,
    pdf: null,
    datasheet: null
  });
  const [imagePreview, setImagePreview] = useState('');
  const [pdfPreview, setPdfPreview] = useState('');
  const [datasheetPreview, setDatasheetPreview] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        productsAPI.getAll(),
        categoriesAPI.getAll()
      ]);
      setProducts(productsRes.data);
      setCategories(categoriesRes.data);
    } catch (err) {
      setError('Failed to load data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (product = null) => {
    if (product) {
      setCurrentProduct({
        id: product.id,
        name: product.name,
        short_desc: product.short_desc,
        long_desc: product.long_desc,
        category_id: product.category_id,
        image: product.image,
        pdf: product.pdf,
        datasheet: product.datasheet
      });
      setImagePreview(product.image ? `${API_BASE_URL.replace('/api/v1', '')}/uploads/${product.image}` : '');
      setPdfPreview(product.pdf ? `${API_BASE_URL.replace('/api/v1', '')}/uploads/${product.pdf}` : '');
      setDatasheetPreview(product.datasheet ? `${API_BASE_URL.replace('/api/v1', '')}/uploads/${product.datasheet}` : '');
    } else {
      setCurrentProduct({
        id: null,
        name: '',
        short_desc: '',
        long_desc: '',
        category_id: '',
        image: [],
        pdf: null,
        datasheet: null
      });
      setImagePreview('');
      setPdfPreview('');
      setDatasheetPreview('');
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    
    if (files && files.length > 0) {
      const file = files[0];
      setCurrentProduct(prev => ({
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
      } else if (name === 'pdf') {
        setPdfPreview(URL.createObjectURL(file));
      } else if (name === 'datasheet') {
        setDatasheetPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', currentProduct.name);
    formData.append('short_desc', currentProduct.short_desc);
    formData.append('long_desc', currentProduct.long_desc);
    formData.append('category_id', currentProduct.category_id);
    
    if (currentProduct.image && currentProduct.image instanceof File) {
      formData.append('image', currentProduct.image);
    }
    if (currentProduct.pdf) {
      formData.append('pdf', currentProduct.pdf);
    }
    if (currentProduct.datasheet) {
      formData.append('datasheet', currentProduct.datasheet);
    }

    try {
      if (currentProduct.id) {
        await productsAPI.update(currentProduct.id, formData);
      } else {
        await productsAPI.create(formData);
      }
      fetchData();
      handleClose();
    } catch (err) {
      setError('Operation failed');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productsAPI.delete(id);
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
          Add Product
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="products table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Short Description</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>PDF</TableCell>
                <TableCell>Datasheet</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => {
                const category = categories.find(cat => cat.id === product.category_id);
                return (
                  <TableRow
                    key={product.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.id}
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.short_desc ? product.short_desc.substring(0, 50) + (product.short_desc.length > 50 ? '...' : '') : 'No description'}</TableCell>
                    <TableCell>{category && category.name ? category.name : 'N/A'}</TableCell>
                    <TableCell>
                      {product.image ? (
                        <img 
                          src={`${API_BASE_URL.replace('/api/v1', '')}/uploads/${product.image}`} 
                          alt={product.name || 'Product'} 
                          style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }}
                        />
                      ) : (
                        'No image'
                      )}
                    </TableCell>
                    <TableCell>
                      {product.pdf ? (
                        <a href={`${API_BASE_URL.replace('/api/v1', '')}/uploads/${product.pdf}`} target="_blank" rel="noopener noreferrer">View PDF</a>
                      ) : (
                        'No PDF'
                      )}
                    </TableCell>
                    <TableCell>
                      {product.datasheet ? (
                        <a href={`${API_BASE_URL.replace('/api/v1', '')}/uploads/${product.datasheet}`} target="_blank" rel="noopener noreferrer">View Datasheet</a>
                      ) : (
                        'No Datasheet'
                      )}
                    </TableCell>
                    <TableCell>
                      <IconButton 
                        color="primary" 
                        onClick={() => handleOpen(product)}
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        color="error" 
                        onClick={() => handleDelete(product.id)}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {currentProduct.id ? 'Edit Product' : 'Add Product'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              fullWidth
              variant="outlined"
              value={currentProduct.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              name="short_desc"
              label="Short Description"
              fullWidth
              variant="outlined"
              value={currentProduct.short_desc}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              name="long_desc"
              label="Long Description"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={currentProduct.long_desc}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Category</InputLabel>
              <Select
                name="category_id"
                value={currentProduct.category_id}
                onChange={handleChange}
              >
                {categories.map(category => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
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
                <Box sx={{ display: 'inline-block', position: 'relative', mr: 1 }}>
                  <img src={imagePreview} alt="Preview" style={{ maxHeight: 100, width: 'auto' }} />
                  <Button 
                    size="small" 
                    variant="contained" 
                    color="error" 
                    sx={{ position: 'absolute', top: -8, right: -8, minWidth: '20px', height: '20px', fontSize: '12px', padding: '0' }}
                    onClick={() => {
                      setCurrentProduct(prev => ({ ...prev, image: null }));
                      setImagePreview('');
                    }}
                  >
                    ×
                  </Button>
                </Box>
              )}
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <input
                accept=".pdf"
                style={{ display: 'none' }}
                id="pdf-upload"
                type="file"
                name="pdf"
                onChange={handleFileChange}
              />
              <label htmlFor="pdf-upload">
                <Button variant="outlined" component="span" sx={{ mr: 2 }}>
                  Upload PDF
                </Button>
              </label>
              {pdfPreview && (
                <Box sx={{ display: 'inline-flex', alignItems: 'center', ml: 1 }}>
                  <a href={pdfPreview} target="_blank" rel="noopener noreferrer">
                    View PDF
                  </a>
                  <Button 
                    size="small" 
                    variant="contained" 
                    color="error" 
                    sx={{ ml: 1, minWidth: '20px', height: '20px', fontSize: '12px', padding: '0' }}
                    onClick={() => {
                      setCurrentProduct(prev => ({ ...prev, pdf: null }));
                      setPdfPreview('');
                    }}
                  >
                    ×
                  </Button>
                </Box>
              )}
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <input
                accept=".pdf,.doc,.docx"
                style={{ display: 'none' }}
                id="datasheet-upload"
                type="file"
                name="datasheet"
                onChange={handleFileChange}
              />
              <label htmlFor="datasheet-upload">
                <Button variant="outlined" component="span" sx={{ mr: 2 }}>
                  Upload Datasheet
                </Button>
              </label>
              {datasheetPreview && (
                <Box sx={{ display: 'inline-flex', alignItems: 'center', ml: 1 }}>
                  <a href={datasheetPreview} target="_blank" rel="noopener noreferrer">
                    View Datasheet
                  </a>
                  <Button 
                    size="small" 
                    variant="contained" 
                    color="error" 
                    sx={{ ml: 1, minWidth: '20px', height: '20px', fontSize: '12px', padding: '0' }}
                    onClick={() => {
                      setCurrentProduct(prev => ({ ...prev, datasheet: null }));
                      setDatasheetPreview('');
                    }}
                  >
                    ×
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {currentProduct.id ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </AdminLayout>
  );
}