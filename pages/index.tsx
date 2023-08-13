/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";

import Showcase from "../src/components/Misc/Showcase";

const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <section className='w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200'>
        <div className="container text-center px-3">
          <Text title className='text-3xl'>
            Welcome to my blog, a creative space where I share my thoughts, experiences, and musings on life.
          </Text>

          <div className='flex justify-center mt-5 flex-wrap '>
            <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Github</span>
            </a>
            <LinkTo href="/pages/about-us.tsx" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>About</span>
            </LinkTo>
          </div>
        </div>
      </section>
      <div className="container mx-auto lg:px-[15px] px-0">
         <div className={'flex flex-wrap'}>
          <Showcase />
        </div>
        <div className={'flex flex-wrap'}>
          <FeaturedArticleSection />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home