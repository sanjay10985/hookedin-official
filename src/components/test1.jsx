import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, ChevronRight } from "lucide-react";
import { LinkedInPost } from "@/components/linkedin-post";

export default function LandingPage() {
  const examplePosts = [
    {
      author: {
        name: "Sarah Chen",
        title: "Senior Product Manager | Ex-Google, Meta",
        image: "/placeholder.svg?height=48&width=48",
      },
      hook: "I rejected a $850K job offer yesterday, and here's why it was the best decision of my career...",
      metrics: {
        likes: 3542,
        comments: 284,
        reposts: 127,
      },
      timeAgo: "2h",
    },
    {
      author: {
        name: "Alex Thompson",
        title: "Tech Lead at Spotify | Engineering Leadership",
        image: "/placeholder.svg?height=48&width=48",
      },
      hook: "3 lines of code just saved our company $1.2M in server costs. Here's the exact code snippet:",
      metrics: {
        likes: 4891,
        comments: 432,
        reposts: 891,
      },
      timeAgo: "4h",
    },
    {
      author: {
        name: "Maya Patel",
        title: "Startup Founder | YC W23",
        image: "/placeholder.svg?height=48&width=48",
      },
      hook: "Everyone told me I was crazy to quit my job. 6 months later, my startup hit $1M ARR.",
      metrics: {
        likes: 2891,
        comments: 342,
        reposts: 167,
      },
      timeAgo: "1d",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container  py-24 space-y-12 md:py-32">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Craft
              <span className="text-blue-600"> Irresistible </span>
              LinkedIn Hooks
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Turn scrollers into readers with AI-powered hooks that capture
              attention and drive engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-w-[300px] w-full max-w-[400px]">
              <Input type="email" placeholder="Enter your email" />
              <Button size="lg">
                Join Waitlist
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Example Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {examplePosts.map((post, index) => (
              <LinkedInPost key={index} {...post} />
            ))}
          </div>

          {/* Hook Types */}
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Proven Hook Patterns That Work
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-muted/50">
                <h3 className="font-bold mb-2">🎯 Curiosity Gap</h3>
                <p className="text-sm text-muted-foreground">
                  "I made a $100K mistake at work today. The lesson learned was
                  priceless..."
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted/50">
                <h3 className="font-bold mb-2">📊 Data Hook</h3>
                <p className="text-sm text-muted-foreground">
                  "75% of developers are doing this wrong (I was one of
                  them)..."
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted/50">
                <h3 className="font-bold mb-2">💡 Contrarian</h3>
                <p className="text-sm text-muted-foreground">
                  "Why I stopped using to-do lists (and what I do instead)..."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-muted/50">
          <div className="container py-24 md:py-32">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Hook Your Audience?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join 2,000+ professionals already creating scroll-stopping hooks
              </p>
              <div className="flex flex-col sm:flex-row gap-4 min-w-[300px] w-full max-w-[400px]">
                <Input type="email" placeholder="Enter your email" />
                <Button size="lg">
                  Get Early Access
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Limited spots available for beta access
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <MessageSquare className="h-6 w-6 text-blue-600" />
            <p className="text-center text-sm leading-loose md:text-left">
              Built by{" "}
              <a href="#" className="font-medium underline underline-offset-4">
                HookedIn.live
              </a>
            </p>
          </div>
          <p className="text-center text-sm md:text-left">
            © 2024 HookedIn.live. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
