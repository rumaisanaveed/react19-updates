# React 19 Updates 🚀

Welcome to the **react19-updates** repository! This repository explores some of the new and exciting features introduced in React 19. Below, you'll find a brief overview of each concept and a reference to the corresponding code example.

## Key Features and Concepts 🎉

### 1. React Compiler ⚙️
React 19 introduces an enhanced compiler for building modern, fast, and optimized applications. The new compiler improves performance and helps in delivering efficient output with minimal effort. You'll not have to manually optimize the performance of the app by using React.memo and useCallback hooks, the React Compiler will automatically do the performance optimization for you. Check out the implementation in the `FormActions.jsx` file for practical usage.

- **Code Example**: [FormActions.jsx](./FormActions.jsx)

---

### 2. Form Actions ✍️
The `FormActions` component demonstrates how React 19 simplifies form-related actions. With these updates, handling forms has become more straightforward and dynamic.

- **Code Example**: [FormActions.jsx](./FormActions.jsx)

---

### 3. useApi Hook 🌐
The `useApi` hook makes it easier to fetch and manage API data within your React components. This hook is a powerful way to abstract away repetitive API handling code and focus on your application logic.

- **Code Example**: [UseApi.jsx](./UseApi.jsx)

---

### 4. useFormStatus Hook 📝
The `useFormStatus` hook provides real-time insights into the current status of a form, such as whether it's submitting or idle. This is especially useful for showing loaders or disabling actions during submission. And, you can easily get the loading state inside one of the child component of the form.

- **Code Example**: [UseFormStatusHook.jsx](./UseFormStatusHook.jsx)

---

### 5. useOptimistic Hook ✨
The `useOptimistic` hook enables you to manage optimistic UI updates, providing a smoother user experience. With this hook, you can update the UI immediately while the server processes the request. This will help in improving the user experience. 

- **Code Example**: [UseOptimisticHook.jsx](./UseOptimisticHook.jsx)

---

## Getting Started 🛠️
1. Clone the repository:
   ```bash
   git clone https://github.com/rumaisanaveed/react19-updates.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev 
   ```

Happy coding with React 19! 🚀
