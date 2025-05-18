
import React from 'react';
import { Activity, BarChart, LineChart, ExternalLink, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Analytics",
      subtitle: "Patient Data Analysis for Hospital Operations",
      description: "Analysis of patient data from Neelima Hospitals to identify trends, improve operations, and visualize KPIs using advanced analytics tools and techniques.",
      tools: ["Python (Jupyter)", "Power BI", "Tableau", "Excel", "Lucidchart"],
      outcomes: [
        "Comprehensive insights on patient revisit rates and demographics",
        "Dashboard visualization of operational efficiencies",
        "Strategic recommendations for resource allocation",
        "Identification of key performance indicators for ongoing monitoring"
      ],
      icon: Activity,
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Social Media Analytics",
      subtitle: "Campaign Effectiveness Evaluation for Consumer Goods",
      description: "Evaluation of social media campaign effectiveness for consumer goods companies using data from multiple platforms to derive actionable insights and strategic recommendations.",
      tools: ["Python", "Power BI", "Tableau", "Excel", "ETL techniques"],
      outcomes: [
        "Interactive dashboards showing campaign performance",
        "Identification of top-performing platforms",
        "Audience engagement trend analysis",
        "ROI factor analysis and optimization recommendations"
      ],
      icon: BarChart,
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Oil Price Impact on GDP",
      subtitle: "Macroeconomic Indicator Analysis",
      description: "Analysis of 25 years of data to study the influence of oil price fluctuations on macroeconomic indicators, with a focus on GDP, inflation, and trade deficits.",
      tools: ["Python (Pandas, NumPy, Matplotlib, Scikit-learn)", "Draw.io", "Lucidchart"],
      outcomes: [
        "Correlation analysis between oil prices and GDP",
        "Impact assessment on inflation and trade deficits",
        "Comprehensive data visualizations of trends",
        "Policy recommendations based on historical patterns"
      ],
      icon: LineChart,
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-portfolio-beige py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">My Projects</h1>
          <p className="text-lg text-portfolio-gray max-w-3xl mx-auto text-center">
            Explore my analytical work through these key projects that showcase my skills and approach to problem-solving.
          </p>
        </div>
      </section>

      {/* Projects Detail Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video bg-portfolio-beige rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: `${project.color}20` }}>
                    <project.icon size={16} className={`text-${project.color.split('-')[0]}-500`} />
                    <span className="text-portfolio-dark-brown font-medium">Project {index + 1}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-2 text-portfolio-dark-brown">{project.title}</h2>
                  <p className="text-lg text-portfolio-brown mb-4">{project.subtitle}</p>
                  
                  <p className="text-portfolio-gray mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-portfolio-dark-brown mb-2">Tools Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="bg-portfolio-beige px-3 py-1 rounded-full text-sm text-portfolio-dark-brown">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-portfolio-dark-brown mb-2">Key Outcomes:</h3>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight size={18} className="text-portfolio-brown mt-0.5 shrink-0" />
                          <span className="text-portfolio-gray">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="mt-8 inline-flex items-center gap-2 text-portfolio-brown hover:text-portfolio-dark-brown transition-colors">
                    View Project Details <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Methodology */}
      <section className="py-16 bg-portfolio-beige">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">My Analytical Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-portfolio-brown mb-6 flex items-center justify-center">
                <span className="text-white font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-dark-brown">Data Collection & Cleaning</h3>
              <p className="text-portfolio-gray">
                I begin each project with comprehensive data collection, ensuring all relevant information is gathered. 
                This is followed by thorough data cleaning and preprocessing to ensure accuracy and reliability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-portfolio-brown mb-6 flex items-center justify-center">
                <span className="text-white font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-dark-brown">Exploratory Analysis</h3>
              <p className="text-portfolio-gray">
                Next, I conduct exploratory data analysis to understand patterns, relationships, and anomalies in the data. 
                This step often reveals initial insights and helps determine the best analytical approaches.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-portfolio-brown mb-6 flex items-center justify-center">
                <span className="text-white font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-dark-brown">Advanced Analysis</h3>
              <p className="text-portfolio-gray">
                Using statistical methods and machine learning techniques where appropriate, I perform in-depth analysis to 
                extract meaningful insights and identify key trends relevant to the project objectives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-portfolio-brown mb-6 flex items-center justify-center">
                <span className="text-white font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-dark-brown">Visualization Design</h3>
              <p className="text-portfolio-gray">
                I create clear, intuitive visualizations that effectively communicate findings to both technical and non-technical 
                audiences, making complex data accessible and actionable.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-portfolio-brown mb-6 flex items-center justify-center">
                <span className="text-white font-bold">05</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-dark-brown">Strategic Recommendations</h3>
              <p className="text-portfolio-gray">
                Based on analytical findings, I develop practical recommendations that address the initial business questions 
                and provide actionable insights for strategic decision-making.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-portfolio-brown mb-6 flex items-center justify-center">
                <span className="text-white font-bold">06</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-portfolio-dark-brown">Implementation Support</h3>
              <p className="text-portfolio-gray">
                When needed, I provide ongoing support for implementing recommendations, including creating dashboards for 
                monitoring key metrics and adjusting strategies based on new data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
