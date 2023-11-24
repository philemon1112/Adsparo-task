"use client"
import { useEffect, useState } from "react";
import BlogsCard from "../Cards/BlogsCard";
import LoadingCard from "../Cards/LoadingCard";



function BlogSection() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setData(data);
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    const handleShowMore = () => {
      setShowMore(true);
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const paginatedData = showMore ? data.slice(0, currentPage * itemsPerPage) : data.slice(0, itemsPerPage);

    const blogs = [
        {
          id:'1',
          title: 'How a visual artist redefines success in graphic design'
        },
        {
          id:'2',
          title: 'How a visual artist redefines success in graphic design 2'
        },
        {
          id:'3',
          title: 'How a visual artist redefines success in graphic design 4'
        },
        {
          id:'4',
          title: 'How a visual artist redefines success in graphic design 2'
        },
        {
          id:'5',
          title: 'How a visual artist redefines success in graphic design 6'
        },
        {
          id:'6',
          title: 'How a visual artist redefines success in graphic design 4'
        },
      ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-7xl ">
                  {/* <div className=" mx-auto max-w-lg">
                    <h2 className="font-bold text-lg md:text-4xl text-gray-800">Latest from Our Blog</h2>

                    <p className="text-gray-500 font-normal text-base mx-auto max-w-md mt-5 leading-7">Create custom landing pages with Rareblocks that converts more visitors than any website.</p>
                  </div> */}

                  <div className=" mx-auto ">
                    <h2 className="font-bold text-xl md:text-4xl text-gray-800">Latest from Our Blog</h2>

                    <p className="text-gray-500 font-normal text-base max-w-md mt-5 leading-7">These are our most recent blog posts click on them to read.</p>
                  </div>

                  <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
                    {loading ? 
                        (
                            <>
                                {blogs?.map((blog)=> (
                                    <LoadingCard key={blog.id} data={blog} />
                                ))}
                            </>
                        )
                        :
                        (
                            <>
                                {paginatedData?.map((blog)=> (
                                    <BlogsCard key={blog.id} data={blog} />
                                ))}
                            </>
                        )
                    }
                  </div>

                  <center>  
                    <div className="relative inline-flex mt-10 md:mt-18 group">
                          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                          <a  onClick={handleShowMore} title="" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                              Show more
                          </a>
                      </div>
                  </center>
                </div>
          </section>
  )
}

export default BlogSection