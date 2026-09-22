import type { Metadata } from "next";
import { Suspense } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import {
  BlogListing,
  BlogListingFromSearch,
} from "@/components/template/blog-listing";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Velora UI",
  description:
    "Engineering notes, design decisions and announcements from Velora UI.",
};

export default function BlogPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Notes from the <span className="text-primary">build</span>
          </>
        }
        description="Engineering notes, design decisions and announcements — written while building Velora in public. The blog itself is part of the free template, MDX pipeline included."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Suspense fallback={<BlogListing posts={blogPosts} />}>
            <BlogListingFromSearch posts={blogPosts} />
          </Suspense>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
