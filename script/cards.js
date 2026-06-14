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
  "url_image": "https://www.westerndigital.com/es-la/products/internal-drives/wd-red-pro-sata-hdd",
  "desc": "Elegir el almacenamiento adecuado es una de las decisiones más importantes que debe tomar en relación con sus dispositivos, sus flujos de trabajo y su presupuesto. Las unidades SSD ofrecen una capacidad de respuesta increíble para los sistemas operativos y los proyectos en curso, mientras que los discos HDD tienen una capacidad escalable que permite almacenar años de fotos, videos, copias de seguridad, cargas de trabajo y archivos sin salirse del presupuesto.",
  "cta": "Mostrar más",
  "link": "https://www.westerndigital.com/es-la/solutions/hdd-vs-ssd"
},
{
  "title": "periféricos",
  "url_image": "https://www.adntienda.com/lanzamientos",
  "desc": "En computación, un periférico es un dispositivo independiente, conectado externa o internamente a la tarjeta madre, que permite al sistema informático realizar una función extra. Como tal, no forma parte del proceso central de una computadora, sino que sirve a nivel de complemento para aumentar sus capacidades funcionales.",
  "cta": "Mostrar más",
  "link": "https://www.adntienda.com/shop/category/pc-gamer-perifericos-8385"
},
{
  "title": "Personaliza tus campeones favoritos con skins",
  "url_image": "https://miro.medium.com/v2/resize:fit:1400/1*myfZd0fORBarQOlZKXCHoQ.png",
  "desc": "Ser un campeón tiene sus beneficios, escoge y presume tus skins personalizados!",
  "cta": "Mostrar más",
  "link": "https://www.edsurge.com/news/2019-01-22-educators-share-how-video-games-can-help-kids-build-sel-skills"
},
{
  "title": "Posicionate en los Ranking de la temporada",
  "url_image": "https://bolavip.com/export/sites/bolavip/img/2019/01/23/image_2.png_1056961943.png",
  "desc": "Más y más reconocimientos, si tú o tu equipo se convierte en los mejores, todos lo sabrán!",
  "cta": "Mostrar más",
  "link": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwipq6zInbblAhUInFkKHSYwCMkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fwhen-a-passion-for-videogames-helps-land-that-job-11551888001&psig=AOvVaw2cvigcMN-U27d5xC22PpZw&ust=1572050615969380"
},
{
  "title": "Prueba la beta de TFT",
  "url_image": "https://newsbytes.ph/wp-content/uploads/2026/03/gameplay.jpg",
  "desc": "¡Pase beta de TFT V.3 próximamente!",
  "cta": "Mostrar más",
  "link": "https://las.leagueoflegends.com/es/news/game-updates/features/pase-beta-de-tft-v3-proximamente"
}
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