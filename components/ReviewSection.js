import React, { useState } from "react";
import dayjs from "dayjs";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { StarIcon as EmptyStar } from "@heroicons/react/24/outline";

const reviews = [
  {
    header: "Amazing Product!",
    stars: 5,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo mi vel augue molestie, eleifend tempus dolor placerat. Nulla blandit ultrices augue sit amet sagittis. Phasellus egestas, sem in venenatis lacinia, neque dolor congue nunc, vel dictum justo nunc et nunc. Integer id semper tortor.`,
    user: "John Doe",
    date: "10/20/2022",
  },
  {
    header: "Not bad",
    stars: 3,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo mi vel augue molestie, eleifend tempus dolor placerat. Nulla blandit ultrices augue sit amet sagittis. Phasellus egestas, sem in venenatis lacinia, neque dolor congue nunc, vel dictum justo nunc et nunc. Integer id semper tortor.`,
    user: "Jane Smith",
    date: "10/21/2022",
  },
  // ... add more reviews as needed
];

export function ReviewsSection({ content }) {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const nextReview = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setActiveReviewIndex(
        (prevIndex) => (prevIndex + 1) % content.reviews.length
      );
      setSlideDirection(null);
    }, 300);
  };

  const prevReview = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setActiveReviewIndex(
        (prevIndex) =>
          (prevIndex - 1 + content.reviews.length) % content.reviews.length
      );
      setSlideDirection(null);
    }, 300);
  };

  const activeReview = content.reviews[activeReviewIndex];

  return (
    <div className='reviews-section-container flex flex-col md:flex-row w-full bg-white text-black md:px-10 md:py-40'>
      <div className='flex-1 p-5 flex flex-col items-center mb-10 md:mb-0'>
        <h2 className='text-4xl uppercase font-bold mb-2 text-center'>
          {activeReview.fields.header}
        </h2>
        <div className='flex'>
          {Array.from({ length: 5 }).map((_, index) => {
            const isLastStar = index === 4;
            if (index < activeReview.fields.rating) {
              return (
                <StarIcon
                  key={index}
                  className={`h-6 w-6 text-orange-500 ${
                    !isLastStar ? "mr-1" : ""
                  }`}
                />
              );
            }
            return (
              <EmptyStar
                key={index}
                className={`h-6 w-6 text-orange-500 ${
                  !isLastStar ? "mr-1" : ""
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className='flex-1 p-5 relative overflow-hidden flex flex-col justify-center items-center'>
        <button
          onClick={prevReview}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 px-2 py-1 opacity-70'
        >
          <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
        </button>
        <div
          className={`flex flex-col items-center transition-transform duration-300 w-full px-5 md:px-20 ${
            slideDirection === "right"
              ? "-translate-x-full"
              : slideDirection === "left"
              ? "translate-x-full"
              : "translate-x-0"
          }`}
        >
          <div className='flex items-center text-purple-500 mb-2'>
            <h3 className='mr-2 font-bold'>{activeReview.fields.username}</h3>
            <span className='text-sm font-bold'>
              {dayjs(activeReview.fields.createdAt).format("MM/DD/YYYY")}
            </span>
          </div>
          <p className='text-center text-justify'>
            {activeReview.fields.content}
          </p>
        </div>
        <button
          onClick={nextReview}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 px-2 py-1 opacity-70'
        >
          <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </div>
    </div>
  );
}
