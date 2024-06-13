const config = {
    "name_server": "Server Name",
    "name_developer": "Eikarna",
    "url": {
        "vhost": "YOUR_MEDIAFIRE_URL",
        "ptunnel": "YOUR_PTUNNEL_URL"
    },
    "path": {
        "online": "../Online.txt",
        "players": "../DATABASE/players",
        "worlds": "../DATABASE/worlds",
        "guilds": "../DATABASE/guilds"
    }
}

const burgerBtn = document.querySelectorAll(".burger");

var fr = new FileReader();

let burgerClicked = 1
burgerBtn.forEach(item => {
    item.addEventListener("click", function() {
        const nav = document.querySelector(".nav");
        if (burgerClicked) {
            burgerClicked--
            nav.style.display = "flex"
            return
        }
        burgerClicked++
        nav.style.display = "none"
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        console.log(targetId)
        if (targetId == '#') return
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const topOffset = targetElement.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    });
});

window.onload = function(e) {
    document.querySelectorAll('[id]').forEach(anchor => {
        let targetId = anchor.getAttribute('id')
        let targetElement = document.getElementById(targetId)
        if (targetElement) {
            switch (targetId) {
                case "title-name":
                    targetElement.innerHTML = config.name_server + " | Growtopia Private Server"
                    break
                case "name-server":
                    targetElement.innerHTML = config.name_server
                    break
                case "link-vhosts":
                    targetElement.href = config.url.vhost
                    targetElement.target = "_blank"
                    break
                case "link-ptunnel":
                    if (targetElement.classList.contains("btn2")) {
                        targetElement.innerHTML = config.url.ptunnel
                    } else {
                        targetElement.href = config.url.ptunnel
                    }
                    break
                case "link-credit":
                    if (targetElement.classList.contains("btn")) {
                        var dt = new Date()
                        targetElement.innerHTML = config.name_developer + " &copy; " + config.name_server + " - " + dt.getFullYear()
                    }
            }
        }
    })
}
