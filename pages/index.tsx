/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";

import Showcase from "../src/components/Misc/Showcase";
import Paper from "../src/components/Misc/Paper";

const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <section className='w-full md:pt-[50px] md:pb-[30px] pt-[50px] pb-20 '>
        <div className="container text-center px-3">
          <Text subtitle className='text-3xl'>
            💜 Welcome to my blog, a creative space where I share my thoughts, experiences, and musings on life. 💜
          </Text>
        </div>
           <div className='flex justify-center mt-5 flex-wrap '>
       <a href="https://github.com/kilinmao" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center text-blue-600 hover:text-blue-800 transition-all duration-200 mb-3 md:mx-5 mx-2'>
  <span className='text-xl mr-2'>🐱</span>
  <span className='text-xl'>Github</span>
</a>
<LinkTo href="/pages/about-me.tsx" passHref className='flex items-center justify-center text-blue-600 hover:text-blue-800 transition-all duration-200 mb-3 md:mx-5 mx-2'>
  <span className='text-xl mr-2'>🧚🏻‍♀️</span>
  <span className='text-xl'>About Me</span>
</LinkTo>


          </div>
      </section>
      <div className="container mx-auto lg:px-[15px] px-0">
         <div className={'flex flex-wrap'}>
          <Showcase />
        </div>
        <div className={'flex flex-wrap'}>
          <FeaturedArticleSection />
        </div>
            <div className={'flex flex-wrap'}>
          <Paper />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home