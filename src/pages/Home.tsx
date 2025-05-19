
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Home = () => {
  return <div>
      {/* Hero Section */}
      <section className="hero-section min-h-[80vh] flex items-center">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-text">
              Annabhemoju Saritha
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-portfolio-dark-brown/80">
              Business Analytics Professional
            </h2>
            <p className="text-lg text-portfolio-gray mb-8 max-w-xl">
              MBA graduate specializing in Business Analytics with a foundation in Human Resources, 
              passionate about data-driven business improvement and solving real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="bg-portfolio-brown hover:bg-portfolio-dark-brown text-white px-6 py-3 rounded-md transition-all flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-portfolio-brown text-portfolio-brown hover:bg-portfolio-brown hover:text-white px-6 py-2.5 rounded-md transition-all">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-portfolio-cream shadow-xl animate-fade-in">
              <img src="/lovable-uploads/fa546229-28b5-416b-b766-08a5592d4d4b.png" alt="Annabhemoju Saritha" className="w-full h-full object-cover" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="bg-white section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">About Me</h2>
            <p className="text-lg text-portfolio-gray mb-8">
              I'm an MBA graduate specializing in Business Analytics with a solid foundation in Human Resources. 
              My unique blend of analytical skills and people management expertise allows me to approach 
              business challenges with a comprehensive perspective. I'm passionate about leveraging data 
              to drive meaningful business improvements and innovation.
            </p>
            <Link to="/about" className="text-portfolio-brown hover:text-portfolio-dark-brown inline-flex items-center gap-2 font-medium">
              Read More About Me <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-portfolio-beige section">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Healthcare Analytics Project */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-portfolio-light-brown/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Healthcare Analytics Project" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Healthcare Analytics</h3>
                <p className="text-portfolio-gray mb-4">
                  Analysis of patient data from Neelima Hospitals to identify trends and improve operations.
                </p>
                <Link to="/projects" className="text-portfolio-brown hover:text-portfolio-dark-brown inline-flex items-center gap-2">
                  View Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Social Media Analytics Project */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-portfolio-light-brown/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Social Media Analytics Project" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Social Media Analytics</h3>
                <p className="text-portfolio-gray mb-4">
                  Evaluation of social media campaign effectiveness for consumer goods companies.
                </p>
                <Link to="/projects" className="text-portfolio-brown hover:text-portfolio-dark-brown inline-flex items-center gap-2">
                  View Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Oil Price Impact Project */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-portfolio-light-brown/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Oil Price Impact Project" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Oil Price Impact on GDP</h3>
                <p className="text-portfolio-gray mb-4">
                  Analysis of 25 years of data to study oil price effects on macroeconomic indicators.
                </p>
                <Link to="/projects" className="text-portfolio-brown hover:text-portfolio-dark-brown inline-flex items-center gap-2">
                  View Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="bg-portfolio-brown hover:bg-portfolio-dark-brown text-white px-6 py-3 rounded-md transition-all inline-flex items-center gap-2">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Highlight Section */}
      <section className="bg-white section">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-dark-brown">Technical Skills</h3>
              <div className="space-y-4">
                {['Excel', 'Python', 'SQL', 'Power BI', 'Tableau', 'MS Word', 'PowerPoint'].map(skill => <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-portfolio-brown"></div>
                    <span className="text-portfolio-gray">{skill}</span>
                  </div>)}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-dark-brown">Soft Skills</h3>
              <div className="space-y-4">
                {['Communication', 'Teamwork', 'Leadership', 'Analytical Thinking', 'Problem Solving', 'Time Management', 'Adaptability'].map(skill => <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-portfolio-brown"></div>
                    <span className="text-portfolio-gray">{skill}</span>
                  </div>)}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/skills" className="text-portfolio-brown hover:text-portfolio-dark-brown inline-flex items-center gap-2 font-medium">
              View All Skills <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-portfolio-brown text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Interested in discussing how my skills and expertise could benefit your organization? 
            Let's start a conversation about potential opportunities.
          </p>
          <Link to="/contact" className="bg-white text-portfolio-brown hover:bg-portfolio-cream hover:text-portfolio-dark-brown px-8 py-3 rounded-md transition-all inline-flex items-center gap-2 font-medium">
            Contact Me <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>;
};
export default Home;
