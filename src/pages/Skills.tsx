
import React from 'react';
import { BarChart, Briefcase, PieChart, Award, GraduationCap, Certificate } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = [
    { name: "Excel", proficiency: 90, icon: "📊" },
    { name: "Python", proficiency: 85, icon: "🐍" },
    { name: "SQL", proficiency: 80, icon: "🗃️" },
    { name: "Power BI", proficiency: 85, icon: "📈" },
    { name: "Tableau", proficiency: 80, icon: "📊" },
    { name: "MS Word", proficiency: 95, icon: "📝" },
    { name: "PowerPoint", proficiency: 90, icon: "📢" }
  ];

  const softSkills = [
    { name: "Communication", description: "Ability to convey complex analytical insights in clear, actionable terms to both technical and non-technical stakeholders." },
    { name: "Teamwork", description: "Experience collaborating in diverse teams to achieve project goals, contributing analytical expertise while respecting other perspectives." },
    { name: "Leadership", description: "Capacity to guide teams through data-driven projects, ensuring alignment with objectives and fostering a collaborative environment." },
    { name: "Analytical Thinking", description: "Strong ability to approach problems systematically, breaking down complex issues into manageable components for effective analysis." },
    { name: "Problem Solving", description: "Skilled at identifying innovative solutions to business challenges through data analysis and creative thinking." },
    { name: "Time Management", description: "Proficient at prioritizing tasks and managing multiple projects efficiently to meet deadlines without compromising quality." },
    { name: "Adaptability", description: "Quickly adjust to changing requirements and new tools, maintaining productivity in dynamic environments." }
  ];

  const certifications = [
    {
      title: "Data Analytics with Python",
      issuer: "IBM",
      date: "December 2023",
      description: "Comprehensive course covering data manipulation, analysis, and visualization using Python libraries including Pandas, NumPy, and Matplotlib.",
      icon: <Certificate className="text-portfolio-brown" size={24} />,
      badge: "Advanced"
    },
    {
      title: "Power BI Desktop for Business Intelligence",
      issuer: "Microsoft",
      date: "March 2024",
      description: "Advanced techniques for creating interactive dashboards and business intelligence solutions using DAX functions and data modeling.",
      icon: <Award className="text-portfolio-brown" size={24} />,
      badge: "Professional"
    },
    {
      title: "SQL for Data Analysis",
      issuer: "Udacity",
      date: "January 2024",
      description: "Skills for querying databases, joining tables, and performing advanced SQL operations for analytics and reporting.",
      icon: <GraduationCap className="text-portfolio-brown" size={24} />,
      badge: "Intermediate"
    },
    {
      title: "Excel VBA and Macros",
      issuer: "Coursera",
      date: "November 2023",
      description: "Creating automated workflows and custom functions using Visual Basic for Applications in Microsoft Excel.",
      icon: <Certificate className="text-portfolio-brown" size={24} />,
      badge: "Intermediate"
    },
    {
      title: "HR Analytics: Using Data for Better Hiring Decisions",
      issuer: "LinkedIn Learning",
      date: "April 2024",
      description: "Leveraging data analytics techniques to improve recruitment processes and talent acquisition strategies.",
      icon: <Award className="text-portfolio-brown" size={24} />,
      badge: "Specialized"
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-portfolio-beige py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">My Skills</h1>
          <p className="text-lg text-portfolio-gray max-w-3xl mx-auto text-center">
            A comprehensive overview of my technical expertise and soft skills that drive success in business analytics.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center gap-3 justify-center mb-12">
            <BarChart size={24} className="text-portfolio-brown" />
            <h2 className="text-3xl font-bold gradient-text">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {technicalSkills.slice(0, 4).map((skill) => (
                <div key={skill.name} className="bg-portfolio-beige/50 p-6 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3 className="font-semibold text-lg text-portfolio-dark-brown">{skill.name}</h3>
                    </div>
                    <span className="text-portfolio-brown font-medium">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-portfolio-beige rounded-full h-2.5">
                    <div 
                      className="bg-portfolio-brown h-2.5 rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {technicalSkills.slice(4).map((skill) => (
                <div key={skill.name} className="bg-portfolio-beige/50 p-6 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3 className="font-semibold text-lg text-portfolio-dark-brown">{skill.name}</h3>
                    </div>
                    <span className="text-portfolio-brown font-medium">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-portfolio-beige rounded-full h-2.5">
                    <div 
                      className="bg-portfolio-brown h-2.5 rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-portfolio-beige/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-dark-brown">Additional Technical Knowledge</h3>
            <p className="text-portfolio-gray mb-4">
              Beyond the core technical skills listed above, I also have working knowledge in:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Data Visualization", "ETL Processes", "Statistical Analysis", "Dashboard Design", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Modeling"].map((skill) => (
                <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-portfolio-dark-brown">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 bg-portfolio-beige">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center gap-3 justify-center mb-12">
            <Briefcase size={24} className="text-portfolio-brown" />
            <h2 className="text-3xl font-bold gradient-text">Soft Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-portfolio-dark-brown">{skill.name}</h3>
                <p className="text-portfolio-gray">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications - Enhanced Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center gap-3 justify-center mb-12">
            <PieChart size={24} className="text-portfolio-brown" />
            <h2 className="text-3xl font-bold gradient-text">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-portfolio-beige/30 p-6 rounded-lg border border-portfolio-brown/20 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-portfolio-brown/10 w-16 h-16 rounded-full flex items-center justify-center">
                    {cert.icon}
                  </div>
                  <Badge variant="outline" className="bg-portfolio-brown/5 text-portfolio-dark-brown border-portfolio-brown/20">
                    {cert.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-portfolio-dark-brown">{cert.title}</h3>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-portfolio-brown font-medium">{cert.issuer}</p>
                  <p className="text-xs text-portfolio-gray">{cert.date}</p>
                </div>
                <p className="text-portfolio-gray">{cert.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-portfolio-gray italic">
              * Continuously expanding my skills through additional certifications and courses in business analytics and data science.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Application */}
      <section className="py-16 bg-portfolio-beige">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Applying My Skills</h2>
          
          <p className="text-portfolio-gray mb-8 text-center">
            My unique combination of technical and soft skills enables me to approach business challenges from multiple perspectives, 
            ensuring comprehensive analysis and effective solutions.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-dark-brown">My Analytical Workflow</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-brown flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-portfolio-dark-brown">Problem Definition</h4>
                  <p className="text-portfolio-gray">I begin by clearly defining the business problem, using my communication skills to ensure alignment with stakeholders' needs.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-brown flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-portfolio-dark-brown">Data Collection & Processing</h4>
                  <p className="text-portfolio-gray">Using SQL and Python, I gather and clean relevant data, ensuring accuracy and completeness for analysis.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-brown flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-portfolio-dark-brown">Analysis & Insight Generation</h4>
                  <p className="text-portfolio-gray">Employing analytical thinking and technical tools like Excel and Python, I identify patterns and extract meaningful insights from the data.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-brown flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-portfolio-dark-brown">Visualization & Communication</h4>
                  <p className="text-portfolio-gray">Using Power BI and Tableau, I create intuitive visualizations that effectively communicate findings to stakeholders.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-brown flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-portfolio-dark-brown">Solution Implementation</h4>
                  <p className="text-portfolio-gray">Drawing on leadership and teamwork skills, I collaborate with stakeholders to implement data-driven solutions and monitor outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
