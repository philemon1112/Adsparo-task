"use client"
import React,{useState, useEffect} from 'react'
import { Fragment } from 'react'
import { Transition, Dialog} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function PostDetailsSidebar({ open, setOpen, children }) {

    const [show, setShow] = useState(open);

	useEffect(() => {
		setShow(open);
	}, [open]);

  return (
    <Transition.Root show={show} as={Fragment}>
			<Dialog as="div" className="relative z-[99]" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 backdrop-blur-sm bg-black/30 backdrop-filter" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
											<button
												type="button"
												className="rounded-md text-gray-300 hover:text-white focus:outline-none"
												onClick={() => setOpen(false)}
											>
												<span className="sr-only">
													Close panel
												</span>
												<XMarkIcon
													className="h-6 w-6"
													aria-hidden="true"
												/>
											</button>
										</div>
									</Transition.Child>
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="relative">
											{children} 
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
  )
}
