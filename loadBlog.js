const errorMessage = document.getElementById("errorMessage");
const blogContainer = document.getElementById("blogContainer");

const activeBlogId = +localStorage.getItem("blogId")
  ? localStorage.getItem("blogId")
  : null;

if (!activeBlogId) {
  blogContainer.style.display = "none";
  errorMessage.style.display = "block";
} else {
  blogContainer.style.display = "block";
  errorMessage.style.display = "none";
}

let blogs = localStorage.getItem("blogs")
  ? JSON.parse(localStorage.getItem("blogs"))
  : null;
let activeBlog;
if (blogs && blogs.length) {
  activeBlog = blogs.filter((blog) => blog.blogId === +activeBlogId);
  createBlog(activeBlog[0]);
}

function createBlog(blog) {
  // For blog title
  const h1 = document.createElement("h1");
  h1.innerHTML = blog.fullContent.title;

  blogContainer.appendChild(h1);

  //   For blog author and upload date details
  const div = document.createElement("div");
  div.classList.add("blog-info-div");

  const authorSpan = document.createElement("span");
  authorSpan.innerHTML = `By: ${blog.shortContent.author}`;

  const dateSpan = document.createElement("span");
  dateSpan.innerHTML = `Posted on: ${new Date(
    blog.shortContent.datePosted
  ).getDate()}-${
    new Date(blog.shortContent.datePosted).getMonth() + 1
  }-${new Date(blog.shortContent.datePosted).getFullYear()}`;

  div.appendChild(authorSpan);
  div.appendChild(dateSpan);

  blogContainer.appendChild(div);

  //   For blog banner image
  const bannerImg = document.createElement("img");
  bannerImg.src = blog.fullContent.imgSrc;
  bannerImg.classList.add("blog-image", "my-4");

  blogContainer.appendChild(bannerImg);

  //   For blog description
  const description = document.createElement("p");
  description.innerHTML = blog.fullContent.description;

  blogContainer.appendChild(description);

  //   For blog contents
  blog.fullContent.content.forEach((section) => {
    const heading = document.createElement("h4");
    heading.innerHTML = section.heading;

    const content = document.createElement("p");
    content.innerHTML = section.content;

    blogContainer.appendChild(heading);
    blogContainer.appendChild(content);
  });

  //   For blog conclusion
  const h2 = document.createElement("h2");
  h2.innerHTML = blog.fullContent.conclusion;

  blogContainer.appendChild(h2);

  //   For blog conclusion description
  const conclusionDescription = document.createElement("p");
  conclusionDescription.innerHTML = blog.fullContent.conclusionDesc;

  blogContainer.appendChild(conclusionDescription);
}
