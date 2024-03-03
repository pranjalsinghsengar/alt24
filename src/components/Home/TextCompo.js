import React from "react";

const TextCompo = () => {
  return (
    <div className='text-2xl flex flex-col items-center '>
      <h1 className='text-5xl font-bold'>FOLD7 DESIGN</h1>
      <p className='text-sm p-4 w-2/3 text-center'>
        A brand design agency creating articulated brand ideas ano visuai
        identities.
      </p>
      <div className='flex'>
        <button className='px-8 py-4 rounded-lg border border-black'>
          Find out more
        </button>
      </div>
    </div>
  );
};

export default TextCompo;
