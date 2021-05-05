async function commentDataHandler() {
  const request = await fetch("/api/hotel/1/comments");
  const comments = await request.json();
  const commentArea = document.querySelector('.currentComments');

  comments.forEach((comment) => {
    const commentAdd = document.createElement("li");
    commentAdd.classList.add("block");
    commentAdd.classList.add("list-item");
    commentAdd.id = comment.comment_id;
    commentAdd.innerHTML = `<div class = "box">
    <article class="message">
        <div class="message-header">
          <p>${comment.name}</p>
          <button class="delete" aria-label="delete" onclick = deleteElement(${comment.comment_id});></button>
        </div>
        <div class="message-body">
          ${comment.comment}
        </div>
    </article>
  </div>`;
    commentArea.append(commentAdd);
  });
}

async function deleteElement(elementId) {
  const elementRemove = document.getElementById(elementId)
  elementRemove.parentNode.removeChild(elementRemove);
  const response = await fetch(`/api/comments/${elementId}`, {method: 'Delete'})
  location.reload();
}

async function windowActions() {
  await commentDataHandler();
}

window.onload = windowActions;
