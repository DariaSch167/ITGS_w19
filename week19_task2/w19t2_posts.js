const postsContainer = document.querySelector(".posts_container");
let postTitle;
let postBody;

document.addEventListener("DOMContentLoaded", fullfillPosts);

// Ограничила количество постов до 10
function fullfillPosts() {
  for (i = 1; i <= 10; i++) {
    getPost(i);
  }
}
// Достает из APi пост и запускает добавление поста на страницу
function getPost(i) {
  fetch("https://jsonplaceholder.typicode.com/posts/" + i)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      title = data.title;
      body = data.body;
      addPost(title, body);
    });
}

// Отдельная функция создания HTML лементов под пост
function addPost(title, body) {
  const postWrapper = document.createElement("div");
  postsContainer.appendChild(postWrapper);

  const postTitle = document.createElement("h2");
  postTitle.textContent = title;
  postWrapper.append(postTitle);

  const postBody = document.createElement("p");
  postBody.textContent = body;
  postWrapper.append(postBody);
}
