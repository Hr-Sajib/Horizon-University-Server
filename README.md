

# Horizon University Server

This is the server-side application for the Horizon University Management System, a comprehensive platform to manage university operations for students, faculty, and admins. Built with modern technologies, it provides secure authentication, profile management, academic processes, and user administration.

---

## Project Overview

The Horizon University Server handles backend logic, API endpoints, and data management for a university system. It supports three user roles—**Students**, **Faculty**, and **Admins**—with features like authentication, profile updates, course enrollment, grade management, and administrative controls.

---

## Functional Requirements

### Authentication
- **Students**: Secure login/logout, password updates.
- **Faculty**: Secure login/logout, password updates.
- **Admins**: Secure login/logout, password updates.

### Profile Management
- **Students**: Update personal profiles (e.g., name, contact info).
- **Faculty**: Update personal profiles (e.g., designation, contact info).
- **Admins**: Update personal profiles (e.g., designation, contact info).

### Academic Process
- **Students**:
  - Enroll in offered courses per semester.
  - View class schedules, grades, notices, and events.
- **Faculty**:
  - Manage student grades.
  - Access student personal/academic info.
- **Admins**:
  - Manage semesters, courses, offered courses, sections, rooms, and buildings.

### User Management
- **Admins**:
  - Create, block/unblock, and manage user accounts.
  - Reset user passwords.

---

## Entity-Relationship Diagrams

![ER DIAGRAM](./erdiagram.png)

## Data Model

### User
- `_id`, `id` (generated), `password`, `needsPasswordChange`, `role`, `status`, `isDeleted`, `createdAt`, `updatedAt`

### Student
- `_id`, `id` (generated), `name`, `gender`, `dateOfBirth`, `email`, `contactNo`, `emergencyContactNo`, `presentAddress`, `permanentAddress`, `guardian`, `localGuardian`, `profileImage`, `admissionSemester`, `isDeleted`, `createdAt`, `updatedAt`

### Faculty
- `_id`, `id` (generated), `designation`, `name`, `gender`, `dateOfBirth`, `email`, `contactNo`, `emergencyContactNo`, `presentAddress`, `permanentAddress`, `profileImage`, `academicFaculty`, `academicDepartment`, `isDeleted`, `createdAt`, `updatedAt`

### Admin
- `_id`, `id` (generated), `designation`, `name`, `gender`, `dateOfBirth`, `email`, `contactNo`, `emergencyContactNo`, `presentAddress`, `permanentAddress`, `profileImage`, `managementDepartment`, `isDeleted`, `createdAt`, `updatedAt`

### Academic Semester
- `_id`, `name`, `year`, `code`, `startMonth`, `endMonth`, `createdAt`, `updatedAt`

### Academic Faculty
- `_id`, `name`, `createdAt`, `updatedAt`

### Academic Department
- `_id`, `name`, `academicFaculty`, `createdAt`, `updatedAt`

---

## API Endpoints

### User
- `POST /users/create-student`
- `POST /users/create-faculty`
- `POST /users/create-admin`

### Student
- `GET /students`
- `GET /students/:id`
- `PATCH /students/:id`
- `DELETE /students/:id`
- `GET /students/my-profile`

### Faculty
- `GET /faculties`
- `GET /faculties/:id`
- `PATCH /faculties/:id`
- `DELETE /faculties/:id`
- `GET /faculties/my-profile`

### Admin
- `GET /admins`
- `GET /admins/:id`
- `PATCH /admins/:id`
- `DELETE /admins/:id`
- `GET /admins/my-profile`

### Auth
- `POST /auth/login`
- `POST /auth/refresh-token`
- `POST /auth/change-password`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`

---

## Tech Stack
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose)
etc

---

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/horizon-university-server.git
   cd horizon-university-server
