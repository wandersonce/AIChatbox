import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-[400px] h-[700px]">
        <CardHeader>
          <CardTitle>Chat Ai</CardTitle>
          <CardDescription>Using Vercel SDK to create chat bot.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Messages</p>
        </CardContent>
        <CardFooter>
          Form
        </CardFooter>
      </Card>
    </div>
  )
}
