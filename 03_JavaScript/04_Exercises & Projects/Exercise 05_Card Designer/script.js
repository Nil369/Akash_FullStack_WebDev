function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("EXPLORING DALHOUSIE | AH Miles FrameFusion #2", "A.H Miles Frame Fusion", 100, 1, "18:08", "https://i.ytimg.com/vi/gebKxkJLFvY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWnN0cSO1VvIw8aHG8pdYnmvNuUQ")
createCard("EXPLORING DALHOUSIE | AH Miles FrameFusion #2", "A.H Miles Frame Fusion", 150, 1, "18:08", "https://i.ytimg.com/vi/AqsQ4ObtVvQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAnT9m_2HRUoaC-S1t9yyr3KxkABQ")
