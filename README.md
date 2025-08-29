# New Project Template - Your Starting Point for Every Client Project

Welcome! This is your agency's standardized template for building web applications. Think of it as your "starter kit" that has everything pre-configured so you can focus on building features for clients instead of setting up projects from scratch.

## 🎯 Why This Template Exists

Building websites and web apps for clients should be fast, consistent, and reliable. This template follows our **"Forever Tech Stack"** philosophy - we use the same proven tools for every project, which means:

- ✅ You learn one set of tools and get better with each project
- ✅ Every project looks familiar, even if different developers work on it
- ✅ No time wasted choosing technologies - decisions are already made
- ✅ Clients get reliable, maintainable applications
- ✅ You can move between projects without relearning everything

## 🚀 Getting Started - Your First Project

### What You'll Need on Your Computer

Before starting, make sure you have these installed:

1. **Node.js** (version 18.17 or newer) - [Download here](https://nodejs.org/)
2. **Git** - [Download here](https://git-scm.com/)
3. **VS Code** (recommended editor) - [Download here](https://code.visualstudio.com/)

### Step 1: Copy This Template for Your New Client

```bash
# Replace "client-name-website" with your actual project name
git clone [this-repository-url] client-name-website
cd client-name-website
```

**What this does:** Creates a new folder with all the template files for your client's project.

### Step 2: Install Everything

```bash
pnpm install
```

**What this does:** Downloads all the code libraries your project needs. This might take a few minutes the first time.

> 📝 **Note:** If prompted about Corepack, type `Y` and press Enter. This ensures you're using the right version of pnpm.

### Step 3: Set Up Your Secret Keys

Every project needs some "secret keys" to work properly. These are like passwords for different services.

```bash
# Copy the example file
cp .env.example .env.local
```

Now open `.env.local` in VS Code and you'll see something like:

```
DATABASE_URL="postgresql://user:password@host:5432/dbname"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
```

You'll need to replace these with real values (see "Setting Up Services" below).

### Step 4: Start Building!

```bash
pnpm dev
```

**What this does:** Starts your website locally. Open [http://localhost:3000](http://localhost:3000) in your browser to see it!

## 🔧 Setting Up Services (One-Time Setup)

### Database (Where Your Data Lives)

1. Go to [Neon.tech](https://neon.tech) and create a free account
2. Click "Create Database"
3. Copy the connection string (starts with `postgresql://`)
4. Paste it in your `.env.local` file for both `DATABASE_URL` and `DATABASE_URL_UNPOOLED`

### Authentication (User Login System)

1. Go to [Clerk.com](https://clerk.com) and create a free account
2. Create a new application
3. Copy your API keys from the dashboard
4. Paste them in your `.env.local` file

### Connect Your Database

After setting up your database credentials, run:

```bash
pnpm db:push
```

**What this does:** Creates the tables in your database where data will be stored.

## 📁 Where Everything Lives

```
your-client-project/
├── src/app/           # All your pages go here
│   ├── page.tsx       # Homepage (what users see first)
│   ├── (auth)/        # Login & signup pages
│   └── (dashboard)/   # Pages for logged-in users
├── src/components/    # Reusable pieces of UI
│   └── ui/           # Buttons, cards, forms, etc.
├── prisma/           # Database structure
└── public/           # Images, fonts, downloads
```

### Key Concept: Everything is organized the same way in every project!

## 🎨 Common Tasks

### Adding a New Page

1. Create a new folder in `src/app/` with your page name
2. Add a `page.tsx` file inside
3. Example for an "About" page:

```bash
# Create the folder and file
mkdir src/app/about
touch src/app/about/page.tsx
```

Then add this code to `page.tsx`:

```typescript
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Information about the company goes here.</p>
    </div>
  )
}
```

Your page is now available at `http://localhost:3000/about`!

### Making Changes to the Homepage

Open `src/app/page.tsx` and edit the content between the `return` statement. Save the file and your browser will automatically update!

### Adding a New Component

Components are reusable pieces (like a custom button that appears on multiple pages):

1. Create a new file in `src/components/`
2. Example - a hero section:

```typescript
// src/components/hero.tsx
export function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
      <p className="text-gray-600 mt-4">Your tagline here</p>
    </section>
  )
}
```

Use it in any page:

```typescript
import { Hero } from '@/components/hero'

export default function Page() {
  return <Hero />
}
```

### Styling with Tailwind CSS

Instead of writing CSS files, we use Tailwind classes directly in our components:

```typescript
// Instead of creating a CSS file with:
// .button { background: blue; color: white; padding: 8px 16px; }

// We write:
<button className="bg-blue-500 text-white px-4 py-2">
  Click me
</button>
```

Common classes:
- `p-4` = padding
- `m-4` = margin  
- `text-xl` = larger text
- `font-bold` = bold text
- `bg-blue-500` = blue background
- `rounded` = rounded corners

## 🛠️ Available Commands

Run these in your terminal while in the project folder:

```bash
pnpm dev          # Start development (view your site locally)
pnpm build        # Prepare for production (before deploying)
pnpm lint         # Check for code issues
pnpm db:studio    # View/edit your database in a visual interface
```

## 📚 Understanding the Stack (What We Use and Why)

Following our **"Forever Tech Stack"** philosophy, every project uses:

### Core Technologies (Always Used)

- **Next.js**: The framework that powers everything (like WordPress but for modern apps)
- **TypeScript**: JavaScript with spell-check - catches errors before they happen
- **PostgreSQL**: Database where all your data is stored (users, posts, etc.)
- **Prisma**: Tool that makes database operations simple and safe
- **Tailwind CSS**: Styling system - no need to write CSS files
- **Clerk**: Handles all user authentication (login, signup, passwords)
- **Vercel**: Where we deploy websites (makes them live on the internet)

### Why These Specific Tools?

We chose these tools because they:
- Work well together without conflicts
- Have excellent documentation and community support
- Scale from simple sites to complex applications
- Are actively maintained and improved
- Let us build fast without sacrificing quality

## 🚫 What NOT to Do (Important!)

Following our philosophy, avoid these:

- ❌ **Don't install different UI libraries** - Use shadcn/ui components only
- ❌ **Don't create custom authentication** - Clerk handles this
- ❌ **Don't use different databases** - PostgreSQL for everything
- ❌ **Don't add CSS-in-JS libraries** - Tailwind only
- ❌ **Don't create microservices** - Keep it simple with one app
- ❌ **Don't mix component systems** - Consistency is key

## 🐛 Troubleshooting

### "Command not found: pnpm"

Node.js comes with pnpm through Corepack. Enable it:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### "Cannot connect to database"

1. Check your `.env.local` file has the correct `DATABASE_URL`
2. Make sure your database is active on Neon.tech
3. Run `pnpm db:push` to sync the schema

### "Clerk authentication not working"

1. Verify your Clerk keys in `.env.local`
2. Check that URLs match in Clerk dashboard:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in URL: `/dashboard`

### Page not updating when you save

1. Make sure `pnpm dev` is running in your terminal
2. Check for errors in the terminal
3. Try refreshing your browser

## 🚀 Deploying (Making It Live)

When your client's site is ready:

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add your environment variables (from `.env.local`)
5. Click "Deploy"

Your site will be live in minutes with a URL like `https://your-project.vercel.app`

## 📖 Learning Resources

New to these technologies? Start here:

- **Next.js**: [Learn Next.js](https://nextjs.org/learn) - Official interactive tutorial
- **TypeScript**: [TypeScript for JavaScript Developers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- **Tailwind CSS**: [Tailwind CSS Docs](https://tailwindcss.com/docs) - Search any class
- **Prisma**: [Prisma Getting Started](https://www.prisma.io/docs/getting-started)

## 💡 Project Workflow

### Starting a New Feature

1. Create a new branch: `git checkout -b feature-name`
2. Make your changes
3. Test locally with `pnpm dev`
4. Commit your changes: `git add . && git commit -m "Add new feature"`
5. Push to GitHub: `git push origin feature-name`

### Daily Development Flow

```bash
# Morning - start working
git pull origin main     # Get latest changes
pnpm install             # Update dependencies if needed
pnpm dev                 # Start development

# Throughout the day - save your work
git add .
git commit -m "Describe what you changed"
git push

# End of day
git push                 # Make sure everything is saved
```

## 🤝 Getting Help

- **Documentation Issues**: Check this README first
- **Code Problems**: Look for error messages in your terminal or browser console
- **Stack-Specific Questions**: Each technology has great docs (links above)
- **Team Support**: Ask in your team chat - we all use the same stack!

## 📝 Final Notes

Remember: The power of this template is in its **consistency**. Every project uses the same structure, same tools, and same patterns. This means:

- You get faster with each project
- Any team member can jump into any project
- Clients get reliable, maintainable applications
- You spend time building features, not configuring tools

Welcome to sustainable, scalable web development! 🚀

---

*Built following the "Forever Tech Stack" philosophy - One stack, mastered deeply, applied consistently.*