import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { posts as mockPosts } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function BlogSection() {
  // TODO: Replace mock data with data from Firestore.
  // This is a Server Component, so you can fetch data directly here.
  const posts = mockPosts;

  return (
    <section id="blog" className="blog-section py-20 lg:py-32 bg-secondary/30" aria-labelledby="blog-title">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="blog__header lg:col-span-1">
            <h2 id="blog-title" className="text-3xl lg:text-4xl font-bold mb-4 font-headline">
              Latest Blogs
            </h2>
            <Link href="#" className="text-primary hover:underline inline-flex items-center gap-2 group">
              View all posts
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="blog__list lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {posts.map((post, index) => (
                    <li key={post.id} className="post-item">
                      <article>
                        <Link href={post.url} className="group block">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground whitespace-nowrap">
                              <time dateTime={post.dateISO}>
                                {format(new Date(post.dateISO), "MMMM d, yyyy")}
                              </time>
                              <span>{post.readMins} min read</span>
                            </div>
                          </div>
                        </Link>
                      </article>
                      {index < posts.length - 1 && <Separator className="mt-4" />}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
