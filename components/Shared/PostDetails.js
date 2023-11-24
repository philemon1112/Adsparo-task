"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

function PostDetails({post}) {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])
  return (
    <div>
        <div className="flex flex-col">
				<Image
					src="/Assets/Svg/placeholderImg.svg"
					alt="post Image"
					width={466}
					height={120}
				/>

				<div className="p-[24px] flex flex-col space-y-[4px]">


                    <div className="flex flex-row items-center justify-between">
                        <p className="text-2xl text-gray-900 tracking-[-0.02em] font-semibold">
                            {post.title}
                        </p>
                    </div>
					
                    <div className="flex flex-row space-x-[6px] items-center w-full pt-[16px]">
						<svg
							width={16}
							height={16}
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_251_8855)">
								<path
									d="M14.0001 14H8.66677M1.66675 14.3334L5.36626 12.9105C5.60289 12.8195 5.7212 12.774 5.83189 12.7146C5.93022 12.6618 6.02395 12.6009 6.11211 12.5324C6.21136 12.4554 6.301 12.3658 6.48027 12.1865L14.0001 4.66671C14.7365 3.93033 14.7365 2.73642 14.0001 2.00004C13.2637 1.26366 12.0698 1.26366 11.3334 2.00004L3.8136 9.51985C3.63433 9.69912 3.5447 9.78876 3.46768 9.88801C3.39926 9.97617 3.33835 10.0699 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6339L1.66675 14.3334ZM1.66675 14.3334L3.03883 10.766C3.13701 10.5107 3.1861 10.3831 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0864C5.6132 12.2798 5.7099 12.3765 5.72912 12.4772C5.74593 12.5652 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3334Z"
									stroke="#667085"
									strokeWidth="1.66667"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_251_8855">
									<rect width={16} height={16} fill="white" />
								</clipPath>
							</defs>
						</svg>

						<h2
							className="text-sm text-gray-500"
						>
							post Name
						</h2>
					</div>

					<h2
						className="text-[15px] text-gray-900"
					>
						{post?.title}
					</h2>

					<div className="flex flex-row space-x-[6px] items-center w-full pt-[16px]">
						<svg
							width={16}
							height={16}
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_251_8855)">
								<path
									d="M14.0001 14H8.66677M1.66675 14.3334L5.36626 12.9105C5.60289 12.8195 5.7212 12.774 5.83189 12.7146C5.93022 12.6618 6.02395 12.6009 6.11211 12.5324C6.21136 12.4554 6.301 12.3658 6.48027 12.1865L14.0001 4.66671C14.7365 3.93033 14.7365 2.73642 14.0001 2.00004C13.2637 1.26366 12.0698 1.26366 11.3334 2.00004L3.8136 9.51985C3.63433 9.69912 3.5447 9.78876 3.46768 9.88801C3.39926 9.97617 3.33835 10.0699 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6339L1.66675 14.3334ZM1.66675 14.3334L3.03883 10.766C3.13701 10.5107 3.1861 10.3831 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0864C5.6132 12.2798 5.7099 12.3765 5.72912 12.4772C5.74593 12.5652 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3334Z"
									stroke="#667085"
									strokeWidth="1.66667"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_251_8855">
									<rect width={16} height={16} fill="white" />
								</clipPath>
							</defs>
						</svg>

						<h2
							className="text-sm text-gray-500"
						>
							post Description
						</h2>
					</div>

					<h2
						className="text-[15px] text-gray-900"
					>
						{post?.body 
                            || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga optio, cupiditate provident voluptas aperiam commodi, sunt ipsa ullam ea quis velit modi at. Excepturi cumque recusandae eaque voluptatum quam explicabo. Quos, quasi! Fugit, eaque beatae? Beatae culpa, consequuntur atque dolorum accusantium ipsa repellat odit perferendis eaque, uid!
                            `
                        }
					</h2>

				</div>
			</div>
    </div>
  )
}

export default PostDetails