import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Repeat2, Send } from "lucide-react";
import Image from "next/image";

export function LinkedInPost({ author, hook, metrics, timeAgo }) {
  return (
    <Card className="w-full max-w-xl">
      <div className="p-4 space-y-4">
        {/* Author Section */}
        <div className="flex items-start gap-3">
          <div className="size-12 rounded-full" />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-muted-foreground text-sm truncate">
              {author.title}
            </p>
            <div className="flex items-center gap-1 text-muted-foreground">
              <span className="text-xs">{timeAgo}</span>
              <span className="text-xs">•</span>
              <span className="text-xs">🌐</span>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="space-y-2">
          <p className="text-sm leading-relaxed">
            {hook}
            <button className="text-muted-foreground hover:text-blue-600 hover:underline ml-1">
              ...see more
            </button>
          </p>
        </div>

        {/* Engagement Metrics */}
        <div className="flex items-center gap-1 pt-2 border-t text-muted-foreground">
          <div className="flex -space-x-1">
            <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-[10px] text-white">👍</span>
            </div>
            <div className="h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-[10px] text-white">❤️</span>
            </div>
          </div>
          <span className="text-xs">{metrics.likes}</span>
          <span className="text-xs">•</span>
          <span className="text-xs">{metrics.comments} comments</span>
          <span className="text-xs">•</span>
          <span className="text-xs">{metrics.reposts} reposts</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2 border-t">
          <Button variant="ghost" size="sm" className="flex-1">
            <Heart className="h-4 w-4 mr-2" />
            Like
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <MessageCircle className="h-4 w-4 mr-2" />
            Comment
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <Repeat2 className="h-4 w-4 mr-2" />
            Repost
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </Card>
  );
}
