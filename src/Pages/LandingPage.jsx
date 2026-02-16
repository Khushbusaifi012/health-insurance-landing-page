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
