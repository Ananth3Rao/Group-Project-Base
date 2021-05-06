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
          <div>
          <button class="button is-rounded" onclick = editComment(${comment.comment_id})>Edit</button>
          <button class="delete" aria-label="delete" onclick = deleteElement(${comment.comment_id});></button>
          </div>
          </div>
        <div class="message-body">
          ${comment.comment}
        </div>
    </article>
  </div>`;
    commentArea.append(commentAdd);
  });
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

async function deleteElement(elementId) {
  const elementRemove = document.getElementById(elementId)
  elementRemove.parentNode.removeChild(elementRemove);
  await fetch(`/api/comments/${elementId}`, {method: 'Delete'})
  location.reload();
}

async function editComment(elementId) {
  const elementEdit = document.getElementById(elementId);
  const editSection = document.createElement("div");
  editSection.classList.add("box");
  editSection.classList.add("edit");
  editSection.innerHTML = `<form id = "editForm" name = "editForm" action = "/api/comments/${elementId}" method ="POST">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Name</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                       <p class = "control">
                          <input class="input" type="text" placeholder="Name" name = "name">
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Comment</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control">
                          <input class="input" type="text" placeholder="Comment" name = "comment">
                        </p>
                      </div>
                    </div>
                  </div>
                  <input class="button" type="submit" value="Submit" >
            </form>`
  elementEdit.append(editSection);
  const editContent = document.getElementById("editForm");
  editContent.addEventListener('submit', async (e) => {
    e.preventDefault();
    await fetch(`/api/comments/${elementId}`, {
      method: 'PUT',
      body: `name=${editContent.elements["name"].value}&comment=${editContent.elements["comment"].value}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  });
}


async function windowActions() {
  await commentDataHandler();
}

window.onload = windowActions;
