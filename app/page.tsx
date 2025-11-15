
"use client";

import EditableField from "@/components/ContentEditable";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8 mt-8 space-y-12 ">

      {/* Header */}
      <header className="w-full max-w-4xl flex flex-col items-center space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-800">issah1554</h1>
        <p className="text-lg text-gray-600 text-center">
          Welcome to issah1554 - your personal hub for projects, learning, and more.
        </p>
        <nav className="flex space-x-6 mt-4">
          <a href="#about" className="text-gray-700 hover:text-primary transition">About</a>
          <a href="#projects" className="text-gray-700 hover:text-primary transition">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="w-full max-w-4xl bg-white rounded-lg shadow p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About</h2>
        <p className="text-gray-700">
          <EditableField placeholder="Name" validate={(val) => val.includes("@")} value="@IssaH" /> is a personal platform for tracking projects, sharing knowledge,
          and connecting with like-minded enthusiasts. Explore projects and updates below.
        </p>
      </section>

      

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-accent text-white p-6 rounded-lg shadow-lg hover:scale-102 hover:shadow-2xl transform transition cursor-pointer">
          <h3 className="text-xl font-semibold">Project One</h3>
          <p className="mt-2 text-gray-100">A brief description of project one.</p>
        </div>
        <div className="bg-success text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Project Two</h3>
          <p className="mt-2 text-gray-100">A brief description of project two.</p>
        </div>
        <div className="bg-secondary text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Project Three</h3>
          <p className="mt-2 text-gray-100">A brief description of project three.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl bg-white rounded-lg shadow p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-accent focus:text-accent text-neutral-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-accent focus:text-accent text-neutral-500"
          />
          <textarea
            placeholder="Message"
            className="border border-gray-300 rounded-lg p-3 focus:outline-accent focus:text-accent "
            rows={4}
          />
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition self-end">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} issah1554. All rights reserved.
      </footer>

    </div>
  );
}
