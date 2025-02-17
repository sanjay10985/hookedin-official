import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center">
        <Link href="/" className="flex items-center gap-2">
          {/* <MessageSquare className="h-5 w-5" /> */}
          <Image
            alt="logo"
            width={100}
            height={40}
            className="w-full"
            src="/hooked-logo.png"
          />
          {/* <span className="text-lg font-medium">HookedIn</span> */}
        </Link>
        {/* <nav className="hidden md:flex items-center gap-8"> */}
        {/* <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/app"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            App
          </Link> */}
        {/* <Link href="/waitlist">
            <Button variant="ghost" className="group">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </nav>
        <Link href="/waitlist" className="md:hidden">
          <Button variant="ghost" size="sm">
            Join Waitlist
          </Button>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
