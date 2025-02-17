import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import InputDemo from "./input-demo";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-24 md:py-32">
      <div className="relative w-full">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl opacity-20" />
        </div>
        <div className="flex flex-col items-center text-center space-y-8  mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Craft LinkedIn hooks that{" "}
              <span className="inline-block bg-gradient-to-r from-[#C47D19] to-[#E5A44D] bg-clip-text text-transparent">
                capture attention
              </span>
            </h1>
            {/* <p className="mx-auto max-w-[600px] text-lg text-muted-foreground md:text-sm">
              Transform your LinkedIn content with AI-powered hooks that drive
              engagement and grow your audience
            </p> */}
          </div>
          <InputDemo />

          {/* <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/waitlist">
              <Button size="lg" className="min-w-[200px] group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Learn More
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
