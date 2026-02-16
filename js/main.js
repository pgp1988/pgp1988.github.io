$(window).on("load", function(){
function toggleCheck() {
    const currentUrl = window.location.href;
    console.log(currentUrl);
    if(document.getElementById("myCheckbox").checked === false){
        if(currentUrl === "https://www.pablogonzalezperez.com/index.html" || currentUrl === "https://www.pablogonzalezperez.com/" || currentUrl === "https://pablogonzalezperez.com/"){ 
            window.location.href = "https://www.pablogonzalezperez.com/index-es.html";
        }else if(currentUrl === "https://www.pablogonzalezperez.com/work-experience.html" || currentUrl === "https://pablogonzalezperez.com/work-experience.html"){
            window.location.href = "https://www.pablogonzalezperez.com/experiencia.html";
        }else if(currentUrl === "https://www.pablogonzalezperez.com/education.html" || currentUrl === "https://pablogonzalezperez.com/education.html"){
            window.location.href = "https://www.pablogonzalezperez.com/edu.html";
        }else if(currentUrl === "https://www.pablogonzalezperez.com/certifications.html" || currentUrl === "https://pablogonzalezperez.com/certifications.html"){
            window.location.href = "https://www.pablogonzalezperez.com/certificaciones.html";
        }else if(currentUrl === "https://www.pablogonzalezperez.com/skills.html" || currentUrl === "https://pablogonzalezperez.com/skills.html"){
            window.location.href = "https://www.pablogonzalezperez.com/habilidades.html";
        }else if(currentUrl === "https://www.pablogonzalezperez.com/contact.html" || currentUrl === "https://pablogonzalezperez.com/contact.html"){
            window.location.href = "https://www.pablogonzalezperez.com/contacto.html";
        }              
    } 
    else if(document.getElementById("myCheckbox").checked === true) {
        if(currentUrl === "https://www.pablogonzalezperez.com/index-es.html" || currentUrl === "https://pablogonzalezperez.com/index-es.html"){
            window.location.href = "https://www.pablogonzalezperez.com/index.html";
        }else if(currentUrl === "https://www.pablogonzalezperez.com/experiencia.html" || currentUrl === "https://pablogonzalezperez.com/experiencia.html"){
            window.location.href = "https://www.pablogonzalezperez.com/work-experience.html";
        }else if(currentUrl === "https://www.pablogonzalezperez.com/edu.html" || currentUrl === "https://pablogonzalezperez.com/edu.html"){
            window.location.href = "https://www.pablogonzalezperez.com/education.html";
        }else if(currentUrl === "https://www.pablogonzalezperez.com/certificaciones.html" || currentUrl === "https://pablogonzalezperez.com/certificaciones.html"){
            window.location.href = "https://www.pablogonzalezperez.com/certifications.html";
        }else if(currentUrl === "https://www.pablogonzalezperez.com/habilidades.html" || currentUrl === "https://pablogonzalezperez.com/habilidades.html"){
            window.location.href = "https://www.pablogonzalezperez.com/skills.html";
        }else if(currentUrl === "https://www.pablogonzalezperez.com/contacto.html" || currentUrl === "https://pablogonzalezperez.com/contacto.html"){
            window.location.href = "https://www.pablogonzalezperez.com/contact.html";
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
