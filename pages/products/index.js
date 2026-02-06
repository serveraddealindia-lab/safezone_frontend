import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { productsAPI, categoriesAPI } from '../../lib/api';

export default function ProductsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get category from URL query if present
    if (router.query.category) {
      const categoryId = categories.find(cat => 
        cat.name.toLowerCase().includes(router.query.category.toLowerCase())
      )?.id;
      if (categoryId) {
        setSelectedCategory(categoryId);
      }
    }
  }, [router.query, categories]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsRes, categoriesRes] = await Promise.all([
          productsAPI.getAll(),
          categoriesAPI.getAll()
        ]);
        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category_id === parseInt(selectedCategory));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6" data-aos="fade-up">Our Products</h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
              Comprehensive fire safety solutions for every application
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-red-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id.toString())}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    selectedCategory === category.id.toString()
                      ? 'bg-red-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            {loading && (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading products...</p>
              </div>
            )}
            {error && (
              <div className="text-center py-12">
                <p className="text-red-600">{error}</p>
              </div>
            )}
            {!loading && !error && (
              <>
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No products found in this category.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {filteredProducts.map((product, index) => (
                      <div
                        key={product.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group border border-gray-100"
                      >
                        <div className="relative h-72 overflow-hidden bg-gray-100">
                          <img
                            src={product.image || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          {product.datasheet && (
                            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-2">
                              <a 
                                href={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/uploads/${product.datasheet}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-center"
                              >
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span className="text-xs text-gray-700 font-medium">Datasheet</span>
                              </a>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6 lg:p-8">
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{product.name}</h3>
                          <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-2">{product.short_desc || product.description || 'Premium fire safety solution designed for maximum protection and reliability.'}</p>
                          <div className="flex flex-wrap gap-2">
                            <Link
                              href={`/products/${product.id}`}
                              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm group/link"
                            >
                              View Details 
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

