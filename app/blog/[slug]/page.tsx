import { notFound } from "next/navigation"
import { CustomMDX } from "@/components/mdx"
import { formatDate, getBlogPosts } from "../utils"
import { baseUrl } from "@/app/sitemap"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ClipboardLink from "@/components/clipboard"

type BlogProps = {
  params: {
    slug: string
  }
}

/**
 * Convert Markdown pipe tables into <Table data={...}/> components
 */
function parseMarkdownTables(content: string): string {
  const tableRegex = /((?:\|.*\|\s*\n)+)/g

  return content.replace(tableRegex, (match) => {
    const lines = match
      .trim()
      .split("\n")
      .filter((l) => l.trim().startsWith("|"))

    if (lines.length < 2) return match // not a valid table

    // Header row
    const headers = lines[0]
      .split("|")
      .map((h) => h.trim())
      .filter(Boolean)

    // Skip the separator (2nd line), parse the rest
    const rows = lines.slice(2).map((line) =>
      line
        .split("|")
        .map((c) => c.trim())
        .filter(Boolean)
    )

    return `<Table data={${JSON.stringify({ headers, rows })}} />`
  })
}

export default function Blog({ params }: BlogProps) {
  const post = getBlogPosts().find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const { metadata, slug } = post
  // preprocess tables before passing to MDX
  const processedContent = parseMarkdownTables(post.content)
  const postUrl = `${baseUrl}/blog/${slug}`

  return (
    <section className="mx-auto flex flex-col p-5 m-5 items-center justify-center">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: metadata.title,
            datePublished: metadata.publishedAt,
            dateModified: metadata.publishedAt,
            description: metadata.summary,
            image: metadata.image
              ? `${baseUrl}${metadata.image}`
              : `/og?title=${encodeURIComponent(metadata.title)}`,
            url: postUrl,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />

      {/* Title */}
      <h1 className="font-semibold text-2xl tracking-tighter">
        {metadata.title}
      </h1>

      {/* Date */}
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {formatDate(metadata.publishedAt)}
        </p>
      </div>

      {/* Share / copy link */}
      <ClipboardLink url={postUrl} />

      {/* Blog content */}
      <article className="prose dark:prose-invert">
        <CustomMDX source={processedContent} />

        <Button asChild variant="link" className="mt-6">
          <Link href="/blog">Back to blogs</Link>
        </Button>
      </article>
    </section>
  )
}
