
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import WordFadeIn from "@/components/magicui/word-fade-in"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">

      <main className="flex-1">
        <section id="about" className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4">
                <WordFadeIn words="About Me" />
                <p className="text-muted-foreground md:text-lg">
                  Hello! I&apos;am Tan Sven, a passionate software engineer with a keen interest in learning from this industry and providing high-quality software. I believe in the power of automation, collaboration, and continuous improvement to deliver high-quality software efficiently.
                </p>
                <h1 className="font-bold text-2xl">
                  Intrest:
                </h1>
                <p>
                  I love learning and exploring, whether it be from reading new books or trying out new technologies. I like engaging myself like most people and I would frequently visit discord and reddit to get updates from people like Theo, Primeagen and Kevin Powell.
                </p>
                <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
                  Traits
                  </AccordionTrigger>
                  <AccordionContent>
                  <b>Strength:</b> My traits as evaluted by CliftonStrengths
                  <br/> Learner: Strong desire to continuously improve and expand knowledge, likely to take on task that requires new knowledge. 
                  <br/> Achiever: Highly driven and constant need for achievement, thriving in places where progress is measurable with clear goals.
                  <br/>
                  Adapatability: Live in the moment and prefer to go with the current flow and situations as it unfolds.
                  <br/>
                  Deliberative: Careful, vigilant and think things through before acting, weighting risk and consider the consequences carefully before making decisions.
                  <br/> Ideation: Facinated by new ideas and contantly thinking about new  ways to approach things, brainstorming as well as imagining possiblities.
                  <br/>
                  <b>
                    Weakness:
                  </b>
                  <br/>
                  I am not inclined in piortizing for long-term planning or refining of ideas of which is something I need to be conciously be working and keeping in mind of. I also lack the drive to continue a task if the difficuly and flow outweighs implementation of the idea.
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
                  width="256"
                  height="346"
                  alt="About Me"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="text-base-content md:text-lg">Check out some of the projects I&apos;ve worked on.</p>
              <p className="font-bold m-5">
                Industry:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>ICPHH</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A decentralized motoko  social and commerce application build over blockchain of ICP, a fully hosted solution.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://qpz2j-jyaaa-aaaam-actrq-cai.icp0.io/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AGEGRACEFULLY</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A social enterprise delivering advanced eldercare products to enrich the lives of seniors with high-tech, high-quality solutions, built on shopify
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="#"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>BIHANCE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    An all in one event planning and management application.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/iamsven2005/bihance"
                      className="btn"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://bihance.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Eduhope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  A non-profit peer-to-peer consult project
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/tch1001/EduHopeSG"
                      className="btn"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://eduhopesg.wixsite.com/eduhopesg"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>NYPTECH</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  A club as a service project to provide IT support for all clubs
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/nyp-tech"
                      className="btn"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="http://nyptech.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>NTUC</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  AI approval system for food label processing.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/iamsven2005/FYP"
                      className="btn"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://ntuc-workflow.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Polling App</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  A realtime voting app for my primary schoom that succesfully handled up to 1000 concurrent connections for a mid-autumn celebration voting activity.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/iamsven2005/student-polling"
                      className="btn"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://student-polling.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Polling App</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  A realtime voting app for my primary schoom that succesfully handled up to 1000 concurrent connections for a mid-autumn celebration voting activity.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/iamsven2005/student-polling"
                      className="btn"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://student-polling.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Lost SG</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  A lost and found app for my local community
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/iamsven2005/lost-n-found"
                      className="btn"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://lost-sg.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="font-bold m-5">
              School Projects:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Book management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Flask application to showcase the use or 20 different sorting and search algorithms.
                    <br/>
                    Algorithms include: AVLtree, hashmap, insert sort,bubble sort,merge sort ,selection sort,linear search, binary search, quick sort,exponential search, heap sort, radix sort, bogo sort, shell sort, Fibonacci Search, introspective sort, tree sort, smooth sort, comb sort
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://ec-admin-red.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                    <Link
                      href="https://www.instagram.com/p/C2aQBhexqNy/"
                      className="btn"
                    >
                      Video
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>House Color Picker</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pick and choose colors for your house and share it with your friends!
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/Vapacly/tree/main/devops"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://youtu.be/aL2ArW0i29k"
                      className="btn"
                    >
                      Video
                    </Link>
                    <Link
                      href="http://d3uudldhs171ka.cloudfront.net/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Social Media App</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                   Webforms hosted on azure, with custom json based database with failover and index features. A custom hand recognition login feature, as well as basic profile changes like secuirty questions and password management. Drag and drop dashboard for admin to manage social media content. Lazy loading of json based data.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/SHAPER"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7200171195667800065/"
                      className="btn"
                    >
                      Video
                    </Link>
                    <Link
                      href="https://shaping.azurewebsites.net/"
                      className="btn"
                    >
                      Website
                    </Link>
                    
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI Car Rental</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                   Nextjs, openai, pgvector, cal, azure iot hub, azure iot edge, redis, Razor C# mvc, vercel ai sdk, AWS cloudfront, AWS S3
                   <br/>
                   A AI generative ui based chat bot, where users can rent car through a chatbot as well as a normal ecommerce base rental. All dates will not overlap with api secuirty handled by auth0. Car recommendation based on data collected by AI and presented with relevant car Jokes and ads. Admin can use AI to track IOT sensors installed on cars.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/IOT-Live-Dashboard"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://www.instagram.com/p/C7b2gFYpAPw/"
                      className="btn"
                    >
                      Video
                    </Link>
                    <Link
                      href="http://iot-live-dashboard.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                    
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mendel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  For my system secuirty project my group decided to do a anon posting website to:
                  -Verify you are a student
                  -Search for post / comments
                  -Like and dislike -post and comments
                  -Admin moderation platforms
                  -Api key generation and service
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/mendel"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://www.instagram.com/p/C-KUwSdpC-f/"
                      className="btn"
                    >
                      Video
                    </Link>
                    <Link
                      href="http://mendel.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                    
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Template Creator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  A document creator adopted by NYP to take in a senate paper and a course integrated folder to produce a uni course template.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/iamsven2005/course-template-nyp"
                      className="btn"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://course-template-nyp.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="font-bold m-5">
              Own Projects
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>SHAPER</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  Twitch cone with live streaming and AI vector search, e-commerce multitenancy and live collaboration drawing tools.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/twitchclone"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://youtu.be/XeWJXU6jcCY"
                      className="btn"
                    >
                      Video
                    </Link>
                    <Link
                      href="http://twitchclone-five.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Google Docs Clone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Simple live collaboration document, with notion style editor.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/notes-liveblocks"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://notes-liveblocks.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce App</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A simple ecommerce app made with TI-DB with category search and sorting, as well  editing reviews
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/iamsven2005/tidb-cloud-starter"
                      className="btn"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="http://tidb-cloud-starter-one-lac.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Notion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                   Notion style ai suggestion and note taking app, stored in memory.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/iamsven2005/notetaker"
                      className="btn"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://notetaker-tan-chi.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>SHOE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                   A shoe website for a networking based CTF challenge over wireshark
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/iamsven2005/ctfshoe/deployments/github-pages"
                      className="btn"
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>RPI3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                   Server room monitoring system with AI server and security monitoring for winforms
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://github.com/iamsven2005/IOT_Project"
                      className="btn"
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Personal Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                   Nextjs Page Router project rendered with mdx files.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://blog-starter-kit-alpha-seven.vercel.app/"
                      className="btn"
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cornerguys</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  A fitness Corner Rating Venture, to rate and post review of fitness corners all over singapore.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://cornerguys05.wixsite.com/hello "
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pure CSS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  Styling a website with only a html style tag.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://iamsven2005.github.io/Vapacly/pure.css.html"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Spacetraders SvelteKit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  My personal SvelteKit app that runs my algorithms for my spacetraders api based gameplay.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/spacetraders-api-gameplay"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://spacetraders-api-gameplay.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>CSS Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  Mock html store with CSS as a database with simple search feature.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://iamsven2005.github.io/Vapacly/cssdatabase.html"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Base64</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  A pure base64 website
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://iamsven2005.github.io/Vapacly/base64.html "
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>SQL frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  My Experiment of using sql as a frontend framework
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://sql-frontend.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                    <Link
                      href="https://github.com/iamsven2005/sql-frontend"
                      className="btn"
                    >
                      Github
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cisco assitant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  AI assitant for cisco network commands with file upload capability. Detects code and allows for download of files
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://img-gen-beta.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                    <Link
                      href="https://yaml-convert.vercel.app/"
                      className="btn"
                    >
                      MVP
                    </Link>
                    <Link
                      href="https://github.com/iamsven2005/img-gen"
                      className="btn"
                    >
                      Github
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Wasm Timer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  A wasm timer made on gcc.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="https://iamsven2005.github.io/c-timer/"
                      className="btn"
                    >
                      Website
                    </Link>
                    <Link
                      href="https://github.com/iamsven2005/c-timer"
                      className="btn"
                    >
                      Github
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Rust Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  My projects to practice rust
                 </p>
                  <div className="flex items-center gap-2 mt-4 flex-wrap">
                  <Link
                      href="https://notes-68616991485.us-central1.run.app/"
                      className="btn"
                    >
                     Full stack rust notetaking app
                    </Link>
                    <Link
                      href="https://github.com/iamsven2005/grep-rust"
                      className="btn"
                    >
                     CLI grep
                    </Link>
                    <Link
                      href="https://github.com/iamsven2005/http-rust"
                      className="btn"
                    >
                      Http Server
                    </Link>
                    <Link
                      href="https://github.com/how-to-commit/rosti"
                      className="btn"
                    >
                      Operating System
                    </Link>
                    <Link
                      href="https://github.com/how-to-commit/chip8-emu"
                      className="btn"
                    >
                      Chip 8 emulator
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
            </div>
            <p className="font-bold m-5">
              Hackathons
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
                <CardHeader>
                  <CardTitle>CodeOverflow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  Diet chatbot  that comes out with carbon-friendly recipes
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/2022hackathon"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://youtu.be/pH5oaVREKG8?si=eyZW9f1A6ALC5vqI"
                      className="btn"
                    >
                      Video
                    </Link>
                    <Link
                      href="https://iamsven2005.github.io/2022hackathon/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>LKYSPP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  An AI interior designer through 360 videos.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/2022hackathon"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://youtu.be/pH5oaVREKG8?si=eyZW9f1A6ALC5vqI"
                      className="btn"
                    >
                      Video
                    </Link>
                    <Link
                      href="https://iamsven2005.github.io/LKY_project/index.html"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Paypal Polyfintech</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  A DMZ based deepfake verifier for scam prevention in bank transactions
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/ElderWee"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://www.instagram.com/p/C88Fii-JO3p/"
                      className="btn"
                    >
                      Video
                    </Link>
                    <Link
                      href="https://elderwee.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>TechJam</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A generative ui based ecommerce store that changes ui based on data collection.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/techjam"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://techjam-sigma.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>LKYGBP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A ai based elaerning platform
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                  <Link
                      href="https://github.com/iamsven2005/new"
                      className="btn"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://new-flame-five.vercel.app/"
                      className="btn"
                    >
                      Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="social" className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Connect with Me</h2>
              <p className="text-muted-foreground md:text-lg">Find me on the following social platforms.</p>
            </div>
            <div className="flex  flex-wrap justify-center gap-4">
              <Link
                href="https://www.youtube.com/channel/UCAeR3lxtEGo9INwLpOLt1Kw"
                className="btn"
              >
                Youtube
              </Link>
              <Link
                href="https://www.linkedin.com/in/tan-sven-496988237/"
                className="btn"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/sven_dev_journal/"
                className="btn"
              >
                Instagram
              </Link>
              <Link
                href="https://t.me/TanSven"
                className="btn"
              >
                Telegram
              </Link>
              <Link
                href="https://github.com/iamsven2005"
                className="btn"
              >
                Github
              </Link>
              <Link
                href="https://codepen.io/iamsven"
                className="btn"
              >
                CodePen
              </Link>
              <Link
                href="/blog"
                className="btn"
              >
                Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
