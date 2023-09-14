import { ChevronRightIcon } from "@heroicons/react/24/solid";

export function Section({ content, refer }) {
  let imgUrl = "";
  if (content.image) imgUrl = "https:" + content.image.fields.file.url;
  let mappedIcons;
  if (content.icons) {
    mappedIcons = (
      <div className='grid grid-cols-2 gap-x-5 sm:gap-x-60 py-20'>
        {content.icons.map((icon) => (
          <div className='flex flex-col items-center justify-center px-10 py-10 '>
            <div className='w-40 h-40 rounded-full border border-purple-500 px-8 py-8 flex items-center justify-center transform transition-transform hover:scale-110 cursor-pointer'>
              <img
                src={"https:" + icon.fields.logo.fields.file.url}
                alt=''
                className='object-cover'
              />
            </div>
            <p className='mt-10 text-center font-bold'>{icon.fields.title}</p>
          </div>
        ))}
      </div>
    );
  }

  const formatHeader = (header) => {
    const words = header.split(" ");
    if (words.length > 2) {
      words.splice(2, 0, "<br />");
    }
    return words.join(" ");
  };

  return (
    <section ref={refer}>
      <div className='flex flex-col md:flex-col lg:flex-row justify-center bg-white text-black  '>
        {/* Parent container */}
        {/* Left Section */}
        <div className='flex-none w-full lg:w-1/2 flex flex-col justify-center items-center px-10 lg:px-40 py-4 sm:pb-10 md:pb-10 '>
          <div className=' space-y-4'>
            {/* This div wraps the header and subtext */}
            <h1
              className='text-2xl font-bold text-purple-500'
              dangerouslySetInnerHTML={{ __html: formatHeader(content.header) }}
            ></h1>
            <p className=''>{content.subtext}</p>
          </div>
          <a
            href='#'
            className='flex items-center text-purple-500 hover:underline self-start mt-4'
          >
            <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            <span className='font-bold capitalize'>{content.ctaText}</span>
          </a>
        </div>
        {/* Right Section */}
        <div
          className={`flex-1 flex justify-center items-center ${
            content.icons && "bg-gray-50"
          }`}
        >
          {imgUrl ? (
            <img src={imgUrl} alt='Description' className='w-full h-full' />
          ) : (
            mappedIcons
          )}
        </div>
      </div>
    </section>
  );
}
