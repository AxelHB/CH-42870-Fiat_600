const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

//BOTÓN FLOTANTE
$(window).on("scroll", function() { 
    var nav = $('#container-floating');

    if ($(this).scrollTop() < 250 ||$(window).scrollTop() + $(window).height() > $(document).height() - 420 ) {
        nav.removeClass("mostrar");
     // alert("1");
    
      }else {
      nav.addClass("mostrar");

    }
});