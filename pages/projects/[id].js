import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, MapPin, Calendar, Briefcase, Download } from 'lucide-react';
import { projectsAPI } from '../../lib/api';

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const response = await projectsAPI.getById(id);
        setProject(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('Failed to load project. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-gray-600">Loading project...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-red-600">{error || 'Project not found'}</p>
            <button
              onClick={() => router.push('/projects')}
              className="mt-4 text-red-600 hover:text-red-700"
            >
              Back to Projects
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Format project data
  const projectData = {
    title: project.title,
    location: `${project.location}, ${project.country}`,
    image: project.image || 'https://via.placeholder.com/800x600/DC2626/FFFFFF?text=Project+Image',
    description: project.description || 'No description available',
    status: project.status,
    year: project.year || 'N/A',
    category: project.category || 'Project',
    features: [
      'Professional project management',
      'Quality assurance',
      'Timely delivery',
      'Expert team',
      'Cutting-edge technology',
      'Safety compliance'
    ]
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
              Back to Projects
            </button>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Project Image */}
              <div data-aos="fade-right">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={projectData.image}
                    alt={projectData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div data-aos="fade-left">
                <p className={`text-sm font-semibold mb-2 px-3 py-1 rounded-full inline-block ${
                  projectData.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : projectData.status === 'ongoing' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-blue-100 text-blue-800'
                }`}>
                  {projectData.status.charAt(0).toUpperCase() + projectData.status.slice(1)}
                </p>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{projectData.title}</h1>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-2 text-red-600" />
                    <span className="text-lg">{projectData.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-2 text-red-600" />
                    <span className="text-lg">Year: {projectData.year}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Briefcase className="w-5 h-5 mr-2 text-red-600" />
                    <span className="text-lg">{projectData.category} Project</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8">{projectData.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Highlights</h2>
                  <ul className="space-y-2">
                    {projectData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                  <button className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Project Report
                  </button>
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