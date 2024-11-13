# User Management Dashboard

A modern React application for managing users with features like CRUD operations, search functionality, and pagination.

## 🚀 Features

- ✅ User Management (Create, Read, Update, Delete)
- 🔍 Real-time Search Functionality
- 📊 Pagination
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS

## 🛠️ Tech Stack

- React.js
- Tailwind CSS
- Axios for API calls
- React Toastify for notifications

## 📁 Project Structure

```
src/
├── assets/
├── components/
│   ├── AddEditUser.jsx
│   ├── DeleteConfirmation.jsx
│   ├── Layout.jsx
│   ├── Main.jsx
│   ├── Navbar.jsx
│   ├── Navigation.jsx
│   ├── Pagination.jsx
│   ├── SideBar.jsx
│   ├── Table.jsx
│   └── UserMetrics.jsx
├── services/
│   └── filteredService.js
├── App.jsx
├── index.css
└── main.jsx
```

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Abhinesh2602/UserManagementDashboard
```

2. Install dependencies:

```bash
cd user-management-dashboard
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🎯 Core Functionality

### User Management

- View list of users
- Add new users
- Edit existing users
- Delete users with confirmation

### Search

- Real-time search across multiple fields:
  - Name
  - Website
  - Email
  - Department
  - Actions

### Pagination

- Configurable items per page
- Page navigation
- Dynamic total pages calculation

### AddEditUser

- Form for adding/editing users
- Input validation
- Loading states
- Error handling

### Table

- Action buttons
- Delete confirmation modal

### Navigation

- Search input with debouncing
- Add user button

## 🔄 API Integration

The application uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) for demonstration purposes. Endpoints used:

- GET `/users` - Fetch all users
- POST `/users` - Create new user
- PUT `/users/:id` - Update user
- DELETE `/users/:id` - Delete user

## 🛠️ Services

### filterService

Manages search and filtering functionality

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
