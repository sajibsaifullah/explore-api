document.getElementById('btn-click').addEventListener('click', function () {
    function loadComment(data) {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => displayData(data))
    }

    function displayData(comments) {
        const loadComment = document.getElementById('comments-container');
        for (const comment of comments) {
            const commentContainer = document.getElementById('comments-container');
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <h3>Id: ${comment.id}</h3>
                <p>Name: ${comment.name}</p>
                <p>Email: ${comment.email}</p>
            `;
            commentContainer.appendChild(commentDiv);
        }

    }

    loadComment();
})