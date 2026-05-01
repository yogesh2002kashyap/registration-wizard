# Prompt Engineering Log — Registration Wizard

This file documents every prompt used during the development of the Registration Wizard project. It serves as a record of how AI-assisted development was used to learn TypeScript, React Hook Form, Zod, and multi-step form architecture.

---

## Prompt Strategy

Rather than asking for complete solutions, prompts were structured to:
1. Ask for explanations before code
2. Submit work for review rather than asking for it to be written
3. Ask clarifying questions before starting each phase
4. Request crash courses on unfamiliar tools before using them

---

## Session Log

---

### 1. Project Introduction

**Prompt:**
> "The Mission: The Registration Wizard. Theme: Controlled Components, State Management, Regex, and Form Validation. Goal: Build a multi-step onboarding form (like setting up a new bank account or SaaS profile)..."

**Purpose:** Introduced the full assignment brief across three difficulty levels to establish scope before writing any code.

---

### 2. TypeScript Crash Course Request

**Prompt:**
> "You've already seen my assignment heading. I've noticed that most implementations use React with TypeScript, and this will be my first TypeScript project. Teach me TypeScript in a fast, practical way so I can start building quickly. Focus on what's essential for React projects. I'll share detailed project requirements next—it's structured in three levels."

**Purpose:** Requested a focused, practical TypeScript primer scoped specifically to React before touching the project. Deliberately deferred the full requirements to avoid information overload.

---

### 3. Clarifying Questions Upfront

**Prompt:**
> "Before I share the full assignment, I'll send a set of questions to clarify my doubts. I'm doing this separately to avoid creating an overly large file."

**Purpose:** Strategic separation of concerns — resolved conceptual doubts before receiving the assignment details. This prevented confusion during the build phase.

**Questions covered included:**
- Why not use HTML `required` attributes?
- How to switch steps without React Router?
- How to save data across step components?
- How to implement Show/Hide password?
- What is Regex?
- How to prevent page refresh on submit?
- Whether a backend API is needed?
- What is React Hook Form?
- What is Zod?
- How to disable the Next button?
- How to show a progress bar?
- How to handle component size?
- How to handle date of birth validation?
- Vercel deployment case-sensitivity issue?

---

### 4. Assignment Requirements

**Prompt:**
> *(Shared the full three-level assignment — Level 1: Core Logic, Level 2: Manual Validation, Level 3: RHF + Zod)*

**Purpose:** Provided the complete requirements only after TypeScript fundamentals and conceptual doubts were resolved.

---

### 5. Tooling Decision — Tailwind vs shadcn

**Prompt:**
> "Should I consider using Tailwind?"

Followed by:

> "Which would be better for this project — Tailwind or shadcn? I'm fine using either and will rely on your guidance."

**Purpose:** Sought a direct recommendation rather than researching independently, with context that the goal was learning — not just building. Used the answer to make a deliberate, informed tooling decision.

---

### 6. Comfort Check on TypeScript

**Prompt:**
> "Before moving on can you make me feel comfortable in these questions."

**Purpose:** Requested a quiz before starting to build. Demonstrated awareness that reading about TypeScript is different from being able to use it. Chose to validate understanding before writing production code.

---

### 7. Submitting `formTypes.ts` for Review

**Prompt:**
> *(Uploaded `formTypes.ts` with the FormData interface, useState, and handleChange)*
> "Check out my formTypes.ts."

**Purpose:** Submitted own work for review rather than asking for the solution. This revealed a structural misunderstanding — useState and functions don't belong in a types file — which was a valuable lesson.

---

### 8. Asking About File Organisation

**Prompt:**
> "Where should I write the StepOne interface?"

**Purpose:** Asked a targeted architectural question before writing code. Led to the decision to centralise all interfaces in `formTypes.ts`.

---

### 9. Understanding Before Writing Wizard

**Prompt:**
> "I done Wizard.tsx till you tell. Next."

**Purpose:** Waited for instruction before writing the parent component — showing discipline to follow a structured build sequence rather than jumping ahead.

---

### 10. Submitting `Wizard.tsx` for Review

**Prompt:**
> *(Uploaded first version of Wizard.tsx with functions inside return())*
> "Check this out."

**Purpose:** Submitted own attempt for review. Revealed the critical mistake of putting functions inside the return() block — a fundamental React structure lesson.

---

### 11. Type-Only Import Question

**Prompt:**
> "How to import FormData using type-only import?"

**Purpose:** Asked a precise TypeScript question after noticing the distinction. Shows attention to detail and desire to write idiomatic TypeScript rather than just functional code.

---

### 12. Submitting Step Components for Review

**Prompts:**
> *(Uploaded StepOne.tsx)* "Check my StepOne."
> *(Uploaded StepTwo.tsx)* "Check StepTwo."
> *(Uploaded StepThree.tsx)* "Check StepThree."

**Purpose:** Submitted each component individually for incremental review. Each submission caught real bugs — wrong handleChange arguments, wrong input types, password displayed in review screen.

---

### 13. Validator Implementation

**Prompt:**
> *(Uploaded validators.ts)*
> "Check validators.ts."

**Purpose:** Went beyond the minimum spec — implemented multi-rule password validation with an array of errors rather than a single string. Showed initiative. Review caught return type inconsistencies and an inverted conditional.

---

### 14. Conditional Button Logic

**Prompt:**
> "This is how I conditionally show buttons:
> `{currentStep > 0 && <button onClick={back}>Back</button>}`
> `{currentStep < 2 && <button onClick={next}>Next</button>}`
> `{currentStep === 2 && <button onClick={handleSubmit}>Submit</button>}`"

**Purpose:** Shared a self-derived solution for review before integrating it. Clean, correct logic on first attempt.

---

### 15. Validation Wiring

**Prompt:**
> *(Uploaded updated Wizard.tsx and StepTwo.tsx with full validation)*
> "Check validators wiring."

**Purpose:** Independently implemented the full validation architecture — FormErrors interface, real-time error state, cross-field confirmPassword revalidation — without being given the solution. Submitted for review.

---

### 16. Version Control Checkpoint

**Prompt:**
> "Why not push the current version to GitHub?"

**Purpose:** Proactively identified that Level 2 was a stable checkpoint worth committing before the Level 3 refactor. Good engineering practice — commit working code before refactoring.

---

### 17. RHF + Zod Crash Course Request

**Prompt:**
> "I think I need a quick crash course on React Hook Form and Zod — I've never used them before."

**Purpose:** Recognised unfamiliarity with new tools and requested a dedicated learning session before attempting to use them. Same pattern as the TypeScript crash course — learn first, build second.

---

### 18. Level 3 Implementation

**Prompt:**
> *(Uploaded Wizard.tsx, StepOne.tsx, StepTwo.tsx, StepThree.tsx, schema.ts)*
> "Check updates."

**Purpose:** Submitted the complete Level 3 refactor for review in one batch. Self-implemented the full RHF + Zod integration including trigger() per step, watch() for review screen, and zodResolver wiring.

---

### 19. Styling Decision

**Prompt:**
> "Its time for Butification."

Followed by selecting:
- Vibe: Minimal (lots of whitespace, almost no decoration)
- Color: Neutral (gray tones, timeless)
- Time: 30 minutes (essentials only)

**Purpose:** Initiated the styling phase only after all logic was complete and working. Used structured options to communicate design preferences clearly and efficiently.

---

### 20. Documentation Request

**Prompt:**
> "Now make me a README.md file and Prompt.md file where Prompt.md should have all the prompts I have used while making of this project as it is evaluated by my mentors to judge my prompt engineering skills."

**Purpose:** Requested project documentation as a final step. Showed awareness that prompt engineering is an evaluable skill and proactively created a record of the entire development conversation.

---

## Prompt Engineering Patterns Used

| Pattern | Example |
|---|---|
| **Learn before build** | Requested TypeScript and RHF/Zod crash courses before using them |
| **Submit for review** | Uploaded own code files instead of asking for solutions |
| **Separate concerns** | Sent clarifying questions before sharing full requirements |
| **Ask why, not just how** | Asked about file organisation, import types, architectural decisions |
| **Checkpoint commits** | Suggested GitHub push before Level 3 refactor |
| **Scope control** | Kept questions focused — one concept at a time |
| **Honest about gaps** | Directly stated "I've never used this before" |
| **Decision delegation** | Asked for direct recommendations on tooling decisions with context |