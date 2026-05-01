# Registration Wizard

A multi-step onboarding form built with React, TypeScript, React Hook Form, and Zod. This project was built as a learning exercise progressing through three difficulty levels — from basic state management to industry-standard form handling.

---

## Live Demo

> Deploy to Vercel and paste your URL here.

---

## Features

- Multi-step wizard with persistent state across steps
- Real-time field validation with inline error messages
- Show/Hide password toggle on password fields
- Visual progress bar
- Full Zod schema validation with cross-field confirmPassword check
- Type-safe forms using React Hook Form + Zod
- Step-by-step navigation with per-step validation trigger
- Review screen before final submission
- Success screen on submit
- Minimal, neutral UI built with Tailwind CSS

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool |
| React Hook Form | Form state management |
| Zod | Schema validation |
| @hookform/resolvers | Bridge between RHF and Zod |
| Tailwind CSS | Styling |

---

## Project Structure

```
src/
├── components/
│   ├── Wizard.tsx        # Parent component — owns form state and navigation
│   ├── StepOne.tsx       # Personal info (first name, last name, date of birth)
│   ├── StepTwo.tsx       # Account details (email, password, confirm password)
│   └── StepThree.tsx     # Review & submit
├── utils/
│   ├── schema.ts         # Zod validation schema + FormData type
│   └── validators.ts     # Manual validators (Level 2 reference)
├── App.tsx
└── main.tsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/yogesh2002kashyap/registration-wizard.git
cd registration-wizard
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build

```bash
npm run build
```

---

## How It Works

### State Management

`Wizard.tsx` is the single source of truth. It owns the `useForm()` hook from React Hook Form and passes `register`, `errors`, and `watch` down to each step as props. No step component manages its own form state.

### Validation Strategy

Validation is defined once in `utils/schema.ts` as a Zod schema. React Hook Form uses `zodResolver` to connect the schema automatically. When the user clicks Next, `trigger()` validates only the current step's fields before advancing.

```ts
// Step 1 — validate only personal info fields
const isValid = await trigger(["firstName", "lastName", "dateOfBirth"]);
if (isValid) setCurrentStep(prev => prev + 1);
```

### Cross-field Validation

The confirmPassword check requires comparing two fields. This is handled with Zod's `.refine()`:

```ts
.refine(
  (data) => data.password === data.confirmPassword,
  { message: "Passwords do not match", path: ["confirmPassword"] }
)
```

### Type Safety

`FormData` is not written manually — it is inferred directly from the Zod schema:

```ts
export type FormData = z.infer<typeof registrationSchema>;
```

---

## Difficulty Levels

### Level 1 — Core Logic
- Multi-step wizard with conditional rendering
- Shared state lifted to parent component
- Data persists when navigating between steps
- Review screen and console.log on submit

### Level 2 — Manual Validation
- Real-time validation on every keystroke
- Inline error messages per field
- Next button disabled until current step is valid
- Show/Hide password toggle
- Progress bar

### Level 3 — Industry Standard
- React Hook Form replaces all manual useState for inputs
- Zod schema replaces manual validator functions
- Per-step validation using `trigger()`
- Fully type-safe with `z.infer`

---

## Key Learnings

- Lifting state up in React — why parent components own shared data
- Controlled components — the difference between `value` + `onChange` vs uncontrolled inputs
- TypeScript interfaces vs types, `keyof`, and `import type`
- Regex patterns for email and password validation
- Why `e.preventDefault()` matters on form submissions
- How React Hook Form eliminates re-renders on every keystroke
- How Zod schemas generate TypeScript types automatically
- Cross-field validation with `.refine()`
- Case-sensitive file imports for Vercel deployment

---

## Deployment

This project deploys to Vercel with zero configuration.

> **Important:** File names are case-sensitive on Vercel. Ensure all imports match the exact filename casing — `StepOne.tsx` not `stepone.tsx`.

```bash
npm run build
# Deploy the dist/ folder to Vercel
```

---

## Author

**Your Name**
[GitHub](https://github.com/yogesh2002kashyap) · [LinkedIn](https://linkedin.com/in/yogesh2002kashyap)