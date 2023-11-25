
# Lemon's Blog
A simple blog site with a header , footer and main content section with data fetched from the JSONPlaceholder API [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts).

### Showcase

#### Hero Section desktop
![Hero Section](https://github.com/philemon1112/Adsparo-task/blob/main/public/Assets/Img/DesktopHero.png)

#### Blogs grid desktop
![Blogs grid](https://github.com/philemon1112/Adsparo-task/blob/main/public/Assets/Img/DesktopBlogsGrid.png)

#### Blogs details Modal desktop
![Blog details modal](https://github.com/philemon1112/Adsparo-task/blob/main/public/Assets/Img/DesktopModal.png)

#### Footer Section 
![Footer Section](https://github.com/philemon1112/Adsparo-task/blob/main/public/Assets/Img/FooterSection.png)

#### 404 Error Page 
![404 error page](https://github.com/philemon1112/Adsparo-task/blob/main/public/Assets/Img/NotFoundPage.png)

#### Mobile Hero Section 
![Mobile Hero Section](https://github.com/philemon1112/Adsparo-task/blob/main/public/Assets/Img/MobileHero.png)

#### Mobile Bottom Nav sheet 
![Mobile Blog details modal](https://github.com/philemon1112/Adsparo-task/blob/main/public/Assets/Img/MobileModal.png)

## Project Structure

```bash


├── app/
    ├── error.js
    ├── globals.css
    ├── layout.js
    ├── not-found.js
    ├── page.js
├── components/
    ├── Cards/
        ├── BlogsCard.js
        ├── LoadingCard.js
    ├── Layout/
        ├── Footer.js
        ├── Header.js
    ├── Sections/
        ├── BlogSection.js
        ├── HeroSection.js
    ├── Shared/
        ├── BlogsCard.js
        ├── LoadingCard.js
├── public/
    ├── Asets/
        ├── Img/
        ├── Svg/


```

[`app`]("/app")
- This is the app Router for nextjs 13 , it contains the main route of the application, with page.js being the index page

[`public/Assets`]("./public/Assets")

- Contains images and some SVG icons used in the project

[`components`]("/components")

- Contains reusable components such as cards, modals, Layout, various page sections, and shared components




## How to setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

This project makes use of a list of npm packages. They can be installed during the process of setting up the application using `npm install`

- `axios` - For making external api calls / request

- `@headlessui/react` - This is a tailwindcss support library  

- `@heroicons/react` -  This package contains a list of icon packs used in the project

The nextjs project also came with already installed packages such as `next`, `react`, `tailwindcss` and `react-dom`.



