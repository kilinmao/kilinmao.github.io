import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { Mao } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/how-to-setup-blog',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: MAYUR,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@mayur_nalwala",
    }
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
        {
            path: '/pages/blog/first-article.tsx',
            featureArticle: true,
            preview: {
                // the author object you created in _BLOG_SETUP file
                author: Mao,
                date: "August 6 2023",
                articleTitle: "The Adventures of Being a Curious Mind: My First Blog Post ✨",
                shortIntro: "This is my first article.",
                tags: "intro",
                thumbnail: "/public/imp_assets/life/first-article.png",
                category: 'life'
            },
            seo: {
                title: "first article",
                keywords: "demo, blog setup, first article",
                // ogImage: "/images/tutorials/demo-image.jpg",
            }
        },
  

];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
