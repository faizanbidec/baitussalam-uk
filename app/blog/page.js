// app/blog/page.js (Server Component)
import BlogsPageClient from "../blog/BlogPageClient";

export const metadata = {
  title: "Read our Blog | Stories of Hope, Faith & Humanity",
  description:
    "Inspiring stories, updates, and insights from Baitussalam’s humanitarian and community initiatives. Discover how your support transforms lives with faith and compassion.",
};

export default function BlogsPage() {
  return <BlogsPageClient />;
}
