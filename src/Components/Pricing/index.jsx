import React, { useState } from 'react';

const PricingPlans = () => {
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);

  const toggleBilling = () => {
    setIsAnnualBilling(!isAnnualBilling);
  };

  return (
    <div className="bg-black text-white py-[8rem]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-[50rem] h-[6rem] mb-10 relative left-[12rem] transition-colors duration-500">
          <h1 className="text-4xl leading-[4rem] font-bold mt-[1rem] text-white hover:text-blue-200">
            Choose a plan that works for you
          </h1>
          <hr className="border-blue-200 mt-2" />
        </div>

        <div className="flex justify-center mb-4">
          <button className="px-4 py-2 rounded-full bg-blue-800 mr-2 hover:bg-blue-700 transition-colors duration-300">Individual/Teams</button>
          <button className="px-4 py-2 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors duration-300">Enterprise</button>
        </div>
        
        <div className="flex justify-center items-center mb-8">
          <label className="mr-2">MONTHLY BILLING</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isAnnualBilling}
              onChange={toggleBilling}
            />
            <div className="w-11 h-6 border rounded-full peer-checked:bg-blue-500"></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                isAnnualBilling ? 'transform translate-x-5' : ''
              }`}
            ></div>
          </label>
          <label className="ml-2">
            ANNUAL BILLING{' '}
            <span className="text-sm text-blue-300">Save ~26% annually</span>
          </label>
        </div>
        
        <div className="flex justify-center gap-4">
          {/* Free Plan */}
          <div className="bg-blue-800 p-6 rounded-lg w-1/4 hover:bg-blue-700 transition-colors duration-300">
            <h2 className="text-2xl font-bold">Free</h2>
            <p className="text-4xl font-bold my-4">$0 <span className="text-lg font-normal">per month</span></p>
            <p className="mb-4">Start building and testing your application today!</p>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white">Create Account →</button>
            <ul className="mt-6 text-left text-blue-200">
              <li>✅ Visual Application Builder</li>
              <li>✅ 100s of page & component templates</li>
              <li>✅ Build Mobile, Web, and Desktop Apps</li>
              <li>✅ API & Data Integration</li>
              <li>✅ Web Publishing</li>
            </ul>
          </div>
          {/* Standard Plan */}
          <div className="bg-blue-800 p-6 rounded-lg w-1/4 hover:bg-blue-700 transition-colors duration-300">
            <h2 className="text-2xl font-bold">Standard</h2>
            <p className="text-4xl font-bold my-4">
              <span className="line-through">$30</span> ₹900 <span className="text-lg font-normal">per month (regional discount)</span>
            </p>
            <p className="mb-4">Download your project source code or APK.</p>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white">Start Free Trial →</button>
            <ul className="mt-6 text-left text-blue-200">
              <li>✅ Free Features +</li>
              <li>✅ Code Download</li>
              <li>✅ APK Download</li>
              <li>✅ Custom Domain Web Publishing</li>
            </ul>
          </div>
          {/* Pro Plan */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg w-1/4 hover:bg-blue-700 transition-colors duration-300">
            <h2 className="text-2xl font-bold">Pro</h2>
            <p className="text-4xl font-bold my-4">
              <span className="line-through">$70</span> ₹2100 <span className="text-lg font-normal">per month (regional discount)</span>
            </p>
            <p className="mb-4">Get access to all of our features & build applications faster than ever!</p>
            <button className="px-6 py-2 bg-white text-blue-800 rounded-full">Start Free Trial →</button>
            <ul className="mt-6 text-left text-white">
              <li>✅ Standard Features +</li>
              <li>✅ Source Repository Integration</li>
              <li>✅ One-Click Localization</li>
              <li>✅ GitHub Integration</li>
              <li>✅ One-Click Deployment to Apple & Google App Stores</li>
            </ul>
          </div>
          {/* Teams Plan */}
          <div className="bg-blue-800 p-6 rounded-lg w-1/4 hover:bg-blue-700 transition-colors duration-300">
            <h2 className="text-2xl font-bold">Teams</h2>
            <p className="text-4xl font-bold my-4">
              <span className="line-through">$70</span> ₹2100 <span className="text-lg font-normal">per user / month (regional discount)</span>
            </p>
            <p className="mb-4">For teams that need collaboration and more advanced features.</p>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white">Get Started →</button>
            <ul className="mt-6 text-left text-blue-200">
              <li>✅ Pro Features +</li>
              <li>✅ Real-Time Collaboration</li>
              <li>✅ Project Level Access Controls</li>
              <li>✅ 7 Day Audit Logs</li>
              <li>✅ Centralized Billing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
