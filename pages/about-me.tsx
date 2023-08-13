/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutMe = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Me',
        description: `Hi I am Runzhou(Kilin) Mao, a frontend engineer.`,
        keywords: 'Kilin Mao, Runzhou Mao',
        author: 'Runzhou Mao'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Hi, It's Kilin Mao.
                    </Text>
                    <Text p className='text-lg'>
                        Hello everyone, my name is Runzhou(Kilin) Mao, and I am a Front-end Engineer. I graduated with a Bachelor's degree from China University of Mining and Technology and continued my studies by pursuing a Master's degree at the Technical University of Berlin. I am highly passionate about computer graphics and image processing, and I envision myself growing and advancing as a WebGL front-end developer in the future.
                    </Text>
                     <Text p className='text-lg'>
                    Outside of work, I am an outgoing and adventurous person who loves to explore new places by traveling. I appreciate good food and enjoy a diverse range of music genres. Staying fit is important to me, and I engage in sports such as swimming, badminton, and roller-skating to maintain a healthy lifestyle. Additionally, I am an avid fan of ACG (Anime, Comic, and Games) and am a dedicated reader of novels, often immersing myself in the exciting stories that they weave.
                    </Text>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutMe