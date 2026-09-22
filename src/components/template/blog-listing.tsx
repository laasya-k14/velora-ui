"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/velora/blur-fade";
import { cn } from "@/lib/utils";
import {
  blogCategories,
  blogCategoryHref,
  findBlogCategory,
  type BlogPost,
} from "@/lib/blog-posts";

function CategoryChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      scroll={false}
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex h-8 items-center rounded-full border px-3 text-sm font-medium transition-colors",
        active
          ? "border-primary/30 bg-primary/15 text-primary"
          : "bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
}

export function BlogListing({
  posts,
  activeCategory,
}: {
  posts: BlogPost[];
  activeCategory?: string;
}) {
  const filtered = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts;

  return (
    <div className="space-y-6">
      <nav
        aria-label="Filter by category"
        className="flex flex-wrap items-center gap-2"
      >
        <CategoryChip href={blogCategoryHref()} active={!activeCategory}>
          All
        </CategoryChip>
        {blogCategories.map((category) => (
          <CategoryChip
            key={category}
            href={blogCategoryHref(category)}
            active={activeCategory === category}
          >
            {category}
          </CategoryChip>
        ))}
      </nav>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border bg-card p-8 text-center">
          <p className="text-sm text-muted-foreground">
            No posts in this category yet.
          </p>
        </div>
      ) : (
        filtered.map((post, i) => (
          <BlurFade key={post.slug} delay={Math.min(i * 0.1, 0.3)}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <Badge className="bg-primary/15 text-primary hover:bg-primary/15">
                  {post.category}
                </Badge>
                <time dateTime={post.dateISO}>{post.date}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-balance group-hover:text-primary lg:text-2xl">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read post
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </BlurFade>
        ))
      )}
    </div>
  );
}

/** Reads `?category=` on the client so /blog stays statically exportable. */
export function BlogListingFromSearch({ posts }: { posts: BlogPost[] }) {
  const searchParams = useSearchParams();
  const activeCategory = findBlogCategory(searchParams.get("category"));

  return <BlogListing posts={posts} activeCategory={activeCategory} />;
}
