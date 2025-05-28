# 🧠 Task Manager | Full-Scale Frontend (Next.js + Zustand + Tailwind)

A fully responsive **Task Manager dashboard** built with:

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Zustand](https://img.shields.io/badge/Zustand-000000?logo=Zustand&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6F61?logo=recharts&logoColor=white)
![Date-fns](https://img.shields.io/badge/Date--fns-008080?logo=data&logoColor=white)

> ⚠️ **Note:** This is a frontend-only project; backend integration is planned.
>  
> 🚀 **Live Site (might misbehave):** [task-manager.vercel.app]([https://task-manager.vercel.app](https://task-manager-ctt5-abmzpmql6-hirdeshprajapati311s-projects.vercel.app/task))

---

## 📸 Screenshots

> Add real screenshots to `/screenshots/` and link them below.

### 🖥️ Dashboard View  
![image](https://github.com/user-attachments/assets/cf8f976e-8bb2-46c1-90cb-b0eeac3c5c9c)
![image](https://github.com/user-attachments/assets/2982147e-73d6-4bf0-b360-2dca41aaecb2)
![image](https://github.com/user-attachments/assets/ae6a24eb-8ba3-435f-82cc-9d8b08b05797)
![image](https://github.com/user-attachments/assets/215f5534-6bcd-4116-9a16-2e8423ee532b)


### 📱 Responsive Mobile View  
![image](https://github.com/user-attachments/assets/cb81e67a-88e6-464f-a0f8-e8fa3e17a3e8)
![image](https://github.com/user-attachments/assets/c13a7dc3-cf53-42d6-9585-0b570fe285f1)
![image](https://github.com/user-attachments/assets/e50283e5-37c7-4a1d-bebb-a59a69a8533c)


---

## ✨ Features

- 🧭 Multi-page layout via Next.js routing
- 📅 Task UI with date-fns manipulation
- 📊 Dashboard analytics via Recharts
- 👥 Mentors page (scalable team mockup)
- 💬 Messaging interface
- ⚙️ Profile & Settings panel
- 📱 Mobile-first, pixel-perfect responsiveness
- ♻️ Reusable component system (Zustand + props)

---

## ⚙️ Tech Stack Breakdown

| Tech           | Purpose                                 |
|----------------|------------------------------------------|
| **Next.js**    | App framework with file-based routing    |
| **React**      | Component-based UI                       |
| **Zustand**    | Lightweight global state management      |
| **Tailwind**   | Utility-first responsive styling         |
| **TypeScript** | Static type checking for safer dev       |
| **Recharts**   | Charts and graphs in dashboard           |
| **Date-fns**   | Date handling without moment.js bloat    |

---

## 🗂️ Project Structure

📁 /components       → Reusable UI components
📁 /context          → Zustand store & logic
📁 /types            → Global TypeScript interfaces
📁 /app              → Main pages like /dashboard, /tasks
📁 /public/images    → Static assets
📄 index.ts          → Barrel exports for components

## 🤯 Lessons Learned

This project taught me:

- How to manage complex UI with clean folder structures
- Prop manipulation to make highly customizable components
- Zustand for global state with minimal boilerplate
- Tailwind magic for pixel-perfect responsiveness
- Real-world Git/GitHub workflows (including conflict resolution 💥)

---

## 🔮 Future Plans

- ✅ Hook up real backend (MongoDB + Express or Firebase)
- ✅ Add authentication and user data persistence
- ✅ Form validation and task status updates
- ✅ Real chat backend for messages

---

## 👨‍💻 Author

**Hirdesh Prajapati**  
Frontend Developer  
[🐙 GitHub](https://github.com/Hirdeshprajapati311) 

---

## 🫡 Acknowledgements

Thanks to [(ChatGPT)](https://chat.openai.com) for support during development, debugging, and motivational chaos-control.  
Design inspired by a reference [Figma file](https://www.figma.com/design/sJsqbfOAhNgwWdlqkuXhjb/Task-Management-Dashboard---Pickolab-Studio--Community-?t=AwzWwbIfWoQ0oW5I-0).

---

## 🧪 How to Run Locally

bash
git clone https://github.com/Hirdeshprajapati311/Task-Manager.git
cd Task-Manager
npm install
npm run dev
