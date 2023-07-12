import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min_content]">
        <CardHeader>
          <CardTitle>Chat Ai</CardTitle>
          <CardDescription>Using Vercel SDK to create chat bot.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Avatar>
              <AvatarFallback>WC</AvatarFallback>
              <AvatarImage src="https://github.com/wandersonce.png"/>
            </Avatar>
          </div>
          <div>
          <Avatar>
              <AvatarFallback>BG</AvatarFallback>
              <AvatarImage src="https://i.ibb.co/G73jXss/cc6821213daaca6520ee63ac94c3180c.jpg"/>
          </Avatar>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?"/>
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
