console.log('Cards cargado correctamente');

const dataCards = [{
  "title": "tarjetas grafica nvidia",
  "url_image": "https://www.nvidia.com/content/nvidiaGDC/es/es_ES/geforce/graphics-cards/_jcr_content/root/responsivegrid/nv_container_1965276325/nv_teaser.coreimg.100.630.jpeg/1735897389094/geforce-rtx-50series-nv-sfg-thumbnail-1920x1080.jpeg",
  "desc": "La plataforma definitiva para jugadores y creadores.",
  "cta": "Mostrar más",
  "link": "https://www.nvidia.com/es-es/geforce/graphics-cards/"
},
{
  "title": "Almacenamiento en unidades HDD y SSD",
  "url_image": "https://www.westerndigital.com/content/dam/store/en-us/assets/solutions/hdd-vs-ssd/wd-hdd-vs-ssd-blue.png.wdthumb.1280.1280.webp",
  "desc": "Elegir el almacenamiento adecuado es una de las decisiones más importantes que debe tomar en relación con sus dispositivos, sus flujos de trabajo y su presupuesto. Las unidades SSD ofrecen una capacidad de respuesta increíble para los sistemas operativos y los proyectos en curso, mientras que los discos HDD tienen una capacidad escalable que permite almacenar años de fotos, videos, copias de seguridad, cargas de trabajo y archivos sin salirse del presupuesto.",
  "cta": "Mostrar más",
  "link": "https://www.westerndigital.com/es-la/solutions/hdd-vs-ssd"
},
{
  "title": "periféricos",
  "url_image": "https://www.lifeder.com/wp-content/uploads/2022/01/perifericos-de-almacenamiento-696x463.jpg",
  "desc": "En computación, un periférico es un dispositivo independiente, conectado externa o internamente a la tarjeta madre, que permite al sistema informático realizar una función extra. Como tal, no forma parte del proceso central de una computadora, sino que sirve a nivel de complemento para aumentar sus capacidades funcionales.",
  "cta": "Mostrar más",
  "link": "https://www.lifeder.com/perifericos-almacenamiento/"
},
{
  "title": "Componentes de computadora",
  "url_image": "https://img.pccomponentes.com/pcblog/6505/componentes-ordenador.jpg",
  "desc": "Los componentes de una PC son las piezas físicas de hardware que funcionan en conjunto para procesar y mostrar información.",
  "cta": "Mostrar más",
  "link": "https://www.edsurge.com/news/2019-01-22-educators-share-how-video-games-can-help-kids-build-sel-skills"
},
{
  "title": "Monitores",
  "url_image": "https://xiaomistore.co.cr/wp-content/uploads/Xiaomi20Mi20Monitor20A22i2022-300x300.webp",
  "desc": "En informática, un monitor, es el principal dispositivo de salida (interfaz), que muestra datos o información a todos los usuarios. También puede considerarse un periférico de entrada/salida si el monitor contiene pantalla táctil o multitáctil.",
  "cta": "Mostrar más",
  "link": "https://es.wikipedia.org/wiki/Monitor_de_computadora"
},
{
  "title": "Laptops",
  "url_image": "https://cyberteamcr.com/wp-content/uploads/2026/05/grid2.2-1-300x300.webp",
  "desc": "Una laptop (o computadora portátil) es un equipo informático personal diseñado para ser transportado y utilizado en movimiento. Integra todos los componentes esenciales en una sola estructura compacta—pantalla, teclado, panel táctil, batería y unidad de procesamiento—, brindando portabilidad sin sacrificar la funcionalidad de un equipo de escritorio.",
  "cta": "Mostrar más",
  "link": "https://cyberteamcr.com/product-category/laptops/"
},
];

(function () {
  let CARD = {
    init: function () {
      //console.log('card module was loaded');
      let _self = this;

      //llamanos las funciones
      this.insertData(_self);
      //this.eventHandler(_self);
    },

    eventHandler: function (_self) {
      let arrayRefs = document.querySelectorAll('.accordion-title');

      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener('click', function (event) {
          console.log('event', event);
          _self.showTab(event.target);
        });
      }
    },

    insertData: function (_self) {
      dataCards.map(function (item, index) {
        document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
      });
    },

    tplCardItem: function (item, index) {
      return (`<div class='card-item' id="card-number-${index}">
            <img src="${item.url_image}"/>
            <div class="card-info">
              <p class='card-title'>${item.title}</p>
              <p class='card-desc'>${item.desc}</p>
              <div class="boton-cta">
              <a class='card-cta' target="blank" href="${item.link}">${item.cta}</a>
              </div>
            </div>
          </div>`)
    },
  }

  CARD.init();
})();