
//@ts-nocheck
"use client"

import { useState } from "react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import WordFadeIn from "@/components/magicui/word-fade-in"
import Image from "next/image"
import projectData from "./projectData.json"
import { ProjectCard } from "@/components/ProjectCard"
import Jobs from "./list"

export default function Portfolio() {
  const [projects, setProjects] = useState(projectData)

  const socialLinks = [
    { name: "Youtube", url: "https://www.youtube.com/channel/UCAeR3lxtEGo9INwLpOLt1Kw" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tan-sven-496988237/" },
    { name: "Instagram", url: "https://www.instagram.com/sven_dev_journal/" },
    { name: "Telegram", url: "https://t.me/TanSven" },
    { name: "Github", url: "https://github.com/iamsven2005" },
    { name: "CodePen", url: "https://codepen.io/iamsven" },
    { name: "Blog", url: "/blog" },
  ]



  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section id="about" className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4">
                <WordFadeIn words="About Me" />
                <p className="text-muted-foreground md:text-lg">
                  Hello! I&apos;m Tan Sven, a passionate software engineer with a keen interest in learning from this
                  industry and providing high-quality software. I believe in the power of automation, collaboration, and
                  continuous improvement to deliver high-quality software efficiently.
                </p>
                <h2 className="font-bold text-2xl">Interest:</h2>
                <p>
                  I love learning and exploring, whether it be from reading new books or trying out new technologies. I
                  like engaging myself like most people and I would frequently visit discord and reddit to get updates
                  from people like Theo, Primeagen and Kevin Powell.
                </p>
                <Link href={"/blog"} className="btn">Blog</Link>
              <Link href={"/blog"} className="btn">Resume</Link>
              <Link href={"https://drive.google.com/file/d/1v-3Qfgzw8qhzKySDrRkRKl1ujTLe7ZqL/view?usp=sharing"} className="btn">Testimonial</Link>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Traits</AccordionTrigger>
                    <AccordionContent>
                      <b>Strength:</b> My traits as evaluated by CliftonStrengths
                      <br /> Learner: Strong desire to continuously improve and expand knowledge, likely to take on
                      tasks that require new knowledge.
                      <br /> Achiever: Highly driven and constant need for achievement, thriving in places where
                      progress is measurable with clear goals.
                      <br />
                      Adaptability: Live in the moment and prefer to go with the current flow and situations as they
                      unfold.
                      <br />
                      Deliberative: Careful, vigilant and think things through before acting, weighing risks and
                      considering the consequences carefully before making decisions.
                      <br /> Ideation: Fascinated by new ideas and constantly thinking about new ways to approach
                      things, brainstorming as well as imagining possibilities.
                      <br />
                      <b>Weakness:</b>
                      <br />I am not inclined to prioritize long-term planning or refining of ideas, which is something
                      I need to be consciously working on and keeping in mind. I also lack the drive to continue a task
                      if the difficulty and flow outweighs implementation of the idea.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-wrap gap-5 items-center justify-center mx-auto">
                  <div className="bg-base-200 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold">3+</p>
                    <p>Years of Experience</p>
                  </div>
                  <div className="bg-base-200 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold">20+</p>
                    <p>Completed Projects</p>
                  </div>
                  <div className="bg-base-200 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold">3</p>
                    <p>Certifications</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <Image
                  src="/image.png"
                  width={256}
                  height={346}
                  alt="About Me"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <Jobs/>
        <section id="projects" className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="text-base-content md:text-lg">Check out some of the projects I&apos;ve worked on.</p>
            </div>
              {["industry", "school", "personal", "hackathons"].map((category) => (
                <div key={category}>
                  <h3 className="font-bold text-2xl mt-8 mb-4 capitalize">{category} Projects</h3>

                      <div
                       
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {projects[category].map((project: any, index: number) => (


                                <ProjectCard {...project} key={index} />
                            )
                        )}
                      </div>
                </div>
              ))}
          </div>
        </section>

        <section id="social" className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Connect with Me</h2>
              <p className="text-muted-foreground md:text-lg">Find me on the following social platforms.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.url} className="btn">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

