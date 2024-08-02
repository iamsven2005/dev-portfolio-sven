
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
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
                  I love reading, from guidebooks to best practices, I spend me free time delving deep into a better understanding of how to constantly update myself. I also like customizing my Neovim extensions to make myself feel more at home.
                </p>
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
                    A HR all in one-solution startup made with cross-disciplinary friends.
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
                  <CardTitle></CardTitle>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
