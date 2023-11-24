"use client"
import React,{useState, useEffect} from 'react'
import { Fragment } from 'react'
import { Transition, Dialog} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function MobilePostDetailsSidebar({ open, setOpen, children }) {

    const [show, setShow] = useState(open);

	useEffect(() => {
		setShow(open);
	}, [open]);

  return (
    <Transition.Root show={show} as={Fragment}>
<Dialog as="div" className="relative z-[99] " onClose={setOpen}>
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
                    <div className="pointer-events-none fixed inset-0 right-0 flex max-w-full">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-y-full"
                            enterTo="translate-y-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-y-0"
                            leaveTo="translate-y-full"
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
                                        <div className="fixed -z-1 inset-0 opacity-100" aria-hidden="true" onClick={() => setOpen(false)}></div>
                                    </div>
                                </Transition.Child>
                                      <div className="absolute flex flex-col inset-x-0 bottom-0 rounded-tl-xl rounded-tr-xl p-2 h-fit transition-all translate-y-0 bg-white"  >
                                          <div className="relative flex items-center justify-center pb-1 after:absolute after:-top-1 after:left-1/2 after:rounded-full after:-translate-x-1/2 after:w-10 after:h-1 after:bg-gray-300 [&amp;_.bottomsheet-title]:pt-2">
                                          </div>
                                          <div className="flex grow items-center justify-center">{children}</div>
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
