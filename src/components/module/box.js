import React from 'react';
const Box = ({content}) => {
  return (
    <div className="col-span-full lg:col-span-6">
    <div className="rounded-lg bg-dark relative flex flex-col items-start px-32 py-32 w-full h-full rounded-lg lg:px-32">
        <div className="flex flex-none items-end mb-4 text-xl font-medium">{content.headline}</div>
        <p className="flex-auto max-w-sm text-xl">{content.paragraph}</p>
      </div>
    </div>
  );
}

export default Box;
