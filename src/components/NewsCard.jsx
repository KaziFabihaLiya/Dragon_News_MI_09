import React from 'react';
import { format } from 'date-fns';
import { FaUserCircle, FaCalendarAlt, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    others
  } = news;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'EEEE, MMMM d, yyyy');
  };

  const renderStars = (ratingNum) => {
    const stars = [];
    const fullStars = Math.floor(ratingNum);
    const hasHalf = ratingNum % 1 !== 0;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 fill-current" />);
      } else if (i === fullStars && hasHalf) {
        // For half star, you could use a half-filled icon or approximate with full
        stars.push(<FaStar key={i} className="text-yellow-400 fill-current" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden w-full relative pb-5">
      {/* Optional Badges for others */}
      {others.is_trending && (
        <div className="absolute top-4 right-2 z-10 ">
          <div className="badge badge-warning badge-outline">Trending</div>
        </div>
      )}
      {others.is_today_pick && (
        <div className="absolute top-4 left-2 z-10">
          <div className="badge badge-info badge-outline">Today's Pick</div>
        </div>
      )}

      {/* Header with author */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 mt-8">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="font-semibold text-sm">{author.name}</div>
            <div className="flex items-center text-xs text-gray-500 space-x-1">
              <FaCalendarAlt className="w-3 h-3" />
              <span>{formatDate(author.published_date)}</span>
            </div>
          </div>
        </div>
        <FaShareAlt className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
      </div>

      {/* Thumbnail Image */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </figure>

      {/* Meta and Details */}
      <div className="p-4 space-y-2">
        {/* Date and Tags */}
        <div className="flex flex-col space-y-1">
          <div className="text-xs text-gray-500">{formatDate(author.published_date)}</div>
          <div className="flex flex-wrap gap-1">
            <span className="text-xs text-gray-400">Tag Cloud Tags:</span>
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-xs badge-ghost text-xs">
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Details Snippet */}
        <p className="text-sm text-gray-700 line-clamp-3">{details}...</p>

        {/* Read More */}
        <div className="pt-2">
          <a href="#" className="text-primary font-medium text-sm hover:underline">
            Read More
          </a>
        </div>
      </div>

      {/* Footer with Rating and Views */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <div className="flex items-center space-x-1">
          {renderStars(rating.number)}
          <span className="text-sm text-gray-600 ml-1">{rating.number}</span>
          {rating.badge && (
            <div className="badge badge-xs badge-secondary ml-2">{rating.badge}</div>
          )}
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <FaEye className="w-4 h-4" />
          <span className="text-sm">{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;