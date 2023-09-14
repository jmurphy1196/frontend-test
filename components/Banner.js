import { Button } from "./Button";
import { forwardRef } from "react";

export function Banner({ content, refer }) {
  // Determine the alignment class based on the prop
  const baseImgUrl = "https:" + content.bannerImage.fields.file.url;
  const defaultImgUrl = `${baseImgUrl}?w=1200`; // for larger screens
  const mobileImgUrl = `${baseImgUrl}?w=640`; // for mobile screens
  let alignmentClass;
  let alignment = content.alignment;
  switch (alignment) {
    case "left":
      alignmentClass = "justify-start";
      break;
    case "right":
      alignmentClass = "justify-end";
      break;
    case "center":
    default:
      alignmentClass = "justify-center";
      break;
  }

  return (
    <div
      className='relative h-64 w-full overflow-hidden min-h-[800px]'
      ref={refer}
    >
      <picture>
        {/* Mobile optimized image */}
        <source media='(max-width: 640px)' srcSet={mobileImgUrl} />
        {/* Default image for larger screens */}
        <img
          src={defaultImgUrl}
          alt='Banner'
          className='absolute h-full w-full object-cover'
        />
      </picture>

      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex px-10 lg:px-0 ${alignmentClass} items-center`}
      >
        <div
          className={`text-left max-w-xl ${
            alignment === "left"
              ? "ml-10 md:ml-40 lg:ml-80"
              : alignment === "right"
              ? "mr-10 md:mr-40 lg:mr-80"
              : ""
          }`}
        >
          <h1 className='mb-2 text-4xl text-purple-500 font-bold'>
            {content.bannerHeading}
          </h1>
          {content.bannerText && (
            <p className='mb-4 text-black'>{content.bannerText}</p>
          )}
          <Button
            className={
              "bg-orange-500 mt-4 border-orange-500 border-2 hover:bg-white hover:text-orange-500 transition-colors"
            }
          >
            {content.ctaButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
