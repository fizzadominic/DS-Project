document.addEventListener("DOMContentLoaded", function(){
    let link = document.getElementById("APlink");
    link.addEventListener('click', function(event){
        event.preventDefault();
        let url = this.getAttribute("href");
        window.open(url, "_blank");
    })

    let link2 = document.getElementById("GPLink");
    link2.addEventListener('click', function(event){
        event.preventDefault();
        let url = this.getAttribute("href");
        window.open(url, "_blank");
    })
    let link3 = document.getElementById("HPLink");
    link3.addEventListener('click', function(event){
        event.preventDefault();
        let url = this.getAttribute("href");
        window.open(url, "_blank");
    })

    
})
