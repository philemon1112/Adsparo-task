"use client"
import React,{useState, useEffect} from 'react'
import PostDetailsSidebar from '../Shared/PostDetailsSideBar'
import PostDetails from '../Shared/PostDetails';
import MobilePostDetailsSidebar from '../Shared/MobilePostDetails';

function BlogsCard({data}) {
    const [blogDetails, setBlogDetails] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleBlogDetails = () => {
        setBlogDetails(!blogDetails);
      };

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        handleResize(); // Check initial width
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

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