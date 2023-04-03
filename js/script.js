function menu() {
    document.querySelector(".menu_mobile_open").addEventListener( 'click', () => {

    let menu_mobile  = document.querySelector('.menu_mobile');
    menu_mobile.style.display = "flex";
    menu_mobile.style.top = "100px";
    menu_mobile.style.animation = "move ease-in 400ms";
     
        setTimeout(() => {
            document.querySelector('.menu_mobile_open').style.display = "none";
            document.querySelector('.menu_mobile_close').style.display = "flex";
        }, 200);
    });

    document.querySelector(".menu_mobile_close").addEventListener( 'click', () => {

        let menu_close = document.querySelector('.menu_mobile');
        menu_close.style.top = "-500%";
        menu_close.style.animation = "move ease-out 400ms";
        
        setTimeout(() => {
            if (document.querySelector('.menu_mobile').style.top = "-500%") {
                document.querySelector('.menu_mobile').style.display = "none";
            }
        }, 600);

        setTimeout(() => {
            document.querySelector('.menu_mobile_open').style.display = "flex";
            document.querySelector('.menu_mobile_close').style.display = "none";
        }, 100);
    });
     

}
menu();