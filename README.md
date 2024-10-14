<p align="center" style="margin:50px 0;">
<img src="public/learnup-favicon.ico"/>
</p>

<h2 align="center" style="margin:50px 0; font-style: italic; font-weight: 500;">
  Learn Together, Grow Together.
</h2>

## 📍 Table of contents

- [Overview](#overview)
  - [📌 Project Structure](#📌-project-structure)
  - [⚜️Built with](#⚜️-built-with)
  - [Technical instructions](#technical-instructions)
- [🚀 Getting Started](#🚀-getting-started)
  - [🟠 Pre-requirements](#🟠-pre-requirements)
  - [🔵 Installation](#🔵-installation)
- [📝 Authors](#📝-authors)

## Overview

LearnUp is a collaborative learning platform designed to enhance user interaction and engagement. The platform aims to bring together learners and instructors, offering a space where users can share knowledge, work together on projects, and grow their skills.

The current MVP includes a landing page to capture the interest of potential users and provide updates on the platform's development. Future updates will introduce features such as course content, interactive collaboration tools, and user-driven discussions.

### 📌 Project Structure

- **src/assets**: Contains static files like images, videos, and other resources that are used across the project.
- **src/components**: Holds reusable components that may not fit within the atomic design structure, serving as shared components used throughout the application.

- **src/ui/atoms**: Represents the smallest building blocks of the user interface, such as buttons, icons, and input fields.

- **src/ui/molecules**: Consists of simple components formed by combining multiple atoms, such as form fields with labels or card components.

- **src/ui/organisms**: Contains more complex components that combine molecules and atoms, forming distinct sections of the application, like navigation bars or entire form layouts.

- **src/lib**: Includes third-party libraries or modules that are integrated into the project, providing additional functionality.

- **src/utils**: Holds utility functions or helper methods that perform common operations used throughout the project.

### ⚜️ Built with

- **Vercel**: To deploy the project.
- **React.Js**: To create robust user interfaces.
- **Typescript**: Due to its static typing.
- **Vite.Js**: To enable fast development and optimized build processes.
- **TailwindCss**: To create custom and responsive designs efficiently.

### Technical instructions

| Command        | Action performed                                                          |
| :------------- | :------------------------------------------------------------------------ |
| `yarn install` | Install all dependencies                                                  |
| `yarn dev`     | Start a development server at `localhost:3000`                            |
| `yarn build`   | Make the production build in `./dist/`                                    |
| `yarn preview` | To preview the build before deploying                                     |
| `yarn lint`    | Analyze code for potential errors, stylistic issues, and coding standards |

## 🚀 Getting Started

### 🟠 Pre-requirements

- Node.js (>=18.x)
- Yarn (>=3.2.0)

### 🔵 Installation

1. Clone repository:
   ```sh
   git clone git@github.com:Lio-n/learnUp.git
   cd learnUp
   ```
2. Install NPM packages, in the root directory execute:
   ```sh
   yarn install
   ```
3. Run the Frontend, in the root directory execute:
   ```sh
   yarn dev
   ```

## 📝 Authors

- 🧑‍💼 [Leonardo Fontan](https://github.com/Lio-n)
  - **Role** : Project Manager & Frontend Design.
  - **Responsibilities** : Responsible for project planning, task prioritization, and designing the structure of the landing page.
- 🧑‍💼 [Frezzini Lucas](https://github.com/lucasfrezzini)
  - **Role** : Frontend Developer.
  - **Responsibilities** : In charge of implementing the assigned tasks and contributing to the development of interactive features.
- 🧑‍💼 [Santiago Miranda](https://github.com/santiago-mir)
  - **Role** : Frontend Developer.
  - **Responsibilities** : In charge of implementing the assigned tasks and contributing to the development of interactive features.
