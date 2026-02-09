import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";


function Navbar() {
  const [active, setActive] = useState("home");
  

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    active === id
      ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
      : "hover:text-cyan-400 transition";

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50">
      <ul className="flex justify-center gap-8 py-4 text-slate-200">
        <li><a href="#home" className={linkClass("home")}>Home</a></li>
        <li><a href="#about" className={linkClass("about")}>About</a></li>
        <li><a href="#skills" className={linkClass("skills")}>Skills</a></li>
        <li><a href="#projects" className={linkClass("projects")}>Projects</a></li>
        <li><a href="#experience" className={linkClass("experience")}>Experience</a></li>
        <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}


/* ---------- MAIN APP ---------- */
export default function App() {

  // 🔹 Typing animation state (RIGHT → LEFT)
  const fullText = "Hi, I’m Atisha";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = fullText.length;

    const interval = setInterval(() => {
      setText(fullText.slice(i));
      i--;
      if (i < 0) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n1csi7t",
        "template_v4z6wx7",
         form.current,
         "BTX-X85t0ZfbVRSug"
      )
      .then(
        () => {
           alert("Message sent successfully!");
           form.current.reset();
         },
         (error) => {
           alert("Failed to send message");
           console.error(error);
         }
      );
  };

  return (
    <>
      <Navbar />

      <div className="pt-16 min-h-screen bg-slate-950 text-white">
    
        {/* ---------- HERO ---------- */}
        <section
         id="home"
         className="relative h-screen flex items-center justify-center bg-center bg-cover"
         style={{ backgroundImage: "url('/hero bg.jpg')" }}
        >
         {/* Dark Overlay */}
         <div className="absolute inset-0 bg-black/70"></div>
         {/* Content */}
         <div className="relative z-10 flex flex-col items-center text-center px-6">
          <img
            src="/mine.jpg"
            alt="Atisha"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-400 shadow-xl mb-6"
          />
           {/* Typing Heading */}
           <h1
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ direction: "rtl" }}
           >
            <span className="text-yellow-400">{text}</span>
            <span className="animate-pulse">|</span>
          </h1>

           {/* Subtitle */}
           <p className="mt-4 text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
             Undergraduate Student @ BTECH-CSE Department,
           </p>

           <p className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
             Galgotias University
           </p>

           {/* Resume Button */}
           <a
            href="/RESUME.pdf"
            target="_blank"
            className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
           >
            View My Resume
           </a>

          </div>
        </section>
        

        {/* ---------- ABOUT ---------- */}
        <section 
          id="about" 
          className="relative py-32 px-6 bg-center bg-cover mb-32"
          style={{ backgroundImage: "url('/about bg.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="relative max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h2>
            <p className="text-slate-300 leading-relaxed">
              I am a Computer Science Engineering student passionate about web
              development and software engineering. I enjoy building responsive,
              user-friendly applications and continuously improving my skills.  I’ve gained hands-on experience through real projects.

             <p>Beyond coding, I enjoy photography, crafting social media content, and diving into new technologies. My goal? Build meaningful digital solutions that make life simpler and better.</p>


            </p>
          </div>
        </section>
        {/* ---------- SKILLS ---------- */}
        <section id="skills" className="px-6 py-24 max-w-5xl mx-auto mt-24">
  
          {/* Title */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
               Skills & Technologies
            </h2>
            <p className="text-slate-400 mt-3">
              Tools and technologies I work with to build modern applications
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
              HTML • CSS • JavaScript 
            </div>

            <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
              React.js • Tailwind CSS • Node.js • Express.js
            </div>

            <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
              C++ • Java • Python
            </div>

            <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
              Data Structures & Algorithms
            </div>

            <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
              Git • GitHub • VS Code
            </div>

            <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
              AWS Cloud Fundamentals
            </div>
          </div>
        {/* ---------- PROJECTS ---------- */}
        <section
          id="projects"
           className="relative px-6 py-32 mt-32 bg-center bg-cover"
           style={{ backgroundImage: "url('/project bg.webp')" }}
        >
           

           {/* Content */}
           <div className="relative z-10"></div>
             {/* Title */}
             <div className="text-center mb-14">
               <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
                 Projects
               </h2>
               <p className="text-slate-400 mt-3">
                 Some of the projects I’ve built to apply my skills
               </p>
             </div>

             {/* Project Cards */}
             <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

               {/* Project 1 */}
               <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 transition shadow-md">
                 <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                    Portfolio Website
                 </h3>
                 <p className="text-slate-400 mb-4">
                   A modern, responsive personal portfolio website built using React and
                   Tailwind CSS. Includes smooth scrolling, animations, and a clean
                   dark-themed UI.
                 </p>
                 <div className="flex gap-4 text-sm">
                   <span className="bg-slate-700 px-3 py-1 rounded-full">React</span>
                   <span className="bg-slate-700 px-3 py-1 rounded-full">Tailwind</span>
                 </div>
               </div>

               {/* Project 2 */}
               <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 transition shadow-md">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                    Interactive Calculator
                 </h3>
                 <p className="text-slate-400 mb-4">
                   Built a dynamic calculator using JavaScript for 
                   real time computations.
                   Implemented error handling and responsive UI.
                 </p>
                 <div className="flex gap-4 text-sm">
                    <span className="bg-slate-700 px-3 py-1 rounded-full">JavaScript</span>
                    <span className="bg-slate-700 px-3 py-1 rounded-full">HTML</span>
                    <span className="bg-slate-700 px-3 py-1 rounded-full">CSS</span>
                    <span className="bg-slate-700 px-3 py-1 rounded-full">DOM Manipulation</span>
                 </div>
               </div>

               {/* Project 3 */}
               <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 transition shadow-md">
                 <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                   Expense Tracker Web App
                 </h3>
                 <p className="text-slate-400 mb-4">
                   Developed full stack MERN application for tracking expenses.
                   Implemented user authentication and MongoDB integration.
                 </p>
                 <div className="flex gap-4 text-sm">
                   <span className="bg-slate-700 px-3 py-1 rounded-full">React</span>
                   <span className="bg-slate-700 px-3 py-1 rounded-full">Node.js</span>
                   <span className="bg-slate-700 px-3 py-1 rounded-full">Express.js</span>
                   <span className="bg-slate-700 px-3 py-1 rounded-full">MongoDB</span>
                 </div>
               </div>

               {/* Project 4 */}
               <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 transition shadow-md">
                 <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                   Android App (Internship Project)
                 </h3>
                 <p className="text-slate-400 mb-4">
                   Worked on Android application development tasks during an AICTE-supported
                   internship, gaining hands-on experience with mobile app workflows and
                   collaborative development.
                 </p>
                 <div className="flex gap-4 text-sm">
                   <span className="bg-slate-700 px-3 py-1 rounded-full">Android</span>
                   <span className="bg-slate-700 px-3 py-1 rounded-full">Java</span>
                 </div>
               </div>
               {/* Project 5 */}
               <div className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 transition shadow-md">
                 <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                   Blog Web Application
                 </h3>
                 <p className="text-slate-400 mb-4">
                   Developed a full stack blog platform allowing users to create,edit and 
                   delete blog posts with secure user authentication.
                   Implemented database integration to store and manage blog content
                   efficiently.
                 </p>
                 <div className="flex gap-4 text-sm">
                   <span className="bg-slate-700 px-3 py-1 rounded-full">React</span>
                   <span className="bg-slate-700 px-3 py-1 rounded-full">Node.js</span>
                   <span className="bg-slate-700 px-3 py-1 rounded-full">Express.js</span>
                   <span className="bg-slate-700 px-3 py-1 rounded-full">MongoDB</span>
                 </div>
               </div>

              </div>
        </section>




        </section>
        {/* ---------- EXPERIENCE ---------- */}
        <section
          id="experience"
          className="px-6 py-24 max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
               Experience
            </h2>
            <p className="text-slate-400 mt-3">
              My professional and extracurricular journey
            </p>
          </div>

           {/* Experience Items */}
           <div className="space-y-10">

           {/* Vault of Codes */}
           <div className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition">
             <h3 className="text-xl font-semibold">
                Web Development Intern – Vault of Codes
             </h3>
             <p className="text-slate-400 mt-3">
               Worked on building responsive UI components using HTML, CSS, and
               JavaScript. Contributed to frontend logic, debugging, and improving
               user experience while collaborating on real-world web development
               tasks in a professional environment.
             </p>
           </div>

           {/* AICTE Android Internship */}
           <div className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition">
             <h3 className="text-xl font-semibold">
               Android Developer Intern – AICTE
             </h3>
             <p className="text-slate-400 mt-3">
               Participated in an AICTE-supported Android development internship,
               gaining hands-on exposure to mobile application development concepts,
               project workflows, and collaborative virtual development practices.
             </p>
           </div>

           {/* E-Cell */}
           <div className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition">
             <h3 className="text-xl font-semibold">
               Core Member – Entrepreneurship Cell (E-Cell)
             </h3>
             <p className="text-slate-400 mt-3">
               Actively involved in organizing events, workshops, and entrepreneurship
               initiatives at the college level. Collaborated with team members to
               promote innovation, leadership, and startup culture among students.
             </p>
           </div>

          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section
          id="contact"
          className="relative py-32 px-6 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/contact photo.jpg')" }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content Box */}
          <div className="relative max-w-3xl mx-auto bg-slate-900/90 backdrop-blur rounded-2xl p-10 text-white shadow-2xl">
    
            <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
              Contact Me
            </h2>

            <p className="text-center text-slate-300 mb-10">
              Let’s turn conversations into collaborations — I’m just a message away!
            </p>
            {/* FORM */}
            <form 
               ref={form}
               onSubmit={sendEmail}
               className="flex flex-col gap-6"
             >
              
              {/* Name */}
              <div>
               <label className="block mb-2 text-sm text-slate-300">
                 Your Name *
               </label>
               <input
                 type="text"
                 name="name"
                 required
                 placeholder="Enter your name"
                 className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Your Email *
                </label>
                <input
                 type="email"
                 name="email"
                 required
                 placeholder="Enter your email"
                 className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                   Your Message *
                </label>
                <textarea
                   name="message"
                   rows="5"
                   required
                   placeholder="Write your message..."
                   className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>
       </section>
       {/* ---------- FOOTER ---------- */}
       <footer className="bg-slate-950 border-t border-slate-800 py-12">
         <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">

           {/* Contact Info */}
           <div className="space-y-3 mb-8">
             <p className="flex justify-center items-center gap-2">
               <Mail size={18} />
               <a
                 href="mailto:atishasinha10@gmail.com"
                 className="hover:text-cyan-400 transition"
               >
                 atishasinha10@gmail.com
               </a>
             </p>

             <p className="flex justify-center items-center gap-2">
               <Phone size={18} />
               <span className="hover:text-cyan-400 transition">
                  +91-8539800724
               </span>
             </p>
           </div>

           {/* Social Icons */}
           <div className="flex justify-center gap-10 mb-8">
             <a
               href="https://github.com/Atisha85"
               target="_blank"
               rel="noopener noreferrer"
               className="text-slate-400 hover:text-cyan-400 transition transform hover:scale-110"
               aria-label="GitHub"
             >
               <Github size={28} />
             </a>

             <a
               href="https://www.linkedin.com/in/atisha-236261357/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-slate-400 hover:text-cyan-400 transition transform hover:scale-110"
               aria-label="LinkedIn"
             >
               <Linkedin size={28} />
             </a>
           </div>

           {/* Copyright */}
           <p className="text-sm text-slate-500">
              © 2025 Atisha. All rights reserved.
           </p>

          </div>
       </footer>

        

        
      </div>
    </>


      
    
  );
}
