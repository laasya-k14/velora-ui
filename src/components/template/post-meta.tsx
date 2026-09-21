import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { blogCategoryHref } from "@/lib/blog-posts";

interface PostMetaProps {
  date: string;
  category: string;
  readingTime: string;
}

/** Byline row rendered at the top of each MDX blog post. */
export function PostMeta({ date, category, readingTime }: PostMetaProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
      <Badge
        asChild
        className="bg-primary/15 text-primary hover:bg-primary/15 [a]:hover:bg-primary/20"
      >
        <Link href={blogCategoryHref(category)}>{category}</Link>
      </Badge>
      <time>{date}</time>
      <span aria-hidden>·</span>
      <span>{readingTime}</span>
    </div>
  );
}
