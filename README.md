# 🚚 Skip Size Selector – Modern UI Redesign

## **Overview**

This is a **complete redesign** of the “Choose Your Skip Size” page for We Want Waste, created as a technical challenge to showcase modern React skills, clean code, and thoughtful UI/UX design.

---

## **Stack & Tools**

- **React** (with functional components and hooks)
- **Vite** (blazing fast build tool to accelerate development)
- **Tailwind CSS** (utility-first styling for rapid, responsive design)
- **react-icons** (for beautiful, consistent iconography)

---

## **Why This Approach?**

The original page felt visually outdated and a bit cluttered, which could make users less confident in their selection.
**I wanted something that felt trustworthy, modern, and easy to use on any device.**

### **My Focus Areas:**

- **Modern, clean look** – Dark theme, bold colors, soft card UI, and clear icons for a professional feel.
- **Mobile-first, fully responsive** – Designed to look great on both phones and desktops.
- **Better information display** – Key details like size, capacity, dimensions, and restrictions (e.g. “Not allowed on road”) are clear at a glance.
- **Accessible and semantic** – Good contrast, alt text, and ARIA labels for all critical actions.
- **Component-driven** – Everything is broken into reusable React components for easy future edits or expansion.
- **Delightful user experience** – Buttons, selection highlights, and stepper all give instant visual feedback.
- **Fast delivery** – Used React + Vite to build, run, and iterate much more quickly, and Tailwind CSS to keep styling maintainable and lightning-fast to update.

---

## **Project Structure**

- **App.js** – Main entry point; renders the full skip size selection page.
- **pages/ChooseSkipSize.js** – Container for all main elements (Stepper, Hero, SkipGrid, Footer).
- **components/**

  - **SkipGrid.js** – Lays out all skip size cards.
  - **SkipCard.js** – Shows skip info, image, selection, and warning badges.
  - **Stepper.js** – The step navigation bar at the top.
  - **Footer.js** – Sticky footer for navigation/actions, adapting for mobile and desktop.
  - **Hero.js** – Clean headline and description for clarity.

- **Data** is fetched from the provided API and used to populate skip options.

---

## **UI/UX Decisions**

- **Card Layout:**
  Cards are visually separated, with clear skip size, price, and a big “Select” button. Each card has all the info a user needs.
- **Selection Feedback:**
  Selected card gets a colored border and shadow, and the button switches to “Selected” with a checkmark.
- **Stepper:**
  Custom stepper makes it obvious which part of the process the user is in.
- **Mobile Experience:**
  All components stack and reflow for mobile; the sticky footer is optimized for small screens.
- **Accessibility:**
  High-contrast colors, clear focus states, keyboard navigation, and alt texts.
- **Details Matter:**
  Badges for skip restrictions, icons for important info, and a clean price display with “inc. delivery”.

---

## **How to Use**

- **Clone & install:**
  `npm install`

- **Run locally:**
  `npm run dev`
  (Uses Vite + React + TailwindCSS)

- **Choose a skip:**
  Click any “Select This Skip” button. Only one skip can be selected at a time.

- **Continue/Back:**
  Use the sticky footer to go back or move forward (navigation handlers can be updated as needed).

---

## **API Data**

All skip options are loaded from:
`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

---

## **Screenshots**

<img src="screenshot-desktop.png" width="600" alt="Desktop Screenshot" />
<img src="screenshot-mobile.png" width="250" alt="Mobile Screenshot" />

---

## **Key Files**

- `App.js` – Loads the main page
- `pages/ChooseSkipSize.js` – Main container
- `components/SkipCard.js` – Card component for skip info
- `components/Footer.js` – Sticky footer with navigation
- `components/Stepper.js` – Process steps at the top

---

## **Why this is better than the original**

- **Modern look inspires more trust** (potentially higher conversions)
- **Much better experience on mobile**
- **Information is easy to compare at a glance**
- **Accessible for all users**
- **Code is maintainable and ready for future features**

---

## **Future Improvements**

- Add loading/skeleton states for skips while API loads
- Support for dynamic image URLs from API
- Routing for actual multi-step navigation
- Add test coverage for all components

---

## **Feedback & Contact**

Happy to answer any questions or walk through my code!
Feel free to reach out if you’d like a code walkthrough, UX explanation, or more ideas.

---

**Thanks for the challenge – it was fun to bring a modern look to your product!**
— **Shkelqim**


