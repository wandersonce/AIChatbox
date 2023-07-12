'use client'
import { useChat } from 'ai/react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api:'/api/chat',
  })

  return (
    <Card className="w-[440px] h-[700px] bg-white grid grid-rows-[min-content_1fr_min_content]">
    <CardHeader>
      <CardTitle>Chat Ai</CardTitle>
      <CardDescription>Using Vercel SDK to create chat bot.</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {messages.map(message => {
        return(
          <div key={message.id} className=" flex gap-3 text-slate-600 text-sm">
            {message.role === 'user' && (
            <Avatar>
              <AvatarFallback>WC</AvatarFallback>
              <AvatarImage src="https://github.com/wandersonce.png"/>
            </Avatar>
            )}

            {message.role === 'assistant' && (
            <Avatar>
              <AvatarFallback>BG</AvatarFallback>
              <AvatarImage src="https://i.ibb.co/G73jXss/cc6821213daaca6520ee63ac94c3180c.jpg"/>
            </Avatar>
            )}

          <p className="leading-relaxed">
            <span className="block font-bold text-slate-700">
              {message.role === 'user' ? 'You:' : 'AI'}
            </span>
            {message.content}
          </p>
        </div>
        )
      })}

    </CardContent>
    <CardFooter>
      <form className="w-full flex gap-2" onSubmit={handleSubmit}>
      <Input value={input} onChange={handleInputChange} placeholder="How can I help you?"/>
      <Button type="submit">Send</Button>
      </form>
    </CardFooter>
  </Card>
  )
}

export default Chat