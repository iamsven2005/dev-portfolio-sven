import Link from "next/link"
import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"
import { highlight } from "sugar-high"
import React from "react"

// Programmatic <Table data={...}/> component
function Table({ data }: any) {
  const headers = data.headers.map((header: any, index: number) => (
    <th key={index}>{header}</th>
  ))

  const rows = data.rows.map((row: any, index: number) => (
    <tr key={index}>
      {row.map((cell: any, cellIndex: number) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table className="border-collapse border border-gray-300 w-full text-sm my-4">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

// Custom link renderer
function CustomLink(props: any) {
  const href = props.href

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

// Rounded <Image />
function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

// Syntax-highlighted <code>
function Code({ children, ...props }: any) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

// Utility: slugify for headings
function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
}

// Dynamic heading creator
function createHeading(level: number) {
  const Heading = ({ children }: any) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`
  return Heading
}

// Components map for MDX
const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,

  // Styled Markdown tables
  table: (props: any) => (
    <table
      className="border-collapse border border-gray-300 w-full text-sm my-4"
      {...props}
    />
  ),
  thead: (props: any) => (
    <thead className="bg-gray-100 font-semibold" {...props} />
  ),
  tr: (props: any) => <tr className="even:bg-gray-50" {...props} />,
  th: (props: any) => (
    <th className="border border-gray-300 px-3 py-2 text-left" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-gray-300 px-3 py-2" {...props} />
  ),

  // Keep custom programmatic <Table data={...} />
  Table,
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
