async function commentDataHandler() {
  const request = await fetch("/api/hotel/1/comments");
  const comments = await request.json();

  const commentArea = document.querySelector('.currentComments');

  comments.forEach((comment) => {
    const commentAdd = document.createElement("li");
    commentAdd.classList.add("block");
    commentAdd.classList.add("list-item");
    commentAdd.innerHTML = `<h>${comment.name}</h2>
        <p>${comment.comment}</p>`;
    //commentArea.append(commentAdd);
  });
}

async function windowActions() {
  await commentDataHandler();
}

window.onload = windowActions;
