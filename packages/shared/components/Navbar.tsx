import { Button } from "@workspace/ui/components/button"
import type { FC } from "react"

interface NavbarProps {
    title: string
}

export const Navbar: FC<NavbarProps> = ({ title }) => {
    return (
        <nav className=" text-primary-foreground p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <Button>Login</Button>
        </nav>
    )
}

