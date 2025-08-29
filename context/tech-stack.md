# **Tech Stack: Core Requirements**

## **Core Stack (Required)**

1. **Next.js 15** (App Router)
2. **TypeScript 5.3+** (Strict mode)
3. **PostgreSQL** (Neon)
4. **Prisma** (ORM + migrations)
5. **Tailwind CSS 3.4+**
6. **shadcn/ui** (Copy components, not npm install)
7. **Native CSS Animations**
8. **Clerk** (Authentication)
9. **Vercel** (Deployment)
10. **pnpm** (Package manager)

## **Extended Stack (Add Only When Needed)**

### **Type Safety & Validation**
- tRPC
- Zod

### **State Management**
- TanStack Query
- Zustand

### **Form Management**
- React Hook Form

### **Additional shadcn/ui Components**
- table, data-table, calendar, date-picker
- navigation-menu, breadcrumb, pagination
- progress, skeleton, spinner
- select, textarea, checkbox, radio-group, switch, slider

### **Testing**
- Vitest
- Playwright

### **Services**
- Upstash Redis
- Resend
- Uploadthing
- Stripe
- Pusher/Ably

### **Monitoring**
- Sentry
- PostHog

## **Standardized Project Structure**

```
project-name/
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── sign-in/page.tsx
│   │   │   ├── sign-up/page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── settings/page.tsx
│   │   │   └── layout.tsx
│   │   ├── api/
│   │   │   ├── webhooks/
│   │   │   └── trpc/[trpc]/route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── auth/            # Authentication components
│   │   ├── dashboard/       # Dashboard components
│   │   └── shared/          # Reusable components
│   ├── lib/
│   │   ├── db.ts            # Prisma client
│   │   ├── auth.ts          # Clerk config
│   │   ├── utils.ts         # Utilities
│   │   ├── validations.ts   # Zod schemas
│   │   └── constants.ts     # Constants
│   ├── server/              # tRPC routers
│   │   ├── api/routers/
│   │   ├── api/root.ts
│   │   └── db/
│   ├── types/               # TypeScript types
│   └── hooks/               # Custom hooks
├── public/
├── .env.example
├── .env.local
├── components.json          # shadcn/ui config
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## **Anti-Patterns (Never)**

1. Multiple component systems
2. Custom Radix UI implementations
3. CSS-in-JS libraries
4. Multiple ORMs
5. Custom authentication
6. Microservices
7. GraphQL
8. Installing shadcn/ui as dependency
9. Mixing UI libraries

## **Setup Checklist**

- [ ] `pnpm create next-app@latest [project] --typescript --tailwind --app`
- [ ] `pnpm add @prisma/client @clerk/nextjs`
- [ ] `pnpm add -D prisma`
- [ ] `npx shadcn-ui@latest init`
- [ ] `npx shadcn-ui@latest add button input label card dialog form toast`
- [ ] Set up Neon database
- [ ] Configure Clerk
- [ ] Connect Vercel
- [ ] `pnpm prisma init`
- [ ] Create folder structure