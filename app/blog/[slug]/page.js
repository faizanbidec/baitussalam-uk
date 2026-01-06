// // import Link from "next/link";
// // import { blogs } from "../../../data/blogs";
// // import Hero2Section from "@/app/components/hero2";

// // export default async function BlogPage({ params }) {
// //   const { id } = await params;
// //   const blog =  blogs.find((b) => b.id.toString() === id);

// //   const relatedBlogs = blogs
// //     .filter((b) => b.id !== blog.id && b.category === blog.category)
// //     .slice(0, 3);

// //   if (!blog)
// //     return <p className="text-center mt-10 text-black">Blog not found</p>;

// //   return (

// // <>

// // <Hero2Section
// //         subtitle="BLOG DETAIL"
// //         title=" Restoring Hope Through Food"
// //         description="A simple act of kindness became a lifeline for a struggling family, bringing warmth, dignity, and hope back into their lives"
// //         topLeftLabel="Home / Blog"
// //       />
    
// //     <div className="px-4 sm:px-8 max-w-[1250px] mx-auto mt-20">
// //       {/* Blog Title */}
// //       <h1 className="text-2xl sm:text-[2rem] mb-4">{blog.title}</h1>
// //       <p className="text-sm  mb-4">{blog.subtitle}</p>

// //       {/* Blog Image */}
// //       <img
// //   src={blog.image}
// //   alt={blog.title}
// //   className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover mb-6 rounded-lg"
// // />


// //       {/* Blog Content */}
// //       <p className="text-[12px] leading-[1.8] mb-[7rem] text-black">
// //         {blog.content}
// //       </p>

// //     {/* Related Blogs */}
// // <h3 className="text-[1.9rem] mb-8">RELATED BLOGS</h3>

// // <div className="flex flex-wrap justify-center sm:justify-start gap-5 px-4 mb-18 sm:px-6 md:px-0 pb-2.5">
// //   {relatedBlogs.map((r) => (
// //     <div
// //       key={r.id}
// //       className="
// //         flex-none
// //         w-full                   /* mobile: full width */
// //         sm:w-[calc(50%-0.625rem)]   /* 2 cards per row on small screens */
// //         md:w-[calc(33.333%-1.25rem)] /* 3 cards per row on medium screens */
// //         lg:w-[calc(33%-1.25rem)]     /* 3-4 cards per row on large screens */
// //         bg-white
// //         flex
// //         flex-col
// //         justify-between
// //         overflow-hidden
// //         rounded
// //       "
// //       style={{ aspectRatio: "1 / 1" }} 
// //     >
// //       <Link href={`/blog/${r.id}`} className="no-underline text-inherit flex flex-col h-full">
// //         {/* Image container */}
// //         <div className="w-full h-[100%] overflow-hidden">
// //           <img
// //             src={r.image}
// //             alt={r.title}
// //             className="w-full h-full object-cover cursor-pointer rounded-t-md"
// //           />
// //         </div>

// //         {/* Text & Button */}
// //         <div className="p-3 flex-1 flex flex-col justify-between">
// //           <div>
// //             <h4 className="text-[14px] mb-1 text-black">{r.title}</h4>
// //             <p className="text-[10px] text-black leading-[1.2]">
// //               {r.content.slice(0, 50)}...
// //             </p>
// //           </div>
          
// //   <button className="w-full py-2 flex items-center justify-start gap-2 text-[#BC153F] rounded cursor-pointer text-[12px]">
// //     Read More
// //     <span className="text-[#BC153F] text-[14px]">→</span>
// //   </button>


// //         </div>
// //       </Link>
// //     </div>
// //   ))}
// // </div>



// //     </div>
// //     </>
// //   );
// // }


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Hero2Section from "@/app/components/hero2";
import { blogsAPI } from "../../api/blogAPI";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchBlog = async () => {
    try {
      const res = await blogsAPI.getAll();
      if (res.data?.status) {
        const allBlogs = res.data.data;
        const selectedBlog = allBlogs.find((b) => b.slug === slug);
        setBlog(selectedBlog);

        if (selectedBlog) {
          // Related blogs: same category, exclude current blog
          const relatedBlogs = allBlogs
            .filter(
              (b) => b.slug !== slug && b.category_id === selectedBlog.category_id
            )
            .slice(0, 3); // max 3 related blogs
          setRelated(relatedBlogs);
        }
      }
    } catch (error) {
      console.error("Error fetching blog detail:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchBlog();
}, [slug]);


  if (loading) return <p className="text-center mt-10">Loading blog...</p>;
  if (!blog) return <p className="text-center mt-10 text-black">Blog not found</p>;

  return (
    <>
      <Hero2Section
        subtitle="Our Blog"
        title="Restoring Hope Amid Devastation"
        description="A simple act of kindness became a lifeline for a struggling family, bringing warmth, dignity, and hope back into their lives."
       topLeftLabel="Home / Blog"
      />

      <div className="px-4 sm:px-8 max-w-[1250px] mx-auto mt-20">
        <h1 className="text-2xl sm:text-[2rem] mb-4">{blog.title}</h1>

        <img
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${blog.image}`}
          alt={blog.title}
          className="w-full h-[350px] md:h-[450px] object-cover mb-6 rounded-lg"
        />

        <div
          className="text-[13px] leading-[1.8] mb-[7rem] text-black"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {related.length > 0 && (
          <>
            <h3 className="text-[1.9rem] mb-8">RELATED BLOGS</h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-5">
              {related.map((r) => (
                <div
                  key={r.slug}
                  className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/3 bg-white flex flex-col justify-between overflow-hidden rounded"
                >
                  <Link
                    href={`/blog/${r.slug}`}
                    className="no-underline flex flex-col h-full"
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${r.image}`}
                      alt={r.title}
                      className="w-full h-[250px] object-cover rounded-t-md"
                    />
                    <div className="p-3 flex-1 flex flex-col justify-between">
                      <h4 className="text-[14px] mb-1 text-black">{r.title}</h4>
                      <p className="text-[10px] text-black leading-[1.2]">
                        {r.content.replace(/<[^>]+>/g, "").slice(0, 60)}...
                      </p>
                      <button className="w-full py-2 text-left text-[#BC153F] rounded cursor-pointer text-[12px] flex items-center gap-1">
                        Read More <span className="text-[#BC153F] text-[14px]">→</span>
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}






