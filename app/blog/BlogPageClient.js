// app/blog/BlogsPageClient.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Hero2Section from "../components/hero2";
import { blogsAPI } from "../api/blogAPI";

export default function BlogsPageClient() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await blogsAPI.getAll();
        if (res.data?.status) setBlogs(res.data.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading blogs...</p>;

  return (
    <>
      {/* Hero section */}
      <Hero2Section
        subtitle="BLOG"
        title="Stories That Inspire Compassion"
        description="Discover how your support is transforming lives through education, healthcare, and community care."
        topLeftLabel={{
          show: true,
          links: [
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
          ],
        }}
      />

      {/* Blogs */}
      <div className="px-4 sm:px-8">
        <h1 className="text-2xl sm:text-[2.25rem] font-bold mb-8 mt-16 sm:mt-24 text-left text-black">
          Read Our Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
          {blogs
          .filter((blog) => blog.status == 1)
          .map((blog) => (
            <div key={blog.slug} className="w-full bg-white rounded overflow-hidden flex flex-col justify-between h-[430px]">
              <Link href={`/blog/${blog.slug}`} className="no-underline flex flex-col h-full">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${blog.image}`}
                  alt={blog.title}
                  className="w-full h-[290px] object-cover cursor-pointer"
                />
                <div className="p-4 flex-1">
                  <h4 className="text-base sm:text-[16px] mb-2 text-black">{blog.title}</h4>
                  <p className="text-[10.5px] leading-5 text-black">
                    {blog.content.replace(/<[^>]+>/g, "").slice(0, 80)}...
                  </p>
                </div>
                <div className="px-4 pb-4">
                  <button className="w-full text-left text-[#BC153F] rounded cursor-pointer text-[12px] flex items-center gap-1">
                    Read More <span className="text-[#BC153F] text-[14px]">→</span>
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
