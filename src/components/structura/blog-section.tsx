import Link from "next/link";
import { format } from "date-fns";
import { posts as mockPosts } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function BlogSection() {
  const posts = mockPosts;

  return (
    <Section id="blog" className="bg-[#111111] text-white" aria-labelledby="blog-title">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="blog__header lg:col-span-4 lg:sticky top-24 self-start">
            <p className="text-accent font-semibold mb-2">BLOG</p>
            <h2 id="blog-title" className="text-3xl lg:text-4xl font-bold mb-4">
              Latest Blogs
            </h2>
          </div>
          <div className="blog__list lg:col-span-8">
            <ul className="space-y-6">
              {posts.map((post, index) => (
                <li key={post.id}>
                  <article>
                    <Link href={post.url} className="group block py-4">
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-sm text-gray-400">
                            {format(new Date(post.dateISO), "MMMM d, yyyy")}
                            </p>
                            <p className="text-sm text-gray-400">{post.readMins} min read</p>
                        </div>
                        <h3 className="text-xl font-bold group-hover:underline transition-colors mb-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-accent font-semibold">
                            <span>Read more</span>
                            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                    </Link>
                  </article>
                  {index < posts.length - 1 && <Separator className="my-2 bg-gray-700" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
