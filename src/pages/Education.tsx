
import React from 'react';
import { GraduationCap, Book, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      period: "2023 - 2025",
      degree: "MBA in Business Analytics",
      institution: "Anurag University Hyderabad",
      score: "CGPA 9.1",
      description: "Pursuing a specialized MBA program focused on business analytics, developing expertise in data analysis, visualization, and business intelligence tools.",
      icon: GraduationCap,
      color: "bg-portfolio-brown"
    },
    {
      period: "2020 - 2023",
      degree: "BBA with HR Specialization",
      institution: "SRI Sai Degree and PG College Hyderabad",
      score: "CGPA 8.88",
      description: "Completed Bachelor of Business Administration with a specialization in Human Resources, developing a strong foundation in organizational behavior and people management.",
      icon: Award,
      color: "bg-portfolio-light-brown"
    },
    {
      period: "2018 - 2020",
      degree: "Intermediate MPC",
      institution: "Sri Chaintanya Junior College Hyderabad",
      score: "84.5%",
      description: "Completed Intermediate education with Mathematics, Physics, and Chemistry as core subjects, developing strong analytical and problem-solving skills.",
      icon: Book,
      color: "bg-portfolio-dark-brown"
    },
    {
      period: "2017 - 2018",
      degree: "10th CBSE",
      institution: "Sri Prakash Residential School",
      score: "77%",
      description: "Completed secondary education with a well-rounded curriculum, establishing a strong academic foundation for further studies.",
      icon: Book,
      color: "bg-portfolio-dark-brown/70"
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-portfolio-beige py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">My Education</h1>
          <p className="text-lg text-portfolio-gray max-w-3xl mx-auto text-center">
            A comprehensive overview of my academic qualifications and learning journey.
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                <div className="md:text-right">
                  <span className="inline-block md:hidden text-sm font-medium text-portfolio-brown">{item.period}</span>
                  <h3 className="font-bold text-2xl text-portfolio-dark-brown hidden md:block">{item.period}</h3>
                </div>
                
                <div className="col-span-3 flex gap-6">
                  <div className="hidden md:flex mt-1">
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon className="text-white" size={20} />
                    </div>
                  </div>
                  
                  <div className="bg-portfolio-beige/50 rounded-lg p-6 shadow-sm w-full">
                    <div className="flex md:hidden gap-3 mb-3 items-center">
                      <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                        <item.icon className="text-white" size={18} />
                      </div>
                      <h3 className="font-bold text-xl text-portfolio-dark-brown md:hidden">{item.period}</h3>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-portfolio-dark-brown">{item.degree}</h3>
                    <p className="text-portfolio-brown font-medium mb-1">{item.institution}</p>
                    <p className="text-portfolio-gray mb-4">Score: {item.score}</p>
                    <p className="text-portfolio-gray">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-16 bg-portfolio-beige">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Academic Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-portfolio-dark-brown">Consistent Academic Excellence</h3>
              <p className="text-portfolio-gray">
                Maintained a strong academic record throughout my educational journey, consistently scoring above average in both undergraduate and postgraduate studies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-portfolio-dark-brown">Top Performer in Analytics</h3>
              <p className="text-portfolio-gray">
                Recognized as a top performer in various analytics and data visualization courses during my MBA program, demonstrating exceptional analytical abilities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-portfolio-dark-brown">Project Excellence</h3>
              <p className="text-portfolio-gray">
                Received commendation for project work in data analysis and business intelligence, showcasing practical application of theoretical knowledge.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-portfolio-dark-brown">Continuous Learner</h3>
              <p className="text-portfolio-gray">
                Actively pursue additional learning opportunities beyond the curriculum, including workshops, webinars, and self-paced courses to enhance my skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Philosophy */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text">My Learning Philosophy</h2>
            <p className="text-lg text-portfolio-gray">
              Education is not just about degrees and certifications, but a continuous journey of growth and improvement.
            </p>
          </div>
          
          <div className="text-portfolio-gray space-y-6">
            <p>
              I believe that education extends far beyond the classroom. My approach to learning combines structured academic education with practical application and continuous self-improvement. Throughout my educational journey, I've focused not just on acquiring knowledge but on developing the skills to apply that knowledge effectively in real-world scenarios.
            </p>
            
            <p>
              In the rapidly evolving field of business analytics, staying current is essential. I regularly engage with the latest research, tools, and methodologies through independent study, online courses, and professional networks. This commitment to continuous learning ensures that my skills remain relevant and valuable in a competitive marketplace.
            </p>
            
            <p>
              Looking ahead, I plan to further enhance my expertise through specialized certifications and potentially pursue additional advanced education in specific areas of business analytics. My goal is to build a comprehensive and versatile skill set that will enable me to tackle complex business challenges with confidence and creativity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
