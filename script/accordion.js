console.log('Cargando Accordion...');
const dataAccordion = [{
  "title": "¿Qué son los componentes de hardware?",
  "desc": "Los componentes de hardware son todas las partes físicas y tangibles de un sistema informático o dispositivo electrónico. Es decir, cualquier elemento que se pueda ver y tocar, desde los circuitos internos hasta los periféricos externos."
},
{
  "title": "¿Qué se necesita para armar una computadora de escritorio?",
  "desc": "Procesador (CPU), Placa Base (Motherboard), Memoria RAM, Almacenamiento (SSD) o (hdd), Tarjeta Gráfica (GPU), Fuente de Alimentación (PSU),Refrigeración (Disipador), Caja (Gabinete / Case), ademas de perifericos extras ."
},
{
  "title": "¿Cuales son esos perifericos extras que se necesitan ?",
  "desc": "Monitor, teclado y ratón para interactuar con el equipo, además de algún sistema de sonido."
},
];


(function () {
    let ACCORDION = {
      init: function () {
        let _self = this;
        //llamanos las funciones
        this.insertData(_self);
        this.eventHandler(_self);
      },
  
      eventHandler: function (_self) {
        let arrayRefs = document.querySelectorAll('.accordion-title');
  
        for (let x = 0; x < arrayRefs.length; x++) {
          arrayRefs[x].addEventListener('click', function(event){
            console.log('event', event);
            _self.showTab(event.target);
          });
        }
      },

      showTab: function(refItem){
        let activeTab = document.querySelector('.tab-active');
  
        if(activeTab){
          activeTab.classList.remove('tab-active');
        }
  
        console.log('show tab', refItem);
        refItem.parentElement.classList.toggle('tab-active');
      },
  
      insertData: function (_self) {
        dataAccordion.map(function (item, index) {
          document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
        });
      },

      tplAccordionItem: function (item) {
        return(`<div class='accordion-item'>
        <p class='accordion-title'>${item.title}</p>
        <p class='accordion-desc'>${item.desc}</p>
      </div>`)},
    }
  
    ACCORDION.init();
  })();