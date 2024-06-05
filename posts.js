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
    div.innerHTML = `
    <h4>User</h4>
                <h5>Post: title</h5>
                <p>Post description</p>
    `;
    postContainer.appendChild(div);
  }
}
loadPosts();
