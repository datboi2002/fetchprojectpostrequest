document.addEventListener("DOMContentLoaded", function () {
    const postButton = document.getElementById("postButton");
    const titleInput = document.getElementById("titleInput");
    const descriptionInput = document.getElementById("descriptionInput");

    postButton.addEventListener("click", function () {
        const title = titleInput.value;
        const description = descriptionInput.value;

        
        if (title === "" || description === "") {
            alert("Both fields must be filled.");
            return;
        }

       
        const data = {
            userId: 1,
            title: title,
            body: description,
        };

        
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            if (response.status === 201 || response.status === 200) {
                alert("Successfully added a new user.");
                titleInput.value = "";
                descriptionInput.value = "";
            } else if (response.status === 400) {
                alert("400 error");
            } else if (response.status === 404) {
                alert("404 error");
            } else if (response.status === 500) {
                alert("500 error");
            } 
        })
        
    });
});
