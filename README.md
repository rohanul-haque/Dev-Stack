# 🚀 Dev Stack

A modern and interactive web application for developers to explore different technologies and build their ideal development stack.

Dev Stack allows users to explore frontend, backend, database, DevOps, and other development tools, then add their preferred technologies to a personal stack.

---

## 🌐 Live Demo

🔗 **Live Website:** Coming Soon

---

## 📸 Project Preview

> Add your project screenshot here.

```md
![Dev Stack Preview](https://raw.githubusercontent.com/rohanul-haque/Dev-Stack/refs/heads/main/src/assets/Screenshot%202026-09-23%20131425.png)
```

---

## ✨ Features

### 🔍 Explore Technologies

Browse different development technologies with useful information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Technology badge

### 🧩 Build Your Own Stack

Users can add technologies to their personal stack and see the selected technologies in the **Your Stack** section.

Users can also remove individual technologies or remove all selected technologies at once.

### 🔔 Interactive Notifications

The application provides toast notifications for user actions:

- Technology added successfully
- Technology removed successfully
- Duplicate technology selection
- All technologies removed
- Loading errors

---

## 🛠️ Technologies Used

| Technology         | Purpose                       |
| ------------------ | ----------------------------- |
| **React.js**       | Building the user interface   |
| **TypeScript**     | Type-safe development         |
| **Tailwind CSS**   | Styling and responsive design |
| **DaisyUI**        | UI components and utilities   |
| **React Toastify** | Toast notifications           |
| **Lucide React**   | Icons                         |
| **Vite**           | Development and build tool    |

---

## 📂 Project Structure

```text
├── 📁 public
│   ├── 🖼️ favicon.svg
│   └── 🖼️ icons.svg
├── 📁 src
│   ├── 📁 assets
│   │   ├── 🖼️ Screenshot 2026-09-23 131425.png
│   │   ├── 🖼️ banner-stack.png
│   │   ├── 🖼️ hamburger.png
│   │   ├── 🖼️ hero.png
│   │   ├── 🖼️ logo-text.png
│   │   ├── 🖼️ react.svg
│   │   └── 🖼️ vite.svg
│   ├── 📁 components
│   │   ├── 📄 Footer.tsx
│   │   ├── 📄 Hero.tsx
│   │   ├── 📄 Navbar.tsx
│   │   ├── 📄 TechnologCard.tsx
│   │   └── 📄 Technologies.tsx
│   ├── 📁 data
│   │   └── 📄 technologies.ts
│   ├── 📄 App.tsx
│   ├── 🎨 index.css
│   └── 📄 main.tsx
├── ⚙️ .gitignore
├── ⚙️ .prettierrc
├── 📄 LICENSE
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.node.json
└── 📄 vite.config.ts
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/rohanul-haque/Dev-Stack.git
```

### 2. Navigate to the Project

```bash
cd dev-stack
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will start on the local development server.

---

## 🎯 How It Works

The application loads technology data and displays it as technology cards.

Users can click **Add to stack** to add a technology to their selected stack.

The selected technologies are managed using React state.

Users can:

1. Browse technologies
2. Add a technology to their stack
3. View selected technologies
4. Remove an individual technology
5. Remove all selected technologies
6. Receive feedback through toast notifications

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to read and helps us describe how the UI should look.

```tsx
const App = () => {
  return <h1>Hello React</h1>;
};
```

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is data managed inside a component that can change over time.

```text
Props
Parent → Child

State
Component → Manages its own data
```

Props are mainly used for passing data, while state is used for managing changing data.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component.

In this project, I used `useState` to manage:

- Technology data
- Selected technologies
- Loading state

For example:

```tsx
const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>(
  [],
);
```

When a user adds or removes a technology, the selected stack is updated using `setSelectedTechnologies`.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

In this project, I used `useEffect` to load the technology data when the component is first rendered.

```tsx
useEffect(() => {
  const loadTechnologies = () => {
    setTechnologies(technologyData);
  };

  loadTechnologies();
}, []);
```

The empty dependency array `[]` means the effect runs when the component is mounted.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React understand which items have changed, been added, or been removed.

For example:

```tsx
{
  technologies.map((tech) => <div key={tech.id}>{tech.name}</div>);
}
```

Here, `tech.id` is unique, so React can efficiently manage the list.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

In this project, I used conditional rendering to show an empty stack message when no technology is selected.

```tsx
{
  selectedTechnologies.length === 0 ? (
    <p>Your stack is empty.</p>
  ) : (
    <div>{/* Selected technologies */}</div>
  );
}
```

If there are no selected technologies, the empty message is displayed. Otherwise, the selected technologies are displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using **props**.

### Parent

```tsx
<Child name="React" />
```

### Child

```tsx
const Child = ({ name }) => {
  return <h1>{name}</h1>;
};
```

To send something back from the child to the parent, the parent can pass a function as a prop.

### Parent

```tsx
<Child onSelect={handleSelect} />
```

### Child

```tsx
onSelect("React");
```

So the basic communication is:

```text
Parent → Child
       Props

Child → Parent
       Callback Function
```

---

# 🧠 React Concepts Practiced

This project helped practice several important React concepts:

- Components
- JSX
- Props
- State
- `useState`
- `useEffect`
- Conditional Rendering
- `.map()`
- Unique `key` props
- Event Handling
- Parent-Child Communication
- TypeScript with React
- Toast Notifications

---

## 👨‍💻 Author

**Rohanul Haque Rohan**

MERN Stack Developer

- GitHub: [github.com/rohanul-haque](https://github.com/rohanul-haque)
- LinkedIn: [linkedin.com/in/md-rohanul-haque](https://www.linkedin.com/in/md-rohanul-haque/)

---

## 📄 License

This project is created for learning and educational purposes.

---

⭐ If you find this project useful, consider giving it a star!

```

```
