import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section class="flex items-center h-screen p-16 bg-gray-100 dark:bg-gray-700">
        <div class="container flex flex-col items-center ">
            <div class="flex flex-col gap-6 max-w-md text-center">
                <h2 class="font-extrabold text-9xl text-gray-600">
                    <span class="sr-only">Error</span>404
                </h2>
                <p class="text-2xl md:text-3xl dark:text-gray-400">Sorry, we couldn't find this page.</p>
                <div className="max-w-3xl mx-auto text-center">
                <div className="relative inline-flex mt-2 group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                    <Link href="/" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Back to Homepage
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}