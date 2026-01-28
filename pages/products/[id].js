import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, Download, Check, FileText } from 'lucide-react';
import { productsAPI } from '../../lib/api';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const response = await productsAPI.getById(id);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-gray-600">Loading product...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-red-600">{error || 'Product not found'}</p>
            <button
              onClick={() => router.push('/products')}
              className="mt-4 text-red-600 hover:text-red-700"
            >
              Back to Products
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Format product data
  const productData = {
    name: product.name,
    category: product.category?.name || 'Uncategorized',
    image: product.image || 'https://via.placeholder.com/800x600/DC2626/FFFFFF?text=Product+Image',
    description: product.short_desc || 'No description available',
    longDescription: product.long_desc || product.short_desc || 'Detailed description coming soon.',
    features: [
      'High quality materials',
      'Certified and tested',
      'Easy installation',
      'Long-lasting performance'
    ],
    specifications: {
      'Category': product.category?.name || 'N/A',
      'Image': product.image ? 'Available' : 'Not available',
      'PDF': product.pdf ? 'Available' : 'Not available',
      'Datasheet': product.datasheet ? 'Available' : 'Not available'
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-600 hover:text-red-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </button>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div data-aos="fade-right">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={productData.image}
                    alt={productData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div data-aos="fade-left">
                <p className="text-red-600 font-semibold mb-2">{productData.category}</p>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{productData.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{productData.description}</p>
                <p className="text-gray-700 mb-8">{productData.longDescription}</p>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {productData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specifications</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <dl className="grid grid-cols-1 gap-4">
                      {Object.entries(productData.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                          <dt className="font-semibold text-gray-700">{key}</dt>
                          <dd className="text-gray-600">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Request Quote
                  </button>
                  <button className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </button>
                  {product.datasheet && (
                    <a 
                      href={product.datasheet} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Download Datasheet
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

