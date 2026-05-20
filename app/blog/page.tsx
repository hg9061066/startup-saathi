import BlogUI, { Article } from './BlogUI';
import { getPublishedArticles } from '../../lib/notion';

export const revalidate = 60; // Refresh the data every 60 seconds

export default async function BlogPage() {
  let articles: Article[] = [];

  try {
    // Try to fetch real data from Notion
    articles = await getPublishedArticles();
  } catch (error) {
    console.warn("Notion API not connected yet. Showing mock articles.", error);
    
    // Fallback dummy data if Notion isn't wired up
    articles = [
      {
        id: 1,
        title: "10 Proven Strategies to Skyrocket Your Instagram Growth in 2026",
        slug: "10-proven-strategies-instagram-growth",
        excerpt: "Stop relying on outdated tactics. Here is the exact blueprint we use to generate massive organic reach and engagement for our clients.",
        category: "Social Media",
        date: "May 18, 2026",
      },
      {
        id: 2,
        title: "Why Your Business Needs a Custom Website (Not Just an Instagram)",
        slug: "why-your-business-needs-custom-website",
        excerpt: "Social media is rented land. Discover why building a dedicated web presence is the ultimate key to owning your audience and scaling revenue.",
        category: "Web Development",
        date: "May 12, 2026",
      },
      {
        id: 3,
        title: "The Anatomy of a High-Converting Brand Identity",
        slug: "anatomy-high-converting-brand-identity",
        excerpt: "Your logo is not your brand. We break down the psychology of color, typography, and messaging that actually converts viewers into paying customers.",
        category: "Branding",
        date: "May 05, 2026",
      }
    ];
  }

  return <BlogUI articles={articles} />;
}