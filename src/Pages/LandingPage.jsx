// import React from "react";
//  import "./LandingPage.css"; // keep all your styles separate
// import LiveKitWidget from "../components/LiveKitWidget";

// const LandingPage = () => {
//   return (
//     <>
//       {/* Header */}
//       <header>
//         <div className="header-container">
//           <div className="logo">HDFC ERGO</div>
//           <nav>
//             <ul>
//               <li><a href="#plans">Plans</a></li>
//               <li><a href="#features">Features</a></li>
//               <li><a href="#claims">Claims</a></li>
//               <li><a href="#about">About</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1>Health Insurance Plans Starting @ Rs 26/Day</h1>
//         <p>
//           Safeguard yourself from financial woes during medical emergencies.
//           Get comprehensive coverage with cashless hospitalization, OPD expenses, and more.
//         </p>
        
//         {/* ✅ LiveKit Video Call Widget */}
//         <LiveKitWidget />
//       </section>

//       {/* Stats Section */}
//       <section className="stats">
//         <div className="container">
//           <div className="stats-grid">
//             <div className="stat-item">
//               <h3>3.2Cr+</h3>
//               <p>Happy Customers</p>
//             </div>
//             <div className="stat-item">
//               <h3>15,000+</h3>
//               <p>Cashless Hospitals</p>
//             </div>
//             <div className="stat-item">
//               <h3>3/Min</h3>
//               <p>Claims Settlement</p>
//             </div>
//             <div className="stat-item">
//               <h3>36 Mins</h3>
//               <p>Claim Approval Time</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features" id="features">
//         <div className="container">
//           <div className="section-header">
//             <h2>Key Features & Benefits</h2>
//             <p>Comprehensive coverage for all your healthcare needs</p>
//           </div>
//           <div className="features-grid">
//             <div className="feature-card">
//               <div className="feature-icon">🏥</div>
//               <h3>Cashless Hospitalization</h3>
//               <p>Get treated at 15,000+ network hospitals without any upfront payment</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">💰</div>
//               <h3>Tax Savings</h3>
//               <p>Save up to ₹1 lac annually under Section 80D</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">🔄</div>
//               <h3>Sum Insured Restore</h3>
//               <p>Recharge your exhausted health cover up to the sum insured</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">🏠</div>
//               <h3>Home Treatment</h3>
//               <p>Coverage for home treatments when hospital beds are unavailable</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">🧘</div>
//               <h3>AYUSH Treatment</h3>
//               <p>Coverage for Ayurveda, Unani, Siddha, and Homeopathy treatments</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">✓</div>
//               <h3>Health Check-up</h3>
//               <p>Free annual health check-up within 60 days of renewal</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Plans Section */}
//       <section className="container" id="plans">
//         <div className="section-header">
//           <h2>Choose Your Perfect Health Plan</h2>
//           <p>Tailored plans for every need and budget</p>
//         </div>
//         <div className="plans-grid">
//           <div className="plan-card">
//             <h3>Optima Secure</h3>
//             <p>
//               4X Coverage, Wider Pre & Post Hospitalisation, free preventive health check-ups
//             </p>
//             <ul>
//               <li>Get 2X coverage from Day 1.</li>
//               <li>100% restores your base coverage</li>
//               <li>No Cost Installment Option for Credit and Debit card holders</li>
//               <li>Aggregate Deductible</li>
//             </ul>
//             <button className="cta-button">Buy Now</button>
//           </div>
//           <div className="plan-card">
//             <h3>Optima Lite</h3>
//             <p>
//               Preferred Choice of Base Sum Insured – 5 Lac or 7.5 Lac, All Day Care Procedures Covered, Unlimited Automatic Restore
//             </p>
//             <ul>
//               <li>Base Sum Insured Option</li>
//               <li>Automatic Restore</li>
//               <li>Cumulative Bonus</li>
//               <li>Protect Benefit</li>
//             </ul>
//             <button className="cta-button">Buy Now</button>
//           </div>
//           <div className="plan-card">
//             <h3>Optima Secure Global</h3>
//             <p>
//               4X Coverage for claims made in India, Wider Pre & Post Hospitalisation, Overseas Treatment Covered,
//               Free preventive health-check ups
//             </p>
//             <ul>
//               <li>Global Health cover</li>
//               <li>100% increase in coverage after 2 years</li>
//               <li>No Cost Installment Option for Credit and Debit card holders</li>
//               <li>Zero deductions on listed non-medical expenses</li>
//             </ul>
//             <button className="cta-button">Buy Now</button>
//           </div>
//         </div>
//       </section>

//       {/* Claims Section */}
//       <section className="features" id="claims">
//         <div className="container">
//           <div className="section-header">
//             <h2>Easy Claim Process</h2>
//             <p>Hassle-free claims in just 4 simple steps</p>
//           </div>
//           <div className="features-grid">
//             <div className="feature-card">
//               <div className="feature-icon">1</div>
//               <h3>Inform Hospital</h3>
//               <p>Fill pre-auth form at network hospital</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">2</div>
//               <h3>Get Approval</h3>
//               <p>We send you status update</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">3</div>
//               <h3>Hospitalization</h3>
//               <p>Get treated based on approval</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">4</div>
//               <h3>Claim Settled</h3>
//               <p>We settle directly with hospital</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer id="about">
//         <div className="footer-content">
//           <div className="footer-section">
//             <h4>Products</h4>
//             <ul>
//               <li><a href="#">Health Insurance</a></li>
//               <li><a href="#">Motor Insurance</a></li>
//               <li><a href="#">Travel Insurance</a></li>
//               <li><a href="#">Home Insurance</a></li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>Support</h4>
//             <ul>
//               <li><a href="#">Claims</a></li>
//               <li><a href="#">Renewals</a></li>
//               <li><a href="#">FAQs</a></li>
//               <li><a href="#">Contact Us</a></li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>Company</h4>
//             <ul>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Careers</a></li>
//               <li><a href="#">Blogs</a></li>
//               <li><a href="#">News</a></li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>Contact</h4>
//             <ul>
//               <li>Call: 1800-2700-700</li>
//               <li>Email: care@hdfcergo.com</li>
//               <li>Timings: 8 AM - 8 PM</li>
//             </ul>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>&copy; 2025 HDFC ERGO General Insurance Company Ltd. All rights reserved.</p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default LandingPage;


"use client";
import React from "react";
import LiveKitWidget from "../components/LiveKitWidget";
 
const LandingPage = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#dc0d29] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold">HDFC ERGO</div>
          <nav>
            <ul className="flex gap-8 text-sm font-medium">
              <li><a href="#plans" className="hover:underline">Plans</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#claims" className="hover:underline">Claims</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#fff5f6] to-[#ffe8ec] text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#dc0d29] mb-6">
          Health Insurance Plans Starting @ Rs 26/Day
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Safeguard yourself from financial woes during medical emergencies.
          Get comprehensive coverage with cashless hospitalization, OPD expenses, and more.
        </p>
        {/* ✅ LiveKit video call widget */}
         {/* ✅ LiveKit video call widget aligned right */}
<div className="flex justify-end max-w-7xl mx-auto">
  <LiveKitWidget />
</div>

      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#dc0d29] to-[#c01028] text-white py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center px-6">
          <div>
            <h3 className="text-4xl font-bold">3.2Cr+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">15,000+</h3>
            <p>Cashless Hospitals</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">3/Min</h3>
            <p>Claims Settlement</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">36 Mins</h3>
            <p>Claim Approval Time</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Key Features & Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive coverage for all your healthcare needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["🏥", "Cashless Hospitalization", "Get treated at 15,000+ network hospitals without any upfront payment"],
              ["💰", "Tax Savings", "Save up to ₹1 lac annually under Section 80D"],
              ["🔄", "Sum Insured Restore", "Recharge your exhausted health cover up to the sum insured"],
              ["🏠", "Home Treatment", "Coverage for home treatments when hospital beds are unavailable"],
              ["🧘", "AYUSH Treatment", "Coverage for Ayurveda, Unani, Siddha, and Homeopathy treatments"],
              ["✓", "Health Check-up", "Free annual health check-up within 60 days of renewal"],
            ].map(([icon, title, text], i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl text-center shadow hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 mx-auto bg-[#dc0d29] text-white rounded-full flex items-center justify-center text-2xl mb-5">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-[#dc0d29] mb-3">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Choose Your Perfect Health Plan
          </h2>
          <p className="text-lg text-gray-600">
            Tailored plans for every need and budget
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Optima Secure",
              desc: "4X Coverage, Wider Pre & Post Hospitalisation, free preventive health check-ups",
              list: [
                "Get 2X coverage from Day 1.",
                "100% restores your base coverage",
                "No Cost Installment Option for Credit and Debit card holders",
                "Aggregate Deductible",
              ],
            },
            {
              name: "Optima Lite",
              desc: "Preferred Choice of Base Sum Insured – 5 Lac or 7.5 Lac, All Day Care Procedures Covered, Unlimited Automatic Restore",
              list: [
                "Base Sum Insured Option",
                "Automatic Restore",
                "Cumulative Bonus",
                "Protect Benefit",
              ],
            },
            {
              name: "Optima Secure Global",
              desc: "4X Coverage for claims made in India, Wider Pre & Post Hospitalisation, Overseas Treatment Covered, Free preventive health-check ups",
              list: [
                "Global Health cover",
                "100% increase in coverage after 2 years",
                "No Cost Installment Option for Credit and Debit card holders",
                "Zero deductions on listed non-medical expenses",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className="border-2 border-gray-200 rounded-xl p-8 hover:border-[#dc0d29] hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-[#dc0d29] mb-4">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                {plan.list.map((item, j) => (
                  <li key={j} className="border-b border-gray-100 pb-2">
                    <span className="text-[#dc0d29] font-bold mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-[#dc0d29] text-white font-semibold py-3 px-6 rounded hover:bg-[#a00920] transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Claims Section */}
      <section id="claims" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Easy Claim Process
          </h2>
          <p className="text-gray-600 mb-12">Hassle-free claims in just 4 simple steps</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["1", "Inform Hospital", "Fill pre-auth form at network hospital"],
              ["2", "Get Approval", "We send you status update"],
              ["3", "Hospitalization", "Get treated based on approval"],
              ["4", "Claim Settled", "We settle directly with hospital"],
            ].map(([num, title, desc], i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl text-center shadow hover:-translate-y-1 transition"
              >
                <div className="w-16 h-16 mx-auto bg-[#dc0d29] text-white rounded-full flex items-center justify-center text-xl mb-5 font-bold">
                  {num}
                </div>
                <h3 className="text-xl font-semibold text-[#dc0d29] mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-[#2c2c2c] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {[
            {
              title: "Products",
              links: ["Health Insurance", "Motor Insurance", "Travel Insurance", "Home Insurance"],
            },
            {
              title: "Support",
              links: ["Claims", "Renewals", "FAQs", "Contact Us"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Blogs", "News"],
            },
            {
              title: "Contact",
              links: ["Call: 1800-2700-700", "Email: care@hdfcergo.com", "Timings: 8 AM - 8 PM"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-[#dc0d29] font-semibold text-lg mb-4">{col.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {col.links.map((link, j) => (
                  <li key={j}>
                    {link.startsWith("Call") || link.startsWith("Email") ? (
                      <span>{link}</span>
                    ) : (
                      <a href="#" className="hover:text-white transition">
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center text-gray-400 border-t border-gray-700 pt-6 text-sm">
          &copy; 2025 HDFC ERGO General Insurance Company Ltd. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
