/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const ContactMe = () => {
    const PAGE_SEO: iSEO = {
        title: 'Contact me',
    } 
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 pb-10 md:pt-20 pt-[80px]'>
                <Text title className="!text-5xl !font-light">
                    Contact Me
                </Text>

                <div className="flex flex-wrap mt-8 justify-between">
                    <div className="md:w-1/3 w-full">
                        <Text p>
                            Write to me at
                        </Text>
                        <Text subtitle className="!font-light md:!text-3xl">
                            kilinmao@gmail.com
                        </Text>
                           <Text p>
                            If you have Wechat, please add account
                        </Text>
                        <Text subtitle className="!font-light md:!text-3xl">
                            mrzkilin
                        </Text>
                    </div>
                </div>
            </section>

        </PageLayout>
    )
}

export default ContactMe