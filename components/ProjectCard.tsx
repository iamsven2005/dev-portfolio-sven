import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { GripVertical } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  github?: string
  website?: string
  video?: string
  links?: Array<{ name: string; url: string }>
  dragHandleProps?: any
}

export function ProjectCard({ title, description, github, website, video, links }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap items-center gap-2 mt-auto">
          {github && (
            <Link href={github} className="btn btn-sm">
              GitHub
            </Link>
          )}
          {website && (
            <Link href={website} className="btn btn-sm">
              Website
            </Link>
          )}
          {video && (
            <Link href={video} className="btn btn-sm">
              Video
            </Link>
          )}
          {links &&
            links.map((link, index) => (
              <Link key={index} href={link.url} className="btn btn-sm">
                {link.name}
              </Link>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

