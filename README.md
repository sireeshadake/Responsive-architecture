# Advanced CSS3 & Responsive Portfolio Website

## Project Overview

This project is a modern and fully responsive personal portfolio website developed using HTML5, CSS3, and JavaScript. The portfolio follows a mobile-first approach and utilizes advanced CSS3 concepts such as CSS Grid, Flexbox, Media Queries, CSS Variables, and Dynamic Theme Switching.

The website is designed to provide an optimal viewing experience across mobile devices, tablets, and desktop screens.

---

## Objectives

- Create a visually appealing portfolio website.
- Implement responsive layouts using CSS Grid and Flexbox.
- Apply mobile-first responsive design principles.
- Use CSS Variables for theme customization.
- Develop a dynamic Light/Dark Mode theme.
- Enhance user experience with smooth transitions and hover effects.

---

## Technologies Used

### Frontend Technologies
- HTML5
- CSS3
- JavaScript (ES6)

### CSS Features
- CSS Grid Layout
- Flexbox Layout
- CSS Variables
- Media Queries
- Transitions & Animations
- Responsive Design

---

## Features

### 1. Responsive Navigation Bar
- Mobile-friendly navigation menu.
- Hamburger menu for smaller screens.
- Smooth navigation between sections.

### 2. Hero Section
- Professional introduction.
- Call-to-action button.
- Responsive profile image.

### 3. About Section
- Personal information.
- Educational background.
- Responsive card layout.

### 4. Skills Section
- Skill cards displayed using CSS Grid.
- Fully responsive design.

### 5. Projects Section
- Project showcase cards.
- Hover effects and transitions.

### 6. Contact Section
- Responsive contact form.
- User-friendly design.

### 7. Dark/Light Theme Toggle
- Dynamic theme switching.
- Implemented using CSS Variables and JavaScript.

### 8. Mobile First Design
- Optimized for:
  - Mobile Devices
  - Tablets
  - Laptops
  - Desktop Screens

---

## Project Structure

portfolio/

├── index.html

├── style.css

├── script.js

└── README.md

---

## Implementation Details

### CSS Grid
Used in:
- Hero Section
- Skills Section
- Projects Section
- About Section

Benefits:
- Two-dimensional layouts
- Flexible and responsive design

### Flexbox
Used in:
- Header
- Navigation Bar
- Form Layouts

Benefits:
- Easy alignment
- Responsive positioning

### Media Queries
Used to adapt layouts for:
- Mobile Screens
- Tablets
- Desktop Devices

Example:

```css
@media(min-width:768px){
.hero{
grid-template-columns:1fr 1fr;
}
}
