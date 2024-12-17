import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../../assets/logo.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-lg">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-15 mr-2" /* Adjusted image size */
          />
          <h1 className="text-3xl font-bold text-primary-500 font-serif">
            Meals On Wheel
          </h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-primary-500 font-semibold hover:text-gray-700 font-serif">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-700 text-gray-600 font-serif">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-700 text-gray-600 font-serif">
              Contact
            </a>
          </li>
          <li>
            <a href="/donate" className="hover:text-gray-700 text-gray-600 font-serif">
              Donate
            </a>
          </li>
          <li>
            <a href="/getmeal" className="hover:text-gray-700 text-gray-600 font-serif">
              Get Meal
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-gray-700 text-gray-600 font-serif">
              Services
            </a>
          </li>
        </ul>
        <div className="space-x-4">
          <button className="bg-primary-500 px-5 py-2 text-white rounded hover:bg-primary-700 font-serif">
            Login
          </button>
          <button className="border-2 border-primary-500 px-5 py-2 rounded text-primary-500 hover:bg-primary-500 hover:text-white font-serif">
            Register
          </button>
        </div>
      </nav>
  
        {/* Main Section */}
      <section className="flex flex-wrap items-center py-16 px-6 bg-white">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-5xl font-bold leading-tight text-gray-800 mb-4 font-serif">
            Delivering{' '}
            <span className="text-primary-500">Nourishment</span>, Bringing{' '}
            <span className="text-primary-500">Smiles</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg font-serif">
            Welcome to Meals On Wheels, where compassion meets cuisine. We are a dedicated team
            committed to delivering hot, nutritious meals to qualified adults in need. Our mission
            is simple — ensuring that no one goes hungry. Whether it's due to age, illness, or
            disability, we're here to provide a helping hand.
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-800">
              Get Meal
            </button>
            <button className="bg-secondary-600 text-white px-8 py-3 rounded-md hover:bg-secondary-400">
              Donate
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="w-full lg:w-1/2 flex space-x-4 mt-8 lg:mt-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661508502918-c839a45c8be4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9sZCUyMHBlb3BsZSUyMHJlY2VpdmVkJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Helping Hand"
            className="rounded-lg shadow-lg w-2/5 h-64 object-cover" /* Adjusted image size */
          />
          <img
            src="https://images.pexels.com/photos/6646855/pexels-photo-6646855.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Charity"
            className="rounded-lg shadow-lg w-2/5 h-64 object-cover" /* Adjusted image size */
          />
        </div>
      </section>
  
        {/* Hot Noon Meal and Frozen Meal Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h3 className="text-4xl font-semibold text-secondary-600 mb-6 font-serif">Our Meals</h3>
        <div className="flex justify-center space-x-8 px-6">
          {/* Hot Noon Meal Card */}
          <div className="bg-white p-6 rounded shadow w-1/3">
            <img
              src="https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Hot Noon Meal"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h4 className="text-2xl font-bold mb-2 font-serif">Hot Noon Meal</h4>
            <p className="text-gray-700 text-lg font-serif">
              Enjoy a freshly prepared, nutritious Hot Noon Meal delivered right to your doorstep!
              Our hot meals are crafted daily with care, ensuring they are packed with flavor,
              warmth, and the nutrients you need to stay energized throughout the day. Designed
              especially for individuals who appreciate convenience without compromising on quality,
              each meal is delivered piping hot and ready to eat.
            </p>
          </div>

          {/* Frozen Meal Card */}
          <div className="bg-white p-6 rounded shadow w-1/3">
            <img
              src="https://charity-organization-by-khant.netlify.app/assets/frozen-meal-3-l279h2ff.png"
              alt="Frozen Meal"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h4 className="text-2xl font-bold mb-2 font-serif">Frozen Meal</h4>
            <p className="text-gray-700 text-lg font-serif">
              Our Frozen Meals offer the flexibility and convenience of enjoying delicious,
              wholesome food at your own time. Prepared using fresh, high-quality ingredients, these
              meals are quickly frozen to lock in their flavor and nutrients.
            </p>
          </div>
        </div>
      </section>

      {/* Shared Purpose Section */}
<section className="py-16 bg-white px-6 flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 text-left md:pr-6">
    <h3 className="text-3xl font-bold text-accent-600 mb-4 font-serif">
      Our Shared Purpose
    </h3>
    <p className="text-gray-700 font-serif mb-6 leading-relaxed">
        At Merry Meals, our purpose is to nourish lives and build stronger communities by
          providing convenient, nutritious meals to individuals and families in need. We are driven
          by a shared commitment to ensuring everyone has access to fresh, high-quality meals
          regardless of their circumstances.
    </p>

    <button className="bg-accent-600 text-white py-2 px-6 rounded-full hover:bg-green-600">
      Learn more
    </button>
  </div>
  <div className="md:w-1/2 mt-6 md:mt-0">
    <img
      src="https://static.timesnewsgroup.com.au/prod/uploads/sites/2/2024/06/Untitled-design-2024-06-26T121803.310.jpg"
      alt="Shared Purpose"
      className="rounded-lg shadow-lg w-full object-cover"
    />
  </div>
</section>

{/* How We Help Section */}
<section className="py-16 bg-gray-50 px-6 flex flex-col md:flex-row-reverse items-center">
  <div className="md:w-1/2 text-left md:pl-6">
    <h3 className="text-3xl font-bold text-accent-400 mb-4 font-serif">
      How We Help
    </h3>
    <p className="text-gray-700 font-serif mb-6 leading-relaxed">
    At Merry Meals, we help by providing reliable and timely meal delivery services to
          individuals who are homebound, elderly, or facing challenges that prevent them from
          preparing meals. Our team works tirelessly to ensure that each meal we deliver is
          wholesome, nutritious, and tailored to meet specific dietary needs.
    </p>

    <button className="bg-accent-400 text-white py-2 px-6 rounded-full hover:bg-blue-600">
      Learn more
    </button>
  </div>
  <div className="md:w-1/2 mt-6 md:mt-0">
    <img
      src="https://plus.unsplash.com/premium_photo-1661543044634-4f692aa15c3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="How We Help"
      className="rounded-lg shadow-lg w-full object-cover"
    />
  </div>
</section>

      {/* Donor Testimonials Section */}
<section className="py-16 bg-white px-6 text-center">
  <h3 className="text-3xl font-bold text-gray-800 mb-12 font-serif">
    What Our Donors Say
  </h3>
  <div className="flex flex-col md:flex-row justify-center gap-8">
    {/* Testimonial 1 */}
    <div className="bg-yellow-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
      <div className="flex justify-center -mt-14 mb-4">
        <img
          src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Charles"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-4 font-serif">Charles</h4>
      <p className="text-gray-700 leading-relaxed font-serif">
        Contributing to MerryMeal has been a heartwarming experience. Knowing that my donation
        helps deliver hot meals to those in need brings a sense of fulfillment. Every bit counts
        in making a difference in someone's day.
      </p>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-yellow-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
      <div className="flex justify-center -mt-14 mb-4">
        <img
          src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Peter"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-4 font-serif">Peter</h4>
      <p className="text-gray-700 leading-relaxed font-serif">
        MerryMeal's dedication to providing nutritious meals to vulnerable individuals is truly
        commendable. I'm proud to support such a worthy cause. Together, we can ensure that no one
        goes hungry.
      </p>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-yellow-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
      <div className="flex justify-center -mt-14 mb-4">
        <img
          src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Taylor"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-4 font-serif">Taylor</h4>
      <p className="text-gray-700 leading-relaxed font-serif">
        Donating to MerryMeal goes beyond charity; it's about nourishing communities. The joy of
        knowing that my contribution helps deliver both hot and frozen meals to those who require
        them is unmatched. Joining hands for a healthier, happier world.
      </p>
    </div>
  </div>
</section>

  
<footer className="bg-primary-500 text-white p-8">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    {/* Logo - Left Aligned */}
    <div className="flex-shrink-0 mb-6 md:mb-0">
      <img src={logo} alt="Logo" className="h-16 w-auto" />
    </div>

    {/* Navigation Links - Centered */}
    <ul className="flex flex-col items-center space-y-4 text-center mb-6">
      <li>
        <a href="/" className="hover:underline">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="hover:underline">
          About Us
        </a>
      </li>
      <li>
        <a href="/meals" className="hover:underline">
          Get Meals
        </a>
      </li>
      <li>
        <a href="/donate" className="hover:underline">
          Donate
        </a>
      </li>
      <li>
        <a href="/register" className="hover:underline">
          Become a Volunteer
        </a>
      </li>
      <li>
        <a href="/certifications" className="hover:underline">
          Food Safety Certifications
        </a>
      </li>
    </ul>

    {/* Social Media Icons - Right Aligned */}
    <div className="flex space-x-6">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition duration-300"
      >
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M22 12.073C22 5.42 17.075 0 12 0 6.926 0 2 5.42 2 12.073c0 6.05 4.254 11.062 10 11.93v-8.45h-2.857v-3.48H12V8.963c0-2.81 1.653-4.38 4.186-4.38 1.215 0 2.486.217 2.486.217v2.708h-1.4c-1.38 0-1.81.855-1.81 1.73v2.085h3.087l-.495 3.48h-2.592v8.45c5.746-.868 10-5.88 10-11.93z" />
        </svg>
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition duration-300"
      >
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M23.643 4.937c-.835.37-1.73.62-2.671.733a4.69 4.69 0 002.057-2.591 9.372 9.372 0 01-2.957 1.13 4.655 4.655 0 00-7.92 4.243 13.194 13.194 0 01-9.55-4.841 4.607 4.607 0 001.44 6.182 4.68 4.68 0 01-2.104-.577v.06c0 2.262 1.613 4.154 3.75 4.584a4.707 4.707 0 01-2.096.08 4.662 4.662 0 004.35 3.227A9.352 9.352 0 010 19.543a13.202 13.202 0 007.175 2.103c8.6 0 13.307-7.124 13.307-13.307l-.016-.606a9.525 9.525 0 002.337-2.42z" />
        </svg>
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-400 transition duration-300"
      >
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.307.974.975 1.244 2.242 1.306 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.307 3.608-.975.974-2.242 1.244-3.608 1.306-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.307-.974-.975-1.244-2.242-1.306-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.307-3.608.975-.974 2.242-1.244 3.608-1.306 1.266-.058 1.646-.069 4.85-.069zm0-2.163C8.775 0 8.338.013 7.052.07 5.762.128 4.601.387 3.579 1.409 2.558 2.43 2.299 3.591 2.241 4.881 2.184 6.167 2.171 6.605 2.171 12s.013 5.833.07 7.119c.058 1.29.317 2.451 1.338 3.472 1.022 1.022 2.183 1.281 3.473 1.338 1.286.058 1.724.07 7.119.07s5.833-.013 7.119-.07c1.29-.058 2.451-.317 3.472-1.338 1.022-1.022 1.281-2.183 1.338-3.473.058-1.286.07-1.724.07-7.119s-.013-5.833-.07-7.119c-.058-1.29-.317-2.451-1.338-3.472C19.338.387 18.177.128 16.887.07 15.601.013 15.163 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zm0 10.162a4 4 0 100-8 4 4 0 000 8zm6.406-10.844a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
        </svg>
      </a>
    </div>
  </div>
</footer>




      </div>
    );
  }

