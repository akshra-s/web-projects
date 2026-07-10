let search = document.querySelector("#searchInput");
let chats = document.querySelectorAll(".chatb");

search.addEventListener("change", function () {

    let found = false;

    chats.forEach(function(chat) {

        chat.style.border = "none";

        let sender = chat.querySelector(".sender").innerText.toLowerCase();

        if (sender == search.value.toLowerCase()) {

            chat.style.border = "3px solid red";
            chat.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            found = true;
        }

    });

    if (!found) {
        alert("Sender Not Found!");
    }

});
let deleteBtns = document.querySelectorAll(".dlt-btn");

deleteBtns.forEach(function(btn) {
    btn.onclick = function(event) {

        if (!confirm("Delete This Chat?")) {
            event.preventDefault();
        }

    };
});