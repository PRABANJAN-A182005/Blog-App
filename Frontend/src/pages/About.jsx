import React from 'react'
import { Link } from 'react-router-dom';


function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>

      <p className="text-gray-600 text-lg mb-6">
        Welcome to our blog — a space dedicated to sharing practical and
        easy-to-understand knowledge about modern web development.
      </p>

      <p className="text-gray-600 mb-6">
        We focus on building strong fundamentals in technologies like
        <span className="font-medium"> HTML, CSS, JavaScript, React, Node.js</span>,
        and backend concepts. Our goal is to help beginners, students, and
        aspiring developers learn how real-world applications are built.
      </p>

      <p className="text-gray-600 mb-8">
        Every article is written with clarity, real examples, and interview
        relevance in mind — whether you’re preparing for placements, building
        personal projects, or transitioning into a software development role.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">🚀 Our Mission</h3>
          <p className="text-gray-600">
            To simplify complex web development concepts and make learning
            practical, structured, and beginner-friendly.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">📚 What You’ll Learn</h3>
          <p className="text-gray-600">
            Core web fundamentals, React patterns, backend basics, APIs,
            project structure, and interview-focused explanations.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">💡 Who This Is For</h3>
          <p className="text-gray-600">
            Students, self-taught developers, and anyone looking to grow
            confidently in web development.
          </p>
        </div>
      </div>

      <Link to="/contact" className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
        Contact Us
      </Link>
    </section>


  )
}

export default About