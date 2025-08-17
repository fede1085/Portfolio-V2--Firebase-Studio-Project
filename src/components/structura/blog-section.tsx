import Link from "next/link";
import { format } from "date-fns";
import { posts as mockPosts } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export default function BlogSection() {
  const posts = mockPosts;

  return (
    <section id="blog" className="py-20 lg:py-32 bg-[#111111] text-white" aria-labelledby="blog-title">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="blog__header lg:col-span-4 lg:sticky top-24 self-start">
            <h2 id="blog-title" className="text-3xl lg:text-4xl font-bold mb-4">
              Latest Blogs
            </h2>
            <Link href="#" className="text-primary hover:underline">
              View all posts
            </Link>
          </div>
          <div className="blog__list lg:col-span-8">
            <ul className="space-y-6">
              {posts.map((post, index) => (
                <li key={post.id}>
                  <article>
                    <Link href={post.url} className="group block p-4 -m-4 rounded-lg hover:bg-white/5 transition-colors">
                        <p className="text-sm text-gray-400 mb-1">
                          {format(new Date(post.dateISO), "MMMM d, yyyy")}
                        </p>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                    </Link>
                  </article>
                  {index < posts.length - 1 && <Separator className="my-6 bg-gray-700" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
