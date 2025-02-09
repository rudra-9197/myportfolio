
'use client'
import { useState, useEffect } from 'react'
import { Card, CardContent } from "./card" 
import { Button } from "./button"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { Linkedin, Mail, GithubIcon, User, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const userimage = require("../Image/Image1.jpeg"); 

const sections = [
  'Home',
  'About Me',
  'Education',
  'Skills',
  'Experience',
  'Projects',
  'MyWorks'
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('Home')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case 'Home':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Welcome to My Portfolio</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm Rudraaradhya S., a Sr. Full Stack Developer with extensive experience in IT.
              My expertise spans both frontend and backend technologies, allowing me to bring
              innovative solutions to complex software challenges.
            </p>

            <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">Explore My Work</Button>
          </div>
        )
      case 'About Me':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            I am a passionate Full Stack Java Developer with 3 years of experience in building scalable and efficient applications. Currently working at TCS, I specialize in Java, Spring Boot, and Microservices, with a strong background in developing RESTful APIs, optimizing system performance, and enhancing application security.


           </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            My expertise extends to React.js, MySQL, Jenkins, and Agile methodologies, allowing me to create robust end-to-end solutions. I have contributed to high-impact banking projects, improving transaction throughput and system concurrency to handle high-volume operations seamlessly.

            </p>
            <p className="text-lg text-gray-600 leading-relaxed">I thrive in collaborative environments, continuously improving code quality and system efficiency. With a keen eye for problem-solving and performance optimization, I am always looking for new challenges to expand my technical skills and deliver high-quality software solution</p>
          </div>
        )
      case 'Education':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Education</h2>
          { /*<Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-purple-600">Master's in Earthquake Engineering</h3>
                <p className="text-lg text-gray-600">University of Visvesvaraya College of Engineering</p>
                <p className="text-sm text-gray-500">Graduated: [Year]</p>
              </CardContent>
        </Card> */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-purple-600">Bachelor's in Civil Engineering</h3>
                <p className="text-lg text-gray-600">University of Visvesvaraya College of Engineering</p>
                <p className="text-sm text-gray-500">Graduated: [2018]</p>
                <p className="text-sm text-gray-500">Achieved: First Class</p>
              </CardContent>
            </Card>
          </div>
        )
      case 'Certifications':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Java Developer Certification - Oracle', 'React JS Certification - Meta', 'Spring Boot Certification - Pivotal', 'AWS Certified Developer - Amazon Web Services'].map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-purple-600">{cert}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      case 'Skills':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Backend</h3>
                <div className="space-y-4">
                  {['Java', 'Spring', 'Spring Boot'].map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{width: `${90 - index * 5}%`}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Frontend</h3>
                <div className="space-y-4">
                  {['React JS', 'HTML5/CSS', 'JavaScript', 'Tailwind CSS'].map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-pink-500 h-2.5 rounded-full" style={{width: `${90 - index * 5}%`}}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Additional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'DB2', 'MongoDB', 'Eclipse', 'Swagger', 'Soap UI', 'Jenkins', 'RESTful APIs', 'Git' ,'Micro Services'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        )

    
      case 'Experience':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Experience</h2>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-purple-600">Sr. Java BackEnd Developer</h3>
                <p className="text-lg text-gray-600 ">Tata Consultancy Services (TCS) | [Jan 2022] - Present</p>
                <p className="text-lg text-gray-600 "> <span className='font-bold '>Project :</span> Global Banking Project</p>
                <p className="text-lg text-gray-600 mb-4"> <span className='font-bold '>  Cleint :</span>TJSB Thane Maharashtra, OP Bank Finland, GPP Thane Maharashtra</p>
            
  <ul className="list-disc pl-5 space-y-2 text-gray-600">
    <li>Developed and maintained <strong>Core Banking Solutions</strong>, enabling seamless customer transactions across multiple bank branches.</li>
    <li>Designed and implemented <strong>RESTful APIs</strong> using <strong>Spring Boot</strong> for <strong>ATM and UPI operations</strong> like deposits, withdrawals, and balance inquiries.</li>
    <li>Optimized application logic and <strong>database queries</strong>, increasing transaction throughput by <strong>92% (from 60 TPS to 115 TPS)</strong>.</li>
    <li>Improved <strong>system concurrency handling by 40%</strong> through efficient <strong>thread pooling, synchronization, and transaction management</strong>.</li>
    <li>Utilized <strong>SQL, MySQL, and DB2</strong> for data querying, indexing, and database performance optimization.</li>
    <li>Integrated <strong>SOAP web services</strong> for smooth communication between banking modules.</li>
    <li>Automated deployments using <strong>WinSCP and Jenkins</strong>, ensuring continuous integration and smooth releases.</li>
    <li>Conducted <strong>code reviews and peer reviews</strong>, enforcing <strong>best coding practices</strong> and maintaining code quality using <strong>Git and SonarQube</strong>.</li>
    <li>Resolved <strong>bugs and performance bottlenecks</strong>, enhancing <strong>system reliability, responsiveness, and user experience</strong>.</li>
    <li>Worked in an <strong>Agile environment</strong>, ensuring timely delivery of features and efficient <strong>defect tracking using TCS MasterCraft tools</strong>.</li>
    <li>Collaborated with <strong>cross-functional teams</strong> to build <strong>secure, scalable, and high-performance banking applications</strong>.</li>
</ul>

              </CardContent>
            </Card>
          </div>
        )
      case 'Projects':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-purple-600">Financial Transaction System</h3>
                  <p className="text-gray-600 mb-4">Backend Developer | TCS</p>
                  <p className="text-gray-600 mb-4">
                    Implemented a robust financial transaction system using ISO8583 protocol,
                    ensuring secure and efficient processing of banking transactions.
                  </p>
                  <p className="text-sm text-gray-500">
                    Tech Stack: Java, SpringBoot,RestAPI, Oracle DB
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-purple-600">Beauty Parlour Web App</h3>
                  <p className="text-gray-600 mb-4">Full Stack Developer | Personal Project </p>
                  <p className="text-gray-600 mb-4">
                    Developed a comprehensive web application for beauty parlour management,
                    streamlining appointment booking.
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Tech Stack: NodeJS, ReactJS, MangodB, ExpressJS
                  </p>

                  <p className="text-sm text-gray-500">
                    <a className= 'text-purple-600' href="https://linkedin.com">website Link</a>
                  </p>
                </CardContent>

              </Card>

            </div>
          </div>
        )
      case 'Contact':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Contact Me</h2>
            <form className="space-y-4">
              <Input placeholder="Your Name" required className="border-gray-300 focus:ring-purple-500 focus:border-purple-500" />
              <Input type="email" placeholder="Your Email" required className="border-gray-300 focus:ring-purple-500 focus:border-purple-500" />
              <Textarea placeholder="Your Message" rows={4} required className="border-gray-300 focus:ring-purple-500 focus:border-purple-500" />
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">Send Message</Button>
            </form>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin className="w-8 h-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <GithubIcon className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:rudraaradhya@example.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Mail className="w-8 h-8" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-8 overflow-hidden shadow-lg">
               <img className="w-40 h-40" src={userimage} ></img>
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold mb-2 text-gradient">Rudraaradhya S.</h1>
              <p className="text-xl text-gray-600 mb-4">Sr. Full Stack Developer</p>
              <div className="flex justify-center sm:justify-start space-x-4 mb-4">
                <a href="https://www.linkedin.com/in/rudra-aradhya-240181203/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://github.com/rudra-9197" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <GithubIcon className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="mailto:rudraradhya9197@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Mail className="w-6 h-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start text-gray-600">
                <Phone className="w-5 h-5 mr-2" />
                <span>+91 7760583831</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-xl p-4 mb-8">
          <nav className="flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <Button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`${
                  activeSection === section 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    :    'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors duration-200`}
              >
                {section}
              </Button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {mounted && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="w-full bg-white shadow-xl">
                <CardContent className="p-8">
                  {renderContent()}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}