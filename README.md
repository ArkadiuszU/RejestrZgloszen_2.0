## Folder Structure

The project uses the following folder separation:
- **atoms/** – Jotai atoms for global state management (logic, data)
- **components/** – Presentational components (UI), pure components without business logic
- **components/containers/** – Container components which manage logic and connect state with presentational components
- **hooks/** – Custom React hooks that encapsulate logic and functionalities
- **pages/** – Views and main screens of the application (e.g., for routing)
- **utils/** – Utility and helper functions
- **assets/** – Static resources (images, icons, fonts, etc.)

Example folder structure:

src/
├── assets/
│ ├── images/
│ │ └── logo.png
│ └── fonts/
│ └── OpenSans.ttf
├── atoms/
│ ├── userAtom.ts
│ └── cartAtom.ts
├── components/
│ ├── containers/
│ │ └── CounterContainer.tsx (container component)
│ ├── common/
│ ├── layout/
│ └── Counter.tsx (presentational component)
├── hooks/
│ ├── useAuth.ts
│ └── useCounter.ts
├── pages/
│ └── HomePage.tsx
├── utils/
│ └── formatPrice.ts
├── App.tsx
├── main.tsx

text

### Guidelines:

- **Logic** (atoms, hooks, containers) and **presentation** (components) are separated for better code clarity and project scalability.
- Container components live inside the `components/containers` subfolder, as they combine business logic and state with UI components.
- The pure presentation components are inside `components/` directly or under subfolders like `common/`, `layout/`.
- `hooks` contains reusable logic functions used across containers or components.
- Static assets are kept in the `assets` folder for organized resource management.