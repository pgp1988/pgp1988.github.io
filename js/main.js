$(window).on("load", function(){
function toggleCheck() {
    const currentUrl = window.location.href;
    console.log(currentUrl);
    if(document.getElementById("myCheckbox").checked === false){
        if(currentUrl === "https://pgp1988.github.io/index.html" || currentUrl === "https://pgp1988.github.io/"){ 
            window.location.href = "https://pgp1988.github.io/index-es.html";
        }else if(currentUrl === "https://pgp1988.github.io/work-experience.html"){
            window.location.href = "https://pgp1988.github.io/experiencia.html";
        }else if(currentUrl === "https://pgp1988.github.io/education.html"){
            window.location.href = "https://pgp1988.github.io/edu.html";
        }else if(currentUrl === "https://pgp1988.github.io/certifications.html"){
            window.location.href = "https://pgp1988.github.io/certificaciones.html";
        }else if(currentUrl === "https://pgp1988.github.io/skills.html"){
            window.location.href = "https://pgp1988.github.io/habilidades.html";
        }else if(currentUrl === "https://pgp1988.github.io/contact.html"){
            window.location.href = "https://pgp1988.github.io/contacto.html";
        }              
    } 
    else if(document.getElementById("myCheckbox").checked === true) {
        if(currentUrl === "https://pgp1988.github.io/index-es.html"){
            window.location.href = "https://pgp1988.github.io/index.html";
        }else if(currentUrl === "https://pgp1988.github.io/experiencia.html"){
            window.location.href = "https://pgp1988.github.io/work-experience.html";
        }else if(currentUrl === "https://pgp1988.github.io/edu.html"){
            window.location.href = "https://pgp1988.github.io/education.html";
        }else if(currentUrl === "https://pgp1988.github.io/certificaciones.html"){
            window.location.href = "https://pgp1988.github.io/certifications.html";
        }else if(currentUrl === "https://pgp1988.github.io/habilidades.html"){
            window.location.href = "https://pgp1988.github.io/skills.html";
        }else if(currentUrl === "https://pgp1988.github.io/contacto.html"){
            window.location.href = "https://pgp1988.github.io/contact.html";
        }
    }

}

$('.photo').mousedown(function (e) {
    if(e.button == 2) { 
      return false; 
    }
  });


function loadSidebarStatus(){
    if(localStorage.length > 0){
        if(localStorage.getItem("sidebar-active") === "true"){
            document.getElementById('sidebar-active').checked = true;
            document.getElementsByClassName("links-container")[0].style.right = "0";
        }else{
            document.getElementsByClassName("links-container")[0].style.right = "-150%";
        }
    }
}

function closeSB(){
    localStorage.setItem("sidebar-active", "false");
    loadSidebarStatus();
}

function openSB(){
    localStorage.setItem("sidebar-active", "true");
    loadSidebarStatus();
}

$('.open-sidebar-button').on("click", function(){
    openSB();
});

$('.close-sidebar-button').on("click", function(){
    closeSB();
});

$('#overlay').on("click", function(){
    closeSB();
});

$('#myCheckbox').on("change", function(){
    toggleCheck();
});

loadSidebarStatus();

$(window).on('change', loadSidebarStatus);


});
