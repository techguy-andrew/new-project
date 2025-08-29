import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code2, Database, Lock, Palette, Rocket, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="h-6 w-6" />
            <span className="font-bold text-xl">New Project</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <nav className="flex items-center space-x-6">
              <Link
                href="/sign-in"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Sign In
              </Link>
              <Button asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center space-y-6 py-24 md:py-32">
        <div className="flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Build Your Next Project
            <span className="text-primary"> Faster</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A production-ready Next.js template with everything you need to build modern web applications.
            Authentication, database, UI components, and more.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="/sign-up">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Everything You Need
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Built with the best tools and practices for modern web development
          </p>
        </div>

        <div className="mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card>
            <CardHeader>
              <Code2 className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Next.js 15 & TypeScript</CardTitle>
              <CardDescription>
                Built on the latest Next.js with App Router and strict TypeScript for type safety
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Database className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>PostgreSQL & Prisma</CardTitle>
              <CardDescription>
                Production-ready database with Prisma ORM for type-safe database operations
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Clerk Authentication</CardTitle>
              <CardDescription>
                Secure authentication with Clerk, including social logins and user management
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Tailwind CSS & shadcn/ui</CardTitle>
              <CardDescription>
                Beautiful, responsive UI with Tailwind CSS and customizable shadcn/ui components
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Optimized Performance</CardTitle>
              <CardDescription>
                Server components, image optimization, and best practices for lightning-fast apps
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Rocket className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Ready to Deploy</CardTitle>
              <CardDescription>
                Configured for one-click deployment to Vercel with environment variables ready
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Clone this template and start building your next project in minutes
          </p>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/sign-up">
              Create Your Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by Your Agency. The source code is available on GitHub.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}