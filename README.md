# Depeche Mode Quiz

## A quiz about the band's history and their music!

![Mockup image](assets/docs/am-i-responsive.png)

(Developer: Alexander Strauch)

## **[Live site](https://alexstrauch.github.io/dm-quiz/index.html)**

## Table of contents

1. [Introduction](#introduction)
   - [Project description](#project-description)
   - [Purpose](#purpose)
2. [UX](#ux)
   - [User demographic](#user-demo)
   - [User goals](#user-goals)
   - [User expectations](#user-expectations)
   - [User stories](#user-stories)
3. [Design](#design)
   - [Design choices](#design-choices)
   - [Fonts](#fonts)
   - [Colors](#colors)
   - [Layout](#layout)
   - [Wireframes](#wireframes)
4. [Features](#features)
5. [Future features](#future-features)
6. [Languages](#languages)
7. [Technologies](#technologies)
8. [Testing](#testing)
   - [Link validation](#link-validation)
   - [Form validation](#form-validation)
   - [Responsiveness validation](#responsiveness-validation)
   - [HTML validation](#html-validation)
   - [CSS validation](#css-validation)
   - [Performance](#performance)
   - [Accessibility](#accessibility)
9. [Bugs](#bugs)
10. [Deployment](#deployment)
11. [Credits](#credits)
12. [Acknowledgements](#acknowledgements)

## Introduction

### Project description

- The Depeche Mode quiz is a web application that offers 10 questions each with 4 possible answers about the history of the band and the music they published over the decades.

### Purpose

- The purpose of the project is to make a fun accessible quiz which is visually engaging, providing users with curated content about the band's past and present. The platform was built to inform new fans and hardcore fans through guided questions about their favorite band.

[Back to table of contents](#table-of-contents)

## UX

### User demographic

- This project is intended for Depeche Mode fans and newcomers of all ages who want to dive deeper into the history of the band.

### User goals

- Test knowledge about Depeche Mode's history

- Learn new information together with lesser-known facts and trivia

- Recall memories associated with their favorite songs

- Enjoy a fun activity that combines love for music with interactive entertainment

### User expectations

- Clean modern visual appearance which follows best practices

- Accessible website on all devices

- Responsive design on all devices without layout or performance issues

- User-friendly interface with easy access to the provided information

- Links and features that work the way they are intended to

- Comprehensive insights about certain milestones during the band's history

### User stories

#### User

- As a new fan I want a quiz that helps me discover key songs and albums from Depeche Mode, so that I can become more familiar with their music and join discussions with other fans

- As a casual fan I want to learn more about the history and evolution of Depeche Mode through a fun quiz, so that I can appreciate their music on a deeper level

- As a longtime fan I want to test my knowledge of Depeche Mode's discography, so that I can see how well I know my favorite band

- As a nostalgic listener I want to recall memorable moments associated with Depeche Mode’s music through quiz questions, so that I can relive those experiences

#### Site owner

- As the operator of the site I want to create an engaging Depeche Mode quiz, so that fans can test their knowledge and share their love for the band

- As the the site owner I want to provide an engaging user experience

- As the site owner I want to display important events that took place during the band's history

- As the site owner I want to promote the site to grow the user base

- As the site operator I want to continuously improve the platform

[Back to table of contents](#table-of-contents)

## Design

### Design choices

Being a huge fan of their music, I decided to create a quiz highlighting key facts about the band across different decades. The logo prominently features the website’s name, and the interface is minimalist and clean, prioritizing the content. Each menu link is clearly labeled, helping users easily navigate to the relevant sections. I incorporated ample white space to guide attention to the most important elements.

### Fonts

Fonts were used through import from https://fonts.google.com/. The chosen font for the body was _Ruda_ for its clarity and ease of reading. _Arial, sans-serif_ was chosen as the fallback font for all elements.
To highlight my name with a link to my GitHub profile I used _Rock Salt_.

### Colors

I chose the color scheme of white for the font and black for the background in the menu and the footer because it best represents the band's style with a monochromatic feel to it. These are also applied to the possible answers in the quiz & the action buttons (start, rules) in their natural state.

![Colors](assets/docs/menu-colors-fg-bg.png)

For the font-color used for the quiz question, the heading and the paragraphs on the about page I chose a classic dark charcoal with a classic white background.

![Colors](assets/docs/font-colors-fg-bg.png)

### Layout

I aimed to create an intuitive design with simple navigation. To achieve this, the website logo is positioned in the top left corner, while the navigation links are placed on the top right.The header, containing both the logo and menu, is fixed at the top of the page, ensuring easy access to the navigation as users scroll. At the bottom, the footer includes links to social media accounts (each opening in a new tab) on the left, along with the website name, my name (linked to my GitHub profile), and a note clarifying trademarks, logos, and brand ownership. The site consists of two pages:

- Home with a background image of Depeche Mode during a concert in Toronto underneath the header. The header includes a h1 element with the "Welcome Devotees!" message, underneath that is a paragraph including "Test your knowledge about Depeche Mode".
In the main section below the header are the "Start quiz" button and the "Rules" button.

- About the quiz with a background image of Depeche Mode during a concert in Toronto underneath the header. The header includes a h1 element with the "Welcome Devotees!" message, underneath that is a paragraph including "Test your knowledge about Depeche Mode". In the main section below the header is a h2 element with "About this quiz" and 2 paragraphs with the content of "This Depeche Mode quiz was created as part of my coding bootcamp." and "It's a fun way to test your knowledge of the band's history, albums, songs and more.". Underneath that are 4 images showing the band during concerts from 2006 until 2023.

### Wireframes

<details><summary>Homepage desktop wireframe (Click me)</summary>
<img src="assets/docs/wireframe-desktop.png">
</details>

<details><summary>Homepage tablet wireframe (Click me)</summary>
<img src="assets/docs/wireframe-tablet.png">
</details>

<details><summary>Homepage mobile wireframe (Click me)</summary>
<img src="assets/docs/wireframe-iPhone.png">
</details>

[Back to table of contents](#table-of-contents)

## Features

The website contains 2 pages in total.

<details>
    <summary>Logo and navigation (Click me)</summary>  
    It is included on all 2 pages.<br> 
    The logo displays the name of the website & is a clickable link to the homepage which is just best practices.<br> 
    On the right there are two links to each of the pages: "Home" and "About the quiz" so the user can easily navigate through.<br> 
    The current page the user is browsing at the moment is highlighted.<br>
    The logo and the menu are responsive, the page links become a burger menu when viewed on a mobile device.
    <img src="assets/docs/logo-navigation.png">
</details>
<details>   
    <summary>Hero image (Click me)</summary>     
    Placed on the top of all pages<br>
    Shows Depeche Mode during a concert in Toronto.<br>
    Included in it is a h1 element with the "Welcome Devotees!" message. Underneath it is a p element with the content of "Test your knowledge about Depeche Mode". It is responsive, the background image is resized for smaller screens.<br>
    <img src="assets/docs/hero-image.png">
</details>