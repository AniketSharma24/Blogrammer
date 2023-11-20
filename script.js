// Dummy blog data
const blogsCards = [
  {
    blogId: 1,
    clickCount: 0,
    fullContent: {
      title: "Unlocking JavaScript Brilliance: A Journey into ES6 Wonders",
      description:
        "Explore the power and elegance of ECMAScript 6 (ES6) in this comprehensive guide. From arrow functions to classes, dive into the features that make ES6 a must-know for modern JavaScript developers. Upgrade your coding experience and embark on a journey through the enhanced capabilities of ES6!",
      content: [
        {
          heading: "Arrow Functions",
          content: `ES6 introduces concise arrow function syntax, simplifying function expressions. Arrow functions are not only more compact but also have a lexical 'this', which helps avoid common pitfalls of traditional function expressions.`,
        },
        {
          heading: "let and const Declarations",
          content: `ES6 introduced let and const as alternatives to the widely used var for variable declarations. The key advantage of let and const is block-scoping, providing better control over variable scope and reducing unintended side effects.`,
        },
        {
          heading: "Template Literals",
          content: `Template literals offer a more readable way to concatenate strings and include expressions. They support multiline strings and dynamic content embedding, enhancing the readability and expressiveness of your code.`,
        },
        {
          heading: "Destructuring Assignment",
          content: `ES6 enables destructuring assignment for arrays and objects, making code more concise. This feature simplifies variable assignment and extraction from complex data structures, improving code readability and maintainability.`,
        },
        {
          heading: "Classes",
          content: `ES6 introduces a class syntax, providing a more familiar and cleaner way to implement object-oriented programming in JavaScript. Classes promote code organization and reusability, facilitating the creation of well-structured and maintainable code.`,
        },
        {
          heading: "Spread and Rest Operator",
          content: `The spread and rest operators offer versatile ways to work with arrays and function arguments. The spread operator simplifies array manipulation, while the rest operator allows functions to accept an arbitrary number of arguments, making your code more flexible and adaptable.`,
        },
      ],
      conclusion: "Conclusion",
      conclusionDesc:
        "Embark on the journey of exploring ES6 and unlock the full potential of JavaScript. These features are designed to streamline your code and make your development process more enjoyable and efficient. Cheers to the brilliance of ES6!",
    },
    shortContent: {
      title: "Unlocking JavaScript Brilliance: A Journey into ES6 Wonders",
      author: "Aniket Sharma",
      datePosted: new Date(),
      description:
        "Explore the power and elegance of ECMAScript 6 (ES6) in this comprehensive guide. From arrow functions to classes, dive into the features that make ES6 a must-know for modern JavaScript developers. Upgrade your coding experience and embark on a journey through the enhanced capabilities of ES6!",
    },
  },
  {
    blogId: 2,
    clickCount: 0,
    fullContent: {
      title: "Navigating with Inclusivity: A Guide to Web Accessibility",
      description:
        "Delve into the world of web accessibility and discover how to make your websites universally welcoming. From semantic HTML to keyboard navigation, uncover the principles that ensure an inclusive online experience for users of all abilities. Let's build a web that embraces diversity and inclusion!",
      content: [
        {
          heading: "Understanding Web Accessibility",
          content: `Web accessibility refers to the practice of making websites and web applications usable and navigable by people of all abilities and disabilities. It's about creating an inclusive online experience that accommodates diverse user needs and preferences.`,
        },
        {
          heading: "Semantic HTML",
          content: `Using semantic HTML is the foundation of web accessibility. Properly structured HTML provides meaningful information to assistive technologies and helps create a clear document outline. Semantic HTML contributes to improved SEO and facilitates a more accessible user experience.`,
        },
        {
          heading: "Descriptive Text and Alternative Text for Images",
          content: `Descriptive text is crucial for users who rely on screen readers. Use meaningful text for links, buttons, and form fields. Additionally, provide alternative text for images to convey their content and function. Alt text ensures that users with visual impairments can understand the purpose of images on your site.`,
        },
        {
          heading: "Keyboard Navigation",
          content: `Ensure that all interactive elements can be accessed and operated using a keyboard. Many users, especially those with motor disabilities, rely on keyboard navigation. Test your website's tab order and ensure that users can navigate through your site without a mouse.`,
        },
        {
          heading: "Contrast and Color Considerations",
          content: `Maintain sufficient color contrast to ensure readability for users with visual impairments. Avoid relying solely on color to convey information. Use patterns, labels, or icons to supplement color-coded information. This ensures that your content is accessible to a wider audience with varying levels of vision.`,
        },
        {
          heading: "Form Accessibility",
          content: `Forms are a crucial part of web interactions. Ensure that form fields are properly labeled and that error messages are clear and descriptive. Use ARIA attributes when necessary to enhance the accessibility of dynamic content. Accessible forms contribute to a more user-friendly experience for all users.`,
        },
      ],
      conclusion: "Conclusion",
      conclusionDesc:
        "Embrace the principles of web accessibility to create a digital landscape that is welcoming and accessible to all. Building with inclusivity in mind is not just a best practice; it's a commitment to making the web a space where everyone can participate fully. Cheers to an inclusive and accessible web!",
    },
    shortContent: {
      title: "Navigating with Inclusivity: A Guide to Web Accessibility",
      author: "Aniket Sharma",
      datePosted: new Date(),
      description:
        "Delve into the world of web accessibility and discover how to make your websites universally welcoming. From semantic HTML to keyboard navigation, uncover the principles that ensure an inclusive online experience for users of all abilities. Let's build a web that embraces diversity and inclusion!",
    },
  },
  {
    blogId: 3,
    clickCount: 0,
    fullContent: {
      title: "Unleashing the Power of HTML5: A Comprehensive Guide",
      description:
        "HTML5, the fifth and latest version of the Hypertext Markup Language, has revolutionized web development by introducing powerful features and capabilities. In this comprehensive guide, we'll explore the key aspects of HTML5 and how it empowers developers to create modern, interactive, and dynamic web experiences. 🚀✨",
      content: [
        {
          heading: "The Evolution of HTML: Welcome to HTML5",
          content:
            "HTML5 represents a significant leap forward in the world of web development. It was designed to enhance the language with new features while maintaining compatibility with older HTML versions. As a result, developers can now leverage a wide range of functionalities to build more sophisticated and user-friendly websites.",
        },
        {
          heading: "Multimedia Integration: Audio and Video",
          content:
            "One of the standout features of HTML5 is its native support for audio and video elements. No more reliance on third-party plugins like Flash—HTML5 enables seamless integration of multimedia content. This not only simplifies development but also enhances the user experience by providing native controls and better performance.",
        },
        {
          heading: "Canvas for Graphics and Animations",
          content:
            "HTML5 introduces the 'canvas' element, a powerful tool for rendering graphics and creating animations directly within the browser. Developers can use JavaScript to draw shapes, manipulate images, and build interactive visuals, opening up new possibilities for engaging and dynamic web content.",
        },
        {
          heading: "Form Enhancements: Validation and Input Types",
          content:
            "HTML5 brings improvements to web forms, making them more user-friendly and reducing the need for complex JavaScript solutions. With built-in form validation and new input types (such as email, date, and number), developers can create forms that are not only visually appealing but also provide a smoother user experience.",
        },
        {
          heading: "Local Storage and Offline Applications",
          content:
            "HTML5 includes the ability to store data locally on the user's device. With features like Local Storage and Web Storage, developers can create web applications that work seamlessly offline. This opens up opportunities for building progressive web apps that continue to function even when an internet connection is unstable or unavailable.",
        },
        {
          heading: "Responsive Web Design with HTML5",
          content:
            "The mobile revolution prompted the need for responsive web design, and HTML5 plays a crucial role in achieving this. With semantic elements like 'article', 'nav', and 'header', developers can create well-structured, accessible content that adapts gracefully to different screen sizes and devices.",
        },
        {
          heading: "Geolocation API: Location-Aware Web Applications",
          content:
            "HTML5 introduces the Geolocation API, allowing web applications to access a user's geographical location. This feature is invaluable for creating location-aware services, such as mapping and location-based content delivery, enriching the user experience with relevant and personalized information.",
        },
        {
          heading: "The Future with HTML5: Web Components and Beyond",
          content:
            "Looking forward, HTML5 continues to evolve with the introduction of web components—a set of technologies that enable the creation of reusable and encapsulated custom elements. This paves the way for more modular and maintainable web development practices.",
        },
      ],
      conclusion: "Conclusion",
      conclusionDesc:
        "HTML5 has transformed the landscape of web development, providing developers with a robust set of tools and features. From multimedia integration to improved forms and offline capabilities, HTML5 empowers developers to build modern, responsive, and feature-rich web applications. As we continue to explore and push the boundaries of what HTML5 can achieve, the future of web development looks more exciting than ever.",
    },
    shortContent: {
      title: "Unleashing the Power of HTML5: A Comprehensive Guide",
      author: "Aniket Sharma",
      datePosted: new Date(),
      description:
        "Discover the transformative capabilities of HTML5! From semantic elements to multimedia support and local storage, explore the features that make HTML5 the driving force behind modern web development. Embrace the power of HTML5 and unlock the full potential of the web. Happy coding!",
    },
  },
];

// Setting the blogs into local storage to make it available across the application
if (
  JSON.parse(localStorage.getItem("blogs")) &&
  !JSON.parse(localStorage.getItem("blogs")).length
) {
  localStorage.setItem("blogs", JSON.stringify(blogsCards));
}

const blogListContainer = document.getElementById("blogList");
const popularBlogListContainer = document.getElementById("popularBlogList");

generateBlogCard();
generatePopularBlogCard();

// Function to generate all the blogs available
function generateBlogCard() {
  for (let blog of blogsCards) {
    const div = document.createElement("div");
    div.classList.add("blog-card", "p-4", "shadow-sm");

    const cardBanner = document.createElement("img");
    cardBanner.src = "https://technext.github.io/bizze/images/blog-img-1.png";
    cardBanner.classList.add("blog-banner", "mb-2");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title", "fs-4", "mb-2");
    cardTitle.innerHTML = `${blog.shortContent.title}`;

    const cardDesc = document.createElement("p");
    cardDesc.classList.add("mb-2");
    cardDesc.innerHTML = `${blog.shortContent.description}`;

    const cardAuthor = document.createElement("p");
    cardAuthor.classList.add("mb-2", "card-detail-text");
    cardAuthor.innerHTML = `By: ${blog.shortContent.author}`;

    const cardUploadDate = document.createElement("p");
    cardUploadDate.classList.add("mb-2", "card-detail-text");
    cardUploadDate.innerHTML = `Uploaded On: ${blog.shortContent.datePosted.getDate()}-${
      blog.shortContent.datePosted.getMonth() + 1
    }-${blog.shortContent.datePosted.getFullYear()}`;

    const readMoreButton = document.createElement("a");
    readMoreButton.href = "blog-post.html";
    readMoreButton.id = "readMore";
    readMoreButton.classList.add("btn", "btn-explore");
    readMoreButton.dataset.blogid = blog.blogId;
    readMoreButton.innerHTML = "Read More";

    div.appendChild(cardBanner);
    div.appendChild(cardTitle);
    div.appendChild(cardDesc);
    div.appendChild(cardAuthor);
    div.appendChild(cardUploadDate);
    div.appendChild(readMoreButton);

    blogListContainer.appendChild(div);
  }
}

// Function to generate and display the most readable blogs
function generatePopularBlogCard() {
  for (let blog of blogsCards) {
    const popularBlogCardLink = document.createElement("a");
    popularBlogCardLink.classList.add("popular-blog-card", "p-4", "shadow-sm");

    const cardBanner = document.createElement("img");
    cardBanner.src = "https://technext.github.io/bizze/images/blog-img-1.png";
    cardBanner.classList.add("popular-blog-banner");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("popular-blog-content");

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title", "fs-5", "mb-2");
    cardTitle.innerHTML = `${blog.shortContent.title}`;

    const popularBlogDetails = document.createElement("div");
    popularBlogDetails.classList.add("popular-blog-details");

    const cardAuthor = document.createElement("span");
    cardAuthor.classList.add("mb-2", "card-detail-text");
    cardAuthor.innerHTML = `By: ${blog.shortContent.author}`;

    const cardUploadDate = document.createElement("span");
    cardUploadDate.classList.add("mb-2", "card-detail-text");
    cardUploadDate.innerHTML = `Uploaded On: ${blog.shortContent.datePosted.getDate()}-${
      blog.shortContent.datePosted.getMonth() + 1
    }-${blog.shortContent.datePosted.getFullYear()}`;

    popularBlogDetails.appendChild(cardAuthor);
    popularBlogDetails.appendChild(cardUploadDate);

    contentDiv.appendChild(cardTitle);
    contentDiv.appendChild(popularBlogDetails);

    popularBlogCardLink.appendChild(cardBanner);
    popularBlogCardLink.appendChild(contentDiv);

    popularBlogCardLink.dataset.blogid = blog.blogId;
    popularBlogCardLink.href = "blog-post.html";

    popularBlogListContainer.appendChild(popularBlogCardLink);
  }
}

// Added click event to read more button when clicked it will open a blog post in new page
const readMoreButtons = document.querySelectorAll("#readMore");
readMoreButtons.forEach((readMore) => {
  readMore.addEventListener("click", function () {
    setActiveBlog(readMore.dataset.blogid);
  });
});

function setActiveBlog(id) {
  if (id) {
    localStorage.setItem("blogId", id);
  }
}
