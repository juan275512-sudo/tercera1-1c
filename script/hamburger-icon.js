console.log("hamburger-icon cargado correctamente ");

(function() {
    const MAIN_OBJ = {
        init: function() {
            this.eventhandlers();
            
        },
        eventhandlers: function() {
            document.querySelector(".hamburger-icon").addEventListener("click", function()  {
               document.querySelector(".menu-derecha").classList.toggle("menu-derecha-open");   // Handle hamburger icon click event
            });
        }
    }

    MAIN_OBJ.init();
})();
