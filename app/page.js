import BlogsCard from "@/components/Cards/BlogsCard";
import BlogSection from "@/components/Sections/BlogSection";
import HeroSection from "@/components/Sections/HeroSection";


export default function Home() {

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
    <div>
        <HeroSection />
        <div>
          <BlogSection />
        </div>
    </div>
  )
}
