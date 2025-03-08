"use client"

import { Button } from "./ui/button";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function Appbar() {
  const { setTheme } = useTheme()
  return (
    <div className="flex justify-between px-2 py-1">
      <div>Mobolten</div>
      <div className=" flex flex-row gap-3">
      <div >
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    <div className="mt-0.5">
        <SignedOut>
            <SignInButton />
            <SignUpButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
        </div>
      </div>
    </div>
  );
}