
import React from 'react';
import { Book, User, Award } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Header Banner */}
      <section className="bg-portfolio-beige py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">About Me</h1>
          <p className="text-lg text-portfolio-gray max-w-3xl mx-auto text-center">
            Learn more about my journey, values, and passion for data analytics and business improvement.
          </p>
        </div>
      </section>

      {/* Personal Bio */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Annabhemoju Saritha" 
                className="w-full h-auto"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-portfolio-beige rounded-full mb-6">
                <User size={16} className="text-portfolio-brown" />
                <span className="text-portfolio-dark-brown font-medium">Personal Biography</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-portfolio-dark-brown">Annabhemoju Saritha</h2>
              
              <div className="space-y-4 text-portfolio-gray">
                <p>
                  I am a dedicated MBA student specializing in Business Analytics, currently studying at Anurag University, Hyderabad. 
                  My academic journey began with a BBA degree focused on Human Resources, providing me with a strong foundation in 
                  understanding organizational behavior and people management.
                </p>
                
                <p>
                  My passion lies in structured thinking and logical analysis. I believe in the power of data to transform businesses 
                  and drive meaningful improvements. This passion led me to pursue an MBA in Business Analytics, where I've developed 
                  expertise in utilizing various tools and techniques to extract actionable insights from complex datasets.
                </p>
                
                <p>
                  Coming from a family that values discipline and continuous learning, I've always been encouraged to pursue excellence 
                  in everything I do. These values have shaped my approach to both academic and professional endeavors, making me 
                  persistent in pursuing my goals and constantly seeking to expand my knowledge and skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Journey */}
      <section className="py-16 bg-portfolio-beige">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-portfolio-beige rounded-full mb-6">
                <Award size={16} className="text-portfolio-brown" />
                <span className="text-portfolio-dark-brown font-medium">My Values</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-portfolio-dark-brown">What I Stand For</h2>
              
              <div className="space-y-4 text-portfolio-gray">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-portfolio-brown/10 flex items-center justify-center shrink-0">
                    <span className="text-portfolio-brown font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-portfolio-dark-brown">Discipline</h3>
                    <p>I believe in the power of consistency and structured approach to achieve excellence in both academic and professional domains.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-portfolio-brown/10 flex items-center justify-center shrink-0">
                    <span className="text-portfolio-brown font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-portfolio-dark-brown">Continuous Learning</h3>
                    <p>I constantly seek to expand my knowledge and skills, staying updated with the latest trends and technologies in my field.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-portfolio-brown/10 flex items-center justify-center shrink-0">
                    <span className="text-portfolio-brown font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-portfolio-dark-brown">Data-Driven Decision Making</h3>
                    <p>I believe in the importance of basing decisions on concrete data and thorough analysis rather than intuition alone.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-portfolio-beige rounded-full mb-6">
                <Book size={16} className="text-portfolio-brown" />
                <span className="text-portfolio-dark-brown font-medium">My Journey</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-portfolio-dark-brown">Academic & Career Timeline</h2>
              
              <div className="relative border-l-2 border-portfolio-brown/30 pl-6 space-y-8 text-portfolio-gray">
                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-portfolio-brown"></div>
                  <div>
                    <p className="text-sm font-medium text-portfolio-brown">2023 - 2025</p>
                    <h3 className="font-semibold text-xl mb-1 text-portfolio-dark-brown">MBA in Business Analytics</h3>
                    <p>Anurag University, Hyderabad</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-portfolio-brown"></div>
                  <div>
                    <p className="text-sm font-medium text-portfolio-brown">2020 - 2023</p>
                    <h3 className="font-semibold text-xl mb-1 text-portfolio-dark-brown">BBA with HR Specialization</h3>
                    <p>SRI Sai Degree and PG College, Hyderabad</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-portfolio-brown"></div>
                  <div>
                    <p className="text-sm font-medium text-portfolio-brown">2018 - 2020</p>
                    <h3 className="font-semibold text-xl mb-1 text-portfolio-dark-brown">Intermediate MPC</h3>
                    <p>Sri Chaintanya Junior College, Hyderabad</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-portfolio-brown"></div>
                  <div>
                    <p className="text-sm font-medium text-portfolio-brown">2017 - 2018</p>
                    <h3 className="font-semibold text-xl mb-1 text-portfolio-dark-brown">10th CBSE</h3>
                    <p>Sri Prakash Residential School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Beyond Analytics</h2>
          
          <div className="text-portfolio-gray space-y-6">
            <p>
              While my academic and professional focus is on business analytics, I'm a well-rounded individual with diverse interests. 
              I enjoy keeping up with the latest research in data science and business technology, which helps me stay ahead in this 
              rapidly evolving field.
            </p>
            
            <p>
              In my free time, I enjoy exploring different analytical techniques and their applications in various business scenarios. 
              This curiosity-driven approach has enabled me to develop a unique perspective on problem-solving that combines technical 
              expertise with creative thinking.
            </p>
            
            <p>
              I am constantly looking for opportunities to apply my analytical skills to real-world challenges, believing that the 
              true value of knowledge lies in its practical application. My goal is to leverage my expertise in business analytics 
              to drive meaningful improvements in organizational performance and decision-making processes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
