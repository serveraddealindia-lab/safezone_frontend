import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { projectsAPI } from '../../lib/api';

export default function ProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await projectsAPI.getAll();
        setProjects(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Add scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [projects]);

  // Handle hover effects
  const handleMouseEnter = (e) => {
    const img = e.currentTarget.querySelector('.project-image');
    const overlay = e.currentTarget.querySelector('.project-overlay');
    if (img) img.style.transform = 'scale(1.08)';
    if (overlay) {
      overlay.style.opacity = '1';
      overlay.style.transform = 'translateY(0)';
    }
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget.querySelector('.project-image');
    const overlay = e.currentTarget.querySelector('.project-overlay');
    if (img) img.style.transform = 'scale(1)';
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.transform = 'translateY(20px)';
    }
  };

  // Get projects for display (ensure we have at least 3)
  const displayProjects = [...projects];
  while (displayProjects.length < 3) {
    displayProjects.push({
      id: `placeholder-${displayProjects.length}`,
      title: `Project ${displayProjects.length + 1}`,
      description: 'Comprehensive fire protection and life safety systems for a landmark facility.',
      image: `https://via.placeholder.com/${displayProjects.length === 2 ? '800x400' : '400x300'}/DC2626/FFFFFF?text=Project+${displayProjects.length + 1}`,
      location: 'UAE',
      year: '2024'
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Prestigious Projects Section */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-right mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-red-600 tracking-wider uppercase">
                Prestigious Projects
              </h2>
              <div className="w-20 h-1 bg-red-600 ml-auto mt-4"></div>
            </div>

            {/* Projects Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Row - 2 Small Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayProjects.slice(0, 2).map((project, index) => (
                  <div 
                    key={project.id}
                    className="project-card group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer h-80"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => router.push(`/projects/${project.id}`)}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transform translate-y-5 transition-all duration-500 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center text-gray-200 text-sm">
                        <span className="mr-3">📍 {project.location || 'UAE'}</span>
                        <span>📅 {project.year || '2024'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Row - 1 Large Featured Project */}
              <div 
                className="project-card group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer lg:col-span-1 h-96"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => router.push(`/projects/${displayProjects[2].id}`)}
              >
                <img 
                  src={displayProjects[2].image} 
                  alt={displayProjects[2].title}
                  className="project-image w-full h-full object-cover transition-transform duration-700"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-0 transform translate-y-5 transition-all duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">{displayProjects[2].title}</h3>
                  <p className="text-gray-200 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
                    {displayProjects[2].description}
                  </p>
                  <div className="flex items-center text-gray-200 text-sm mb-6">
                    <span className="mr-4">📍 {displayProjects[2].location || 'Dubai, UAE'}</span>
                    <span>📅 {displayProjects[2].year || '2024'}</span>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center group">
                    Explore Project
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* View All Projects Button */}
            <div className="text-center mt-16">
              <button 
                onClick={() => router.push('/projects')}
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Projects
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}