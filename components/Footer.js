import React from "react";

export function Footer({ content }) {
  return (
    <div className='bg-gray-50 text-black py-6'>
      <div className='container mx-auto text-center'>
        <p className='text-xl mb-4'>{content.header}</p>
        <div className='flex justify-center space-x-4'>
          {content.icons.map((icon) => (
            <img
              src={`https:${icon.fields.logo.fields.file.url}`}
              alt='logo'
              className='w-10 h-10 mr-2'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
