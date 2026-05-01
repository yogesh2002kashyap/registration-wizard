<div align="center">

# 🧙‍♂️ Registration Wizard

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Level-Beginner%20→%20Advanced-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/Forms-React%20Hook%20Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Completed-success?style=flat-square" />
</p>

<br/>

> **A multi-step onboarding wizard** built from scratch — progressing from raw React state management all the way to industry-standard form handling with RHF + Zod.

<br/>

[🚀 Live Demo](#) · [📖 Prompt Log](./Prompt.md) · [🐛 Report Bug](#)

</div>

---

## 📸 Preview

```
┌─────────────────────────────────┐
│  Create account                 │
│  Step 1 of 3                    │
│  ████████░░░░░░░░░░░░░░░  33%   │
│                                 │
│  PERSONAL INFO                  │
│  ┌──────────────┐ ┌──────────┐  │
│  │  First name  │ │Last name │  │
│  └──────────────┘ └──────────┘  │
│  ┌──────────────────────────┐   │
│  │    Date of birth         │   │
│  └──────────────────────────┘   │
│                      [ Next → ] │
└─────────────────────────────────┘
```

---

## ✨ Features

| Feature | Level |
|---|---|
| 🔀 Multi-step wizard with conditional rendering | ⭐ Level 1 |
| 💾 Persistent state across steps — no data loss | ⭐ Level 1 |
| 📋 Review screen before final submission | ⭐ Level 1 |
| 🎉 Success screen after submit | ⭐ Level 1 |
| ✅ Real-time inline field validation | ⭐⭐ Level 2 |
| 🚫 Next button disabled until step is valid | ⭐⭐ Level 2 |
| 👁️ Show / Hide password toggle | ⭐⭐ Level 2 |
| 📊 Visual progress bar | ⭐⭐ Level 2 |
| 🏗️ React Hook Form — zero unnecessary re-renders | ⭐⭐⭐ Level 3 |
| 🛡️ Zod schema validation | ⭐⭐⭐ Level 3 |
| 🔗 Cross-field password confirmation via `.refine()` | ⭐⭐⭐ Level 3 |
| 🎯 Per-step validation with `trigger()` | ⭐⭐⭐ Level 3 |
| 🎨 Minimal neutral UI with Tailwind CSS | All levels |

---

## 🗂️ Project Structure

```
📦 registration-wizard
├── 📁 src
│   ├── 📁 components
│   │   ├── 🧩 Wizard.tsx        # Parent — owns form state & navigation
│   │   ├── 🧩 StepOne.tsx       # Personal info (name, DOB)
│   │   ├── 🧩 StepTwo.tsx       # Account details + password toggle
│   │   └── 🧩 StepThree.tsx     # Review & submit
│   ├── 📁 utils
│   │   ├── 📄 schema.ts         # Zod schema + auto-generated FormData type
│   │   └── 📄 validators.ts     # Manual validators (Level 2 reference)
│   ├── ⚛️  App.tsx
│   └── 🚀 main.tsx
├── 📄 index.html
├── 📄 vite.config.ts
└── 📄 package.json
```

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center"><img src="https://skillicons.dev/icons?i=react" width="40"/><br/><b>React 18</b><br/><sub>UI Framework</sub></td>
    <td align="center"><img src="https://skillicons.dev/icons?i=ts" width="40"/><br/><b>TypeScript</b><br/><sub>Type Safety</sub></td>
    <td align="center"><img src="https://skillicons.dev/icons?i=vite" width="40"/><br/><b>Vite</b><br/><sub>Build Tool</sub></td>
    <td align="center"><img src="https://skillicons.dev/icons?i=tailwind" width="40"/><br/><b>Tailwind CSS</b><br/><sub>Styling</sub></td>
  </tr>
</table>

**Form Libraries:**

| Package | Version | Purpose |
|---|---|---|
| `react-hook-form` | latest | Performant form state management |
| `zod` | latest | TypeScript-first schema validation |
| `@hookform/resolvers` | latest | Connects Zod schema to RHF |

---

## 🚀 Getting Started

### Prerequisites

![Node](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-latest-CB3837?logo=npm&logoColor=white)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yogesh2002kashyap/registration-wizard.git

# 2. Navigate into the project
cd registration-wizard

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) 🎉

### Build for Production

```bash
npm run build
```

---

## 🏗️ Architecture

### How State Flows

```
┌──────────────────────────────────────────────┐
│                  Wizard.tsx                  │
│           useForm() — single source          │
│     register   errors   watch   trigger      │
└────────┬──────────────┬──────────────┬───────┘
         │ props        │ props        │ props
   ┌─────▼──────┐ ┌─────▼──────┐ ┌────▼───────┐
   │  StepOne   │ │  StepTwo   │ │  StepThree │
   │  Personal  │ │  Account   │ │   Review   │
   └────────────┘ └────────────┘ └────────────┘
```

### Validation Flow

```
User types
  → RHF tracks value internally (no useState per field)
      → Zod schema validates on every change
          → errors surface via formState.errors
              → trigger() fires on Next click
                  → only advances if all step fields pass
```

### Per-Step Validation — the key pattern

```ts
async function next() {
  if (currentStep === 0) {
    // Only validate Step 1 fields
    const isValid = await trigger(["firstName", "lastName", "dateOfBirth"]);
    if (isValid) setCurrentStep(prev => prev + 1);
  } else if (currentStep === 1) {
    // Only validate Step 2 fields
    const isValid = await trigger(["email", "password", "confirmPassword"]);
    if (isValid) setCurrentStep(prev => prev + 1);
  }
}
```

### Cross-field Validation with `.refine()`

```ts
export const registrationSchema = z.object({
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[!@#$%^&*]/, "Must contain at least one special character"),
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  { message: "Passwords do not match", path: ["confirmPassword"] }
);
```

### Auto-generated TypeScript Types

```ts
// ❌ Before — written manually, can drift from validation rules
interface FormData {
  email: string;
  password: string;
}

// ✅ After — Zod generates it automatically, always in sync
export type FormData = z.infer<typeof registrationSchema>;
```

---

## 📈 Difficulty Progression

```
⭐ Level 1 ─────────────────────────── Foundation
  ✔  Multi-step wizard (3 steps)
  ✔  useState for shared form state in parent
  ✔  Controlled components across all steps
  ✔  Data persists when navigating between steps
  ✔  Review screen + console.log on submit
  ✔  Success screen after submission

⭐⭐ Level 2 ────────────────────────── Polish
  ✔  Real-time validation with Regex
  ✔  Inline error messages per field
  ✔  Next button disabled until step is valid
  ✔  Show / Hide password toggle
  ✔  Visual progress bar

⭐⭐⭐ Level 3 ──────────────────────── Industry Standard
  ✔  React Hook Form — no useState for inputs
  ✔  Zod schema — single source of validation truth
  ✔  zodResolver bridges RHF + Zod
  ✔  trigger() for per-step field validation
  ✔  z.infer for auto-generated TypeScript types
  ✔  Cross-field validation with .refine()
```

---

## 💡 Key Learnings

- 🧠 **Lifting state up** — why parent components own shared data across steps
- 🎮 **Controlled components** — the role of `value` + `onChange` on every input
- 🔷 **TypeScript** — interfaces, `keyof`, union types, and `import type`
- 🔍 **Regex** — writing patterns for email, password strength validation
- ⚡ **RHF performance** — why uncontrolled inputs prevent unnecessary re-renders
- 🛡️ **Zod** — schema-first validation and automatic type inference
- 🔗 **`.refine()`** — handling cross-field validation that needs two values at once
- 🚀 **Vercel deployment** — case-sensitive imports can silently break production

---

## ⚠️ Deployment Notes

> **Vercel is strictly case-sensitive.** A file named `StepOne.tsx` imported as `stepone` will work locally on Windows/Mac and silently fail on Vercel.

```ts
// ✅ Correct — matches filename exactly
import StepOne from "./StepOne";

// ❌ Breaks on Vercel
import StepOne from "./stepone";
```

Also ensure your `.gitignore` includes:

```
node_modules
dist
.env
```

---

## 📝 License

Built as a learning assignment at Infocera. Free to use as a reference.

---

<div align="center">

**Built with 🤍 and a lot of `console.log()`**

<br/>

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Made with love](https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square)

</div>
