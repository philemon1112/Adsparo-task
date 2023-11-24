"use client"
import React,{useState} from 'react'
import PostDetailsSidebar from '../molecules/PostDetailsSideBar'
import PostDetails from '../molecules/PostDetails';
import MobilePostDetailsSidebar from '../molecules/MobilePostDetails';

function BlogsCard({data}) {
    const [blogDetails, setBlogDetails] = useState(false);

    const toggleBlogDetails = () => {
        setBlogDetails(!blogDetails);
      };

    const isMobile = window?.matchMedia('(max-width: 768px)').matches;

  return (
    <div onClick={() => setBlogDetails(!blogDetails)}>
        <div className="rounded-xl overflow-hidden block aspect-video">
            <img src="/Assets/Svg/placeholderImg.svg" alt="" className="object-cover duration-200 transition-all ease-in-out w-full h-full hover:scale-125 cursor-pointer" />
        </div>

        <div className="flex items-center mt-4">
            <p className="text-gray-500 font-medium text-sm">Category</p>
            <span className="font-medium text-black mx-2">•</span>
            <p className="text-gray-500 font-medium text-sm">24th November 2023</p>
        </div>

        <p className="mt-4 text-gray-900 font-bold text-xl cursor-pointer line-clamp-2">
        <a>
            {data.title} 
        </a>
        </p>
        {/* Conditional rendering based on screen size */}
      {isMobile ? (
        <MobilePostDetailsSidebar open={blogDetails} setOpen={toggleBlogDetails}>
          <PostDetails post={data} />
        </MobilePostDetailsSidebar>
      ) : (
        <PostDetailsSidebar open={blogDetails} setOpen={toggleBlogDetails}>
          <PostDetails post={data} />
        </PostDetailsSidebar>
      )}
    </div>
  )
}

export default BlogsCard