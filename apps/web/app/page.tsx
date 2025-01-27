import { Navbar } from "@workspace/shared"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Navbar title="Navbar" />
        <Button size="sm">Button</Button>
        <Card>
          <h2 className="text-lg font-bold">Card</h2>
          <p>Card content</p>
        </Card>
      </div>
    </div>
  )
}
