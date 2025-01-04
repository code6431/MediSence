import React from 'react';

const Index3 = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Quality Management System */}
      <div className="bg-[#07273b] text-white p-[5rem] flex-1">
        <h2 className="text-6xl leading-[5rem] font-bold mb-4 w-11">
          <span className='text-blue-400'>Quality </span><br/> Management <br/>System
        </h2>
        <p className="text-lg mb-6">
          Complete and connected meets fast and flexible. From quality event
          management to document control and integrated training - MediSence
          Quality Excellence transforms your quality data and processes into a
          competitive advantage.
        </p>
        <ul className="pl-6 space-y-2 list-disc">
          <li className="relative pl-4 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#3b94a3] before:rounded-full before:content-['']">
            Quality Events
          </li>
          <li className="relative pl-4 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#3b94a3] before:rounded-full before:content-['']">
            Document Control
          </li>
          <li className="relative pl-4 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#3b94a3] before:rounded-full before:content-['']">
            Training and Exams
          </li>
          <li className="relative pl-4 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#3b94a3] before:rounded-full before:content-['']">
            Audit Management
          </li>
          <li className="relative pl-4 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#3b94a3] before:rounded-full before:content-['']">
            Risk Management
          </li>
        </ul>
        <button className="mt-6 bg-[#3b94a3] hover:bg-teal-600 text-white py-2 px-4 rounded">
          Explore the QMS
        </button>
      </div>

      {/* Manufacturing Execution System */}
      <div className="bg-[#3b94a3] text-white p-[5rem] flex-1">
        <h2 className="text-6xl leading-[5rem] font-bold mb-4">
          <span className='text-[#07273b]'>Manufacturing</span><br/> Execution <br/> System
        </h2>
        <p className="text-lg mb-6">
          Modernizing your manufacturing operations starts with modern software.
          From work orders to work instructions and production records (EBR or
          eDHR) to logbooks, MediSence Manufacturing Excellence is the
          simplest way to digitalize manufacturing.
        </p>
        <ul className="pl-6 space-y-2 list-disc">
          <li className="relative pl-4 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#07273b] before:rounded-full before:content-['']">
            Manufacturing Execution
          </li>
          <li className="relative pl-4 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#07273b] before:rounded-full before:content-['']">
            Work Instructions
          </li>
          <li className="relative pl-4 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#07273b] before:rounded-full before:content-['']">
            EBR or eDHR
          </li>
          <li className="relative pl-4 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#07273b] before:rounded-full before:content-['']">
            Logbooks
          </li>
          <li className="relative pl-4 before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#07273b] before:rounded-full before:content-['']">
            Integrations
          </li>
        </ul>
        <button className="mt-6 bg-[#07273b] hover:bg-teal-700 text-white py-2 px-4 rounded">
          Explore the MES
        </button>
      </div>
    </div>
  );
};

export default Index3;
