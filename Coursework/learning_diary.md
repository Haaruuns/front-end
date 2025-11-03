# Learning Diary
## Lappeenrannan teknillinen yliopisto
## Software Development Skills Front-End, Online course
## Haaruun Sugulle, 002603065

**27.10.2025**

I started the course by reading the general course information to understand its structure and objectives. After that, I moved on to the environment setup section and followed the instructions carefully.

I created a new folder called *front-end* and initialized a Git repository inside it. Then I made a subfolder named *Coursework* and added my first file called *learning_diary.md*. I learned how to check the repository status, add files to Git tracking, and make my first commit using the command line.

Finally, I created a new public GitHub repository and pushed my local project there successfully. Now my project structure is organized, and I understand better how Git and GitHub work together in software development.

## Module tasklist

**27.10.2025**

Today I continued working on the Software Development Skills: Front-End course and built the main structure for my project website. I created the HTML, CSS, JS, and image folders and connected all the necessary files correctly inside the index.html. I linked the external resources such as the CSS file, JavaScript file, favicon, Google Fonts, and Font Awesome icons. I also created the navigation bar with a logo, menu links, and a Log In button that includes an icon. After that, I tested the page in the browser to make sure all links and icons worked correctly.

I already knew how to build this kind of structure and link external files because I learned those skills earlier in the Introduction to Web Programming course. I also already understood what responsive design means and how it affects the layout on different screen sizes. Using Google Fonts was also familiar to me. The only new thing I learned in this task was how to use Font Awesome icons and include them in HTML elements. Now I understand how to import the Font Awesome library and use icon classes such as `<i class="fas fa-user"></i>` to add small icons.

After the HTML structure was well done , I created the core CSS for my front-end project. I built the main layout structure and styled the navigation, text, and images. Most of the CSS concepts were already familiar to me from the Introduction to Web Programming course, but this task helped me understand and apply them better in practice.

I learned to use display: flex more effectively to align items and organize page sections in a responsive way. I also discovered new and useful CSS properties such as list-style, which I used to remove bullets from navigation menus. Another important idea I learned was to give every image inside a div a max-width of 100%, so the images automatically adjust to the container and never stretch outside it.

The use of CSS variables was also something I already knew, but I now understand more clearly how they make styling more flexible and easier to maintain across the entire project. Overall, this part strengthened my confidence with modern CSS techniques and responsive design.

**28.10.2025**

In the Buttons & Utility Classes section of the video, I learned how to create a pure CSS button without using any external libraries. I understood how to style a button with CSS by adjusting properties like color, borders, backgrounds, and hover effects.

I also learned what utility classes are and how they make styling much easier. They allow you to quickly modify elements without writing new CSS each time — for example, changing colors, margins, or text size by simply adding a class to the HTML element.

Overall, I learned how utility classes make the code more reusable and organized, and how they can be used to manipulate the appearance and layout of buttons efficiently.

In the CSS Grid & Cards section of the video I created testimonial cards and a pricing section using CSS Grid. I learned how to use for example the property grid-template-columns: repeat(3, 1fr); to arrange elements evenly in three columns. CSS Grid works also similarly to Flexbox. By using Grid and other new CSS properties, I was able to create a clean, organized, and responsive layout for the content on the page.

In the FAQ elements section of the video I added a FAQ section with an accordion effect. It felt really good to see the page become more interactive. It made the website feel much more alive.

While doing this, I learned some new JavaScript tricks, like classList.toggle() for showing and hiding the answers, and e.target.closest(). These little discoveries made me understand the DOM much better.

In CSS, I got more comfortable with specific selectors, for example input 
 `[type="email"] `, and I also used .faq-group-body.open to style the FAQ item when it’s opened. Seeing how CSS and JavaScript work together like that was a nice "aha" moment.

I also created a footer with navigation links. Overall, I improved my understanding of how JavaScript and CSS work together to build interactive web components.

**03.11.2025**

In this stage, I focused on making the website fully responsive and setting up the mobile hamburger menu. Initially, the layout broke on smaller screens, and elements were not scaling correctly. After reviewing the structure, I discovered the problem came from using fixed width values in my container classes instead of max-width. Changing this made the layout flexible, allowing it to adapt smoothly to different screen sizes.

I also learned how to adjust multiple elements at once within media queries, which helped optimize the styling and avoid repetitive code. Throughout this process, I gained a better understanding of responsive design principles, how media queries control layout behavior, and how important flexible sizing is for mobile usability. The result is a fully responsive layout that looks clean and functions properly on both desktop and mobile devices.