const newPostTitle = document.getElementById("new_post_title");
const newPostBody = document.getElementById("new_post_body");
const postsContainer = document.querySelector(".posts_container");
const saveButton = document.getElementById("new_post_save");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.userId = 1;
  }
}

saveButton.addEventListener("click", savePost);

function savePost() {
  const postData = new Post(newPostTitle.value, newPostBody.value);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      addPostContainer(data.title, data.body);
    });
  newPostTitle.value = "";
  newPostBody.value = "";
}

function addPostContainer(title, body) {
  const postWrapper = document.createElement("div");
  postsContainer.appendChild(postWrapper);

  const postTitle = document.createElement("h2");
  postTitle.textContent = title;
  postWrapper.append(postTitle);

  const postBody = document.createElement("p");
  postBody.textContent = body;
  postWrapper.append(postBody);
}
