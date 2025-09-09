import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <header className="bg-purple-700 text-white">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="text-lg">
            704-727-7800 | <a href="mailto:info@prepwright.com" className="hover:text-purple-200">info@prepwright.com</a>
          </div>
          <div className="text-2xl font-bold tracking-wider">Prep Wright</div>
        </div>
        <nav className="flex justify-center gap-8 py-4 text-lg">
          <a href="#about" className="hover:text-purple-200 transition-colors">About</a>
          <a href="#strategy" className="hover:text-purple-200 transition-colors">Strategy Classes</a>
          <a href="#tutoring" className="hover:text-purple-200 transition-colors">Private Tutoring</a>
          <a href="#tips" className="hover:text-purple-200 transition-colors">SAT/ACT Tips</a>
          <a href="#contact" className="hover:text-purple-200 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-400 text-white text-center py-16 px-8 rounded-b-3xl">
        <h1 className="text-5xl font-bold mb-6">PrepWright</h1>
        <p className="text-xl mb-4">Strategic Test Prep Assessment, Planning, and SAT / ACT Prep Coaching</p>
        <p className="text-lg mb-8 max-w-4xl mx-auto">
          PrepWright provides personalized, expert strategy sessions designed to help your family navigate both the high-stakes SAT and ACT tests and the test preparation process.
        </p>
        <a href="#contact">
          <button className="bg-purple-300 text-purple-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-purple-700 transition-colors shadow-lg">
            Contact Us To Get Started!
          </button>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto my-8 bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Welcome</h2>
        <p className="text-lg mb-4">Dear Parent,</p>
        <p className="text-lg mb-4">
          Thank you for your inquiry. Below I have provided some links to pages with general information about myself and my Private Tutoring services, including details about Private Tutoring Packages and Pricing. Please know that I would be delighted to discuss any of these items or to address any additional concerns.
        </p>
        <p className="text-lg mb-6">
          Warm regards,<br />
          <strong>Heidi Wright, MA</strong><br />
          <a href="mailto:info@prepwright.com" className="text-purple-700">info@prepwright.com</a><br />
          704-727-7800
        </p>
        
        <h2 className="text-3xl font-bold text-purple-700 mb-6">What is my background?</h2>
        <p className="text-lg mb-4">
          I am originally from Honolulu, Hawaii, and lived in Colorado for a number of years before moving to Charlotte with my husband and two sons in 2006. I first got into the test preparation field right out of college when I taught for the Princeton Review, the national test prep company, and have worked as a private SAT and ACT coach for over fifteen years. I have a teaching background, with a B.A. in English and a master&apos;s degree in education, and have taught at both the middle school and high school levels.
        </p>
        <p className="text-lg mb-4">
          There is something about working with teenagers that has always appealed to me– perhaps it is the life stage they are in, almost grown-up, but not quite…
        </p>
        <p className="text-lg font-semibold mb-4">Heidi Wright, MA PrepWright</p>
        <p className="text-lg">
          One of the most valuable aspects of individual tutoring is the fact that I am able to tailor sessions to meet the student&apos;s individual needs.
        </p>
      </section>

      {/* Services Section */}
      <section id="strategy" className="max-w-5xl mx-auto my-8 bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">PrepWright Offers Your Student Help with SAT/ACT Test Prep</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-purple-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🌎</div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">Full Course Preparation</h3>
            <p className="text-base">
              Includes private, customized test preparation and practice of all major parts of either the SAT or the ACT; diagnostic testing; all materials and books; two 15-minute phone consultations with parents, as needed (along with unlimited shorter emails); and access to regular Saturday morning Office Hours for makeup sessions.
            </p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">Specific Subjects or Second Test Preparation</h3>
            <p className="text-base">
              If a student selects fewer than the full-course of 10 sessions, we will usually not be able to cover all parts of the SAT or ACT. However, we will work together to determine what major subject area on the student&apos;s upcoming test is the highest priority, and we will start there. As time permits, we will try also to do some review of other subject(s).
            </p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">SAT and ACT Strategy Classes</h3>
            <p className="text-base">
              PrepWright offers SAT and ACT strategy classes on occasion. If you are interested in being contacted when the next class is planned, be sure to let me know! If your school or organization is interested in hosting a class, please feel free to contact me to discuss the possibility of my teaching a test preparation class at your location.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="tips" className="max-w-5xl mx-auto my-8 bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Articles on SAT/ACT Test Prep and Private Tutoring</h2>
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Can students take the test more than once?</h3>
        <p className="text-lg mb-4">
          Many students do choose to take either the SAT or ACT (or, sometimes, both) a second time, but I always tell my students that no one would be happier than I if the first time gets the job done!
        </p>
        <a href="#" className="text-purple-400 font-semibold hover:text-purple-600">Read More</a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto my-8 bg-white rounded-3xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">How Can You Get Started?</h2>
        <p className="text-lg mb-6">
          Please contact us to discuss specifics about your student.<br />
          Email: <a href="mailto:info@prepwright.com" className="text-purple-700 font-semibold">info@PrepWright.com</a><br />
          Or call us at <span className="text-purple-700 font-semibold">704-727-7800</span>.
        </p>
        <a href="mailto:info@prepwright.com">
          <button className="bg-purple-300 text-purple-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 hover:text-white transition-colors shadow-lg">
            Contact Us!
          </button>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center py-6 rounded-t-3xl mt-8">
        <p className="text-lg">PrepWright | Copyright 2024 Prep Wright</p>
      </footer>
    </div>
  );
}
