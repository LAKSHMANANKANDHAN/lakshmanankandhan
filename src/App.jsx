import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "./assets/hero1.jpeg";
import hero2 from "./assets/hero2.jpg";
import hero3 from "./assets/hero3.jpg";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaHeart,
  FaStar,
} from "react-icons/fa";

import { projects, services, videos } from "./data";

export default function App() {

  // PORTFOLIO STATS
  const [likes, setLikes] = useState(100);
  const [rating] = useState(4.5);

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_ho0pu5l",
      "template_a2shrfm",
      e.target,
      "ddxbrnOHiXxSYYfRT"
    )

    .then(() => {

      alert("Message Sent Successfully ✅");
      e.target.reset();

    })

    .catch((error) => {

      console.log(error);
      alert("Failed to Send Message ❌");

    });

  };

  return (

    <div className="hero-bg min-h-screen text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-[#07111fcc] backdrop-blur-xl border-b border-white/5 px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold gradient-text">
          LAKSHMANAN
        </h1>

        <div className="hidden md:flex gap-8">

          {[
            "Home",
            "Projects",
            "Videos",
            "Services",
            "Contact",
          ].map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {item}
            </a>

          ))}

        </div>

      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 pt-24"
      >

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >

          <span className="bg-purple-600 px-4 py-2 rounded-full text-sm">
            Available For Freelance Work
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">

            Hi, I'm <br />

            <span className="gradient-text">
              Lakshmanan Kandhan
            </span>

          </h1>

          {/* ROLES */}
          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "Software Engineer",
              "Web Developer",
              "Freelance Video Editor",
              "Digital Marketer",
              "IoT Developer",
            ].map((role) => (

              <span
                key={role}
                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm"
              >
                {role}
              </span>

            ))}

          </div>

          <p className="text-gray-300 mt-6 max-w-xl leading-8">

            Passionate software engineer and creative freelancer
            specializing in website development, video editing,
            app development, digital marketing, and IoT projects.

          </p>

          {/* PORTFOLIO FEEDBACK */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* LIKES */}
            <div className="glass px-5 py-4 rounded-2xl flex items-center gap-3">

              <FaHeart className="text-pink-500 text-2xl" />

              <div>
                <h3 className="font-bold text-lg">
                  {likes}+
                </h3>

                <p className="text-sm text-gray-400">
                  Portfolio Likes
                </p>
              </div>

            </div>

            {/* RATING */}
            <div className="glass px-5 py-4 rounded-2xl flex items-center gap-3">

              <FaStar className="text-yellow-400 text-2xl" />

              <div>
                <h3 className="font-bold text-lg">
                  {rating}/5
                </h3>

                <p className="text-sm text-gray-400">
                  Client Rating
                </p>
              </div>

            </div>

            {/* LIKE BUTTON */}
            <button
              onClick={() => setLikes(likes + 1)}
              className="px-6 py-4 rounded-2xl bg-pink-500 hover:scale-105 transition font-semibold"
            >
              ❤️ Like Portfolio
            </button>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8 flex-wrap">

            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              View Projects
            </a>

            {/* VIEW VIDEOS */}
            <a
              href="#videos"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:scale-105 transition"
            >
              View Videos
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/916382602668"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-green-500 hover:scale-105 transition"
            >
              WhatsApp
            </a>

            {/* RESUME */}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
            >
              Download Resume
            </a>

          </div>

        </motion.div>

       {/* RIGHT IMAGES */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="flex-1 flex justify-center mt-12 md:mt-0"
>

  <Swiper
    modules={[Autoplay]}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop={true}
    className="w-[280px] md:w-[420px]"
  >

    <SwiperSlide>
      <div className="w-full h-[500px] overflow-hidden rounded-3xl">
        <img
          src={hero1}
          alt="hero1"
          className="w-full h-full object-cover"
        />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="w-full h-[500px] overflow-hidden rounded-3xl">
        <img
          src={hero2}
          alt="hero2"
          className="w-full h-full object-cover"
        />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="w-full h-[500px] overflow-hidden rounded-3xl">
        <img
          src={hero3}
          alt="hero3"
          className="w-full h-full object-cover"
        />
      </div>
    </SwiperSlide>

  </Swiper>

</motion.div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 py-24">

        <h2 className="text-4xl font-bold gradient-text mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {projects.slice(0, 3).map((project, index) => (

            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="glass rounded-3xl overflow-hidden"
            >

              <img
                src={project.image}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="bg-purple-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* VIEW WEBSITE BUTTON */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
                >
                  View Website
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* VIDEOS */}
      <section id="videos" className="px-8 py-24">

        <h2 className="text-4xl font-bold gradient-text text-center mb-14">
          Video Editing Showcase
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20 justify-items-center">

  {videos.map((video) => (

    <div
      key={video.title}
      className="flex flex-col items-center gap-6"
    >

      <div className="w-[320px] md:w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.25)]">

        <iframe
          src={video.src}
          allow="autoplay"
          className="w-full h-full"
        />

      </div>

      <div className="text-center max-w-[320px] md:max-w-[360px]">

        <h3 className="text-xl font-semibold text-white">
          {video.title}
        </h3>

        <p className="text-gray-400 mt-2 text-sm leading-6">
          {video.desc}
        </p>

      </div>

    </div>

  ))}

</div>

      </section>

      {/* SERVICES */}
      <section id="services" className="px-8 py-24">

        <h2 className="text-4xl font-bold gradient-text text-center mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              key={index}
              className="glass p-8 rounded-3xl"
            >

              <h3 className="text-2xl font-bold">
                {service}
              </h3>

              <a
                href={`https://wa.me/916382602668?text=Hi%20Lakshmanan,%20I%20need%20${service}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block px-5 py-3 rounded-xl bg-purple-600 hover:scale-105 transition"
              >
                Get Service
              </a>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-24">

        <div className="glass rounded-3xl p-10">

          <h2 className="text-4xl font-bold gradient-text mb-10">
            Contact Me
          </h2>

          <form onSubmit={sendEmail} className="grid gap-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-black/40 border border-gray-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-black/40 border border-gray-700"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="p-4 rounded-xl bg-black/40 border border-gray-700"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              className="p-4 rounded-xl bg-black/40 border border-gray-700"
            />

            <button className="bg-gradient-to-r from-purple-600 to-cyan-400 py-4 rounded-xl font-bold">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-8 py-10 text-center">

        <h2 className="text-3xl font-bold gradient-text">
          LAKSHMANAN KANDHAN
        </h2>

        <div className="flex justify-center gap-6 text-2xl mt-6">

          <a
            href="https://www.instagram.com/_._ishaan_._95?igsh=b3FkNnR2N3A4NTB0"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/lakshmanan-kandhan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/LAKSHMANANKANDHAN"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:lakshmanankandhan8888@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 mt-6">
          © 2026 All Rights Reserved
        </p>

      </footer>

      {/* FLOATING SOCIALS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

        <a
          href="https://wa.me/916382602668"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 p-4 rounded-full text-3xl shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.instagram.com/_._ishaan_._95?igsh=b3FkNnR2N3A4NTB0"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 p-4 rounded-full text-3xl shadow-lg hover:scale-110 transition"
        >
          <FaInstagram />
        </a>

      </div>

    </div>

  );

}