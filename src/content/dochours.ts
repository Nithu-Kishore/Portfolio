export type Run = string | { bold: string } | { em: string };

export const dochours = {
  meta: {
    title: "DocHours: guiding first-time users · Nithu S Kishore",
    description:
      "Case study: a guided Getting Started experience that helped new clinics set up DocHours and book their first appointment.",
  },
  hero: {
    label: "Case study · DocHours",
    title: "Getting new clinics from sign-up to their first appointment",
    lede:
      "A guided Getting Started experience that surfaced the setup new clinics didn't know they needed, without locking them out of the product.",
    roleBold: "As the only designer, I owned:",
    roleRest:
      " stakeholder conversations and the UX audit, user flows, both explorations, the final UI and prototypes, then presenting the work to product and engineering and supporting handoff.",
    facts: [
      { label: "Product", value: "DocHours by Zennode, clinic management SaaS" },
      { label: "My role", value: "Sole product designer, end to end" },
      { label: "Worked with", value: "Product and engineering" },
      { label: "Timeline", value: "1.5 months" },
      { label: "Status", value: "Handed off to engineering" },
    ],
  },
  beforeAfter: {
    before: {
      tag: "Before",
      captionBold: "Booking first.",
      captionRest: " Empty dropdowns, no reason given, no next step.",
      note: "Recreated from the original form.",
      ariaLabel:
        "Recreated appointment form: the Department and Doctor dropdowns are empty and say No options available, and the Book button is disabled",
    },
    after: {
      tag: "After",
      image: "/images/dochours/final-getting-started.jpg",
      imageAlt:
        "DocHours dashboard with a Getting Started panel listing Add Department, Add Doctor and Clinic Profile Setup, next to a video guide",
      captionBold: "Setup first.",
      captionRest: " The three required steps in one place on the dashboard, with a video guide.",
    },
  },
  toc: [
    { id: "summary", label: "Summary" },
    { id: "problem", label: "Problem" },
    { id: "discovery", label: "Discovery" },
    { id: "exploration", label: "Exploration" },
    { id: "solution", label: "Final solution" },
    { id: "learnings", label: "Learnings" },
  ],
};

export const summary = {
  title: "Here's a quick summary",
  cards: [
    {
      title: "Problem",
      paragraphs: [
        "First-time users setting up a clinic tried to book an appointment first, hit empty Department and Doctor dropdowns, and gave up.",
        "It happened during the free trial that decides whether a clinic pays, so a clinic that never booked had little reason to stay.",
      ],
    },
    {
      title: "Solution",
      paragraphs: [
        "A Getting Started section on the dashboard, plus a setup widget that follows users around the product. New clinics see the three required steps before they try to book, and can pick up unfinished setup from anywhere.",
        "I got there by auditing onboarding and testing two approaches with the internal team. Now with engineering, not yet measured.",
      ],
    },
  ],
};

export const backstory = {
  title: "A little backstory",
  paragraphs: [
    "DocHours was my first project with the Zennode team. By the time I joined, the team had already spotted the pattern: clinics signed up for the free trial, went to add their first appointment, and stopped there.",
    "That's what drew me in. Adding appointments is the main reason clinics choose DocHours, and people couldn't get that far.",
  ],
  quote: {
    text: "The prerequisites were hidden, and people didn't know where to set them up.",
    caption: "My first thought on seeing the problem",
  },
};

export const problem = {
  title: "Problem",
  paragraphs: [
    [
      { bold: "Booking an appointment is the core workflow in DocHours," },
      " and it's the first thing new users try after signing up. Setup falls to whoever is responsible for the clinic, whether that's an admin, a doctor or a receptionist. But booking depends on Departments and Doctors, which live in separate Settings screens that nothing points to.",
    ],
    [
      "Without them, the appointment form was a ",
      { bold: "dead end" },
      ": empty dropdowns, no reason given, no next step.",
    ],
    [
      "Getting unstuck meant already knowing the way: close the appointment form and lose anything typed, go to ",
      { em: "Settings → Departments" },
      " to add a department, then ",
      { em: "Settings → Employees → Doctors" },
      " to add a doctor, then start the booking again. That's ",
      { bold: "about 12 steps across three parts of the product" },
      ", in an order nothing explained.",
    ],
    [
      { bold: "Why it mattered:" },
      " DocHours sells through a free trial. The team saw clinics sign up, get stuck at their first appointment and never move forward. A clinic that never books never sees what the product does for it, so it has little reason to pay when the trial ends. It was seen as one of the biggest problems in the product.",
    ],
  ] as Run[][],
  scope: {
    summary: "Scope and constraints",
    inScope: [
      "A clear starting point right after sign-up",
      "Guidance through essential setup, without restricting exploration",
      "Making hidden dependencies visible before they block users",
    ],
    outOfScope: [
      "Redesigning sign-up or the appointment form",
      "Changing backend rules or the settings architecture",
      "Forcing mandatory onboarding before using the product",
    ],
  },
};

export const discovery = {
  title: "Discovery",
  intro:
    "To find out why clinics were getting stuck, I went through support queries and stakeholder feedback, walked the journey from sign-up to first appointment, mapped the workflow dependencies, and ran a UX audit for visibility and guidance.",
  insights: [
    {
      num: "01",
      bold: "Users start with appointments.",
      rest: " New users saw booking as the main task and tried it first.",
    },
    {
      num: "02",
      bold: "Required setup was hidden.",
      rest: " Departments and Doctors lived in Settings and never came up during onboarding.",
    },
    {
      num: "03",
      bold: "Blockers came with no explanation.",
      rest: " Empty dropdowns gave no reason and no next step.",
    },
    {
      num: "04",
      bold: "Some gaps failed silently.",
      rest:
        " The team noticed the Clinic Profile was usually skipped. Prescriptions pull details like the clinic address and registration fee from it, so it needs filling in from the start.",
    },
  ],
  hmw: {
    label: "How might we",
    text: "help first-time users discover and complete critical setup before they hit blockers in key workflows?",
  },
};

export const exploration = {
  title: "Exploration",
  intro: "Two ideas I tested with the internal team and dropped before landing on the final design.",
  iterations: [
    {
      image: "/images/dochours/iteration-1.jpg",
      imageAlt: "Iteration 1: a setup modal listing three steps with a progress indicator",
      label: "Iteration 1 · dropped",
      title: "Guided setup modal",
      description: "A one-time modal listing the three setup tasks.",
      whyNotBold: "Why not:",
      whyNotRest: " once it closed, nothing reminded anyone what was left. Guidance has to stay.",
    },
    {
      image: "/images/dochours/iteration-2.jpg",
      imageAlt: "Iteration 2: an Add Department action inside the empty department dropdown of the appointment form",
      label: "Iteration 2 · dropped",
      title: "Fix it where it breaks",
      description: "\"Add Department\" inside the empty dropdown.",
      whyNotBold: "Why not:",
      whyNotRest:
        " it only helped after users had already hit the wall, then sent them off to Settings. Setup had to come before booking, not during it.",
    },
  ],
};

export const solution = {
  title: "Final solution",
  rows: [
    {
      image: "/images/dochours/final-getting-started.jpg",
      imageAlt: "Getting Started section on the dashboard with three setup tasks and a video guide",
      title: "Getting Started, on the dashboard",
      description:
        "The three required tasks, Departments, Doctors and Clinic Profile, sit in one place with direct links to each. The Add Department and Add Doctor forms are long and easy to get wrong, so a short video shows how to fill in their fields before users start.",
    },
    {
      image: "/images/dochours/final-widget.jpg",
      imageAlt: "A persistent Getting Started widget in the corner of the Settings screen showing progress on the three tasks",
      title: "A widget that follows you",
      description:
        "Users who skip Getting Started still see the same three steps. A small widget stays on screen across the product until setup is finished, so even someone who goes straight to booking can see what's missing and jump to it, without being interrupted. Once all three steps are done, it shows everything as complete with a close button. Users can close it, or it disappears on its own after a while.",
    },
  ],
  flowCaption: "Updated flow: setup comes first, but users can explore and come back to it at any time.",
};

export const existingFlowCaption =
  "Existing flow: nothing tells users that departments and doctors must be set up first, so the form can dead-end.";

export const learnings = {
  title: "Learnings",
  items: [
    {
      bold: "Design for people who will forget.",
      rest:
        " The modal failed because it asked users to remember what it said. Guidance that stays on screen works because it doesn't rely on memory.",
    },
    {
      bold: "Discoverability beats new features.",
      rest: " Making existing functionality visible often removes more friction than building something new.",
    },
    {
      bold: "Guide without fencing in.",
      rest: " Clear direction and freedom to explore can coexist.",
    },
  ],
};

export const nextSteps = {
  title: "What I'd do next",
  items: [
    {
      bold: "Explain the empty dropdown.",
      rest:
        " People who go straight to booking still meet an empty list. A short message there would say why it's empty and link back to Getting Started, not to Settings, so it avoids what sank Iteration 2. It's a small change, not a redesign of the form.",
    },
    {
      bold: "Open the form, not the list.",
      rest: " Checklist links land on the Departments page. Opening the New Department panel directly would save two clicks.",
    },
    {
      bold: "Measure and test.",
      rest:
        " Track how many new clinics book a first appointment in their first week, how many trial clinics go on to pay, and how many setup questions still reach support. Then test the flow with clinic staff, which this project didn't have access to.",
    },
  ],
  proposedAriaLabel:
    "Proposed: the empty Department dropdown explains that the clinic needs a department and a doctor before booking, with a Finish setup link",
  proposedMenuText:
    "No departments yet. Your clinic needs a department and a doctor before you can book.",
  proposedLinkText: "Finish setup →",
  proposedCaptionBold: "Proposed, not shipped.",
  proposedCaptionRest: " The empty dropdown explains itself and points back to Getting Started.",
};

export const cta = {
  label: "Hiring a product designer?",
  title: "I'd love to hear what you're building.",
  text:
    "I'm open to product design roles in India or remote, and can join immediately. Happy to walk you through this project on a call.",
  emailHref: "mailto:skishorenithu@gmail.com?subject=Product%20design%20role",
  backHref: "/",
  backLabel: "← Back to home",
};
