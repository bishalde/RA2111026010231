import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
      <h1 className="ml-4 text-xl font-semibold">LOADING</h1>
    </div>
  );
}

export default Loading;
