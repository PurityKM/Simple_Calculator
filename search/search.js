const search = () => {
    const searchbox = document.getElementById("search-list").value.toUpperCase();
    const storelists = document.getElementById("content-lists")
    const lists = document.querySelectorAll(".contents")
    const desc = storelists.getElementsByTagName("h2")

    for (var i = 0; i < desc.length; i++) {
        let match = lists[i].getElementsByTagName('h2')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                lists[i].style.display = "";
            } else {
                lists[i].style.display = "none";
            }
        }
    }
}