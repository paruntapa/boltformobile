import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider"
import { Figtree } from "next/font/google"
import { cn } from '@/lib/utils'
import { meta } from '@/lib/constants'
import { Particles } from '@repo/ui/particles'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from "@/components/app-sidebar";

const figtree = Figtree({
	variable: "--font-figtree",
	subsets: ["latin"],
	weight: "300",
});

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={cn(`font-sans selection:bg-teal-400/70 selection:text-white dark:selection:bg-teal-200/20 dark:selection:text-teal-200 antialiased`,
						figtree.variable
					)}
				>
					<Particles
						quantityDesktop={350}
						quantityMobile={100}
						ease={80}
						color={"#4567e4"}
						refresh
					/>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>

						<SidebarProvider defaultOpen={false} className="relative rounded-full">
							<AppSidebar />
							{children}
						</SidebarProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
  );
}
