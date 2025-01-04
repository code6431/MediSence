import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Index5 = () => {
  return (
    <div className="bg-[#033746] p-16 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side */}
        <div>
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Purpose Built, <br />
            <span className="text-[#3b94a3]">Industry</span> <br />
            <span className="text-[#3b94a3]">Specific</span>
          </h1>
          <p className="text-lg">
            MediSence has deep experience across life sciences <br />
            and regulated industry and delivers solutions tailored to <br />
            your unique industry needs.
          </p>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 mb-4">LIFE SCIENCES</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaArrowRight className="text-[#3b94a3] mr-2" />
                <span className="text-white">Pharmaceuticals</span>
              </div>
              <div className="flex items-center">
                <FaArrowRight className="text-[#3b94a3] mr-2" />
                <span className="text-white">Medical Device</span>
              </div>
              <div className="flex items-center">
                <FaArrowRight className="text-[#3b94a3] mr-2" />
                <span className="text-white">Biologics</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 mb-4">REGULATED INDUSTRIES</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaArrowRight className="text-[#3b94a3] mr-2" />
                <span className="text-white">Dietary Supplements</span>
              </div>
              <div className="flex items-center">
                <FaArrowRight className="text-[#3b94a3] mr-2" />
                <span className="text-white">Food & Beverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index5;
