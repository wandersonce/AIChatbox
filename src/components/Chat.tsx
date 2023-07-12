'use client'
import { useChat } from 'ai/react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Card className="w-[440px] h-[700px] bg-white grid grid-rows-[min-content_1fr_min_content]">
    <CardHeader>
      <CardTitle>Chat Ai</CardTitle>
      <CardDescription>Using Vercel SDK to create chat bot.</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className=" flex gap-3 text-slate-600 text-sm">
        <Avatar>
          <AvatarFallback>WC</AvatarFallback>
          <AvatarImage src="https://github.com/wandersonce.png"/>
        </Avatar>
        <p className="leading-relaxed">
          <span className="block font-bold text-slate-700">You:</span>
          What's your opinion about JS?
        </p>
      </div>
      <div className=" flex gap-3 text-slate-600 text-sm">
      <Avatar>
          <AvatarFallback>BG</AvatarFallback>
          <AvatarImage src="https://i.ibb.co/G73jXss/cc6821213daaca6520ee63ac94c3180c.jpg"/>
      </Avatar>
      <p className="leading-relaxed">
          <span className="block font-bold text-slate-700">BamGames AI:</span>
          What's your opinion about JS?
        </p>
      </div>
    </CardContent>
    <CardFooter className="space-x-2">
      <Input placeholder="How can I help you?"/>
      <Button type="submit">Send</Button>
    </CardFooter>
  </Card>
  )
}

export default Chat