function loadPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(data) {
  const postContainer = document.getElementById("post-container");

  for (const post of data) {
    const div = document.createElement("div");
    div.classList.add('post');

    div.innerHTML = `
    <h4>User : ${post.userId}</h4>
    <h5>Post: title: ${post.title} </h5>
    <p>Post description : ${post.body}</p>
    `;

    postContainer.appendChild(div);
  }
}
loadPosts();

