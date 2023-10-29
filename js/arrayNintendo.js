const arrayNintendo = [
{
    "nombre":"Super Mario Maker 2",
    "descripcion": "Videojuego de plataformas y de creación de niveles, desarrollado y publicado por Nintendo para Nintendo Switch. Es la secuela de Super Mario Maker",
    "precio": 129.90,
    "imagen_1":"nin1.jpeg",
    "imagen_2":"nin1_2.jpg"
},
{
    "nombre":"Super Smash Bros. Ultimate",
    "descripcion": "¡Un auténtico duelo de titanes de los videojuegos que podrás jugar cuando quieras y donde quieras! Lanza a tus rivales del escenario usando uno de los nuevos personajes como Simon Belmont o King K. Rool que se unen a Inkling, Ridley y a todos los combatientes presentes en la historia de Super Smash Bros. Disfruta de la velocidad mejorada y combate en los nuevos escenarios basados en las series de Castlevania, Super Mario Odyssey y otras.​",
    "precio": 210.00,
    "imagen_1":"nin2.jpg",
    "imagen_2":"nin2_2.jpg"
},
{
    "nombre":"Legend of Zelda Breath of the Wild",
    "descripcion": "Sin reino. Sin recuerdos. Después de un letargo que ha durado 100 años, Link se despierta solo en un mundo que ya no recuerda. Ahora, el héroe legendario debe explorar ese extenso y misterioso mundo y recuperar sus recuerdos antes de que Hyrule esté perdido para siempre. Armado únicamente con lo que encuentre a su paso, Link emprenderá una aventura para buscar respuestas y obtener los recursos que necesita para sobrevivir.",
    "precio": 375.90,
    "imagen_1":"nin3.jpg",
    "imagen_2":"nin3_2.jpg"
},
{
    "nombre":"Pokemon Diamante brillante",
    "descripcion": "Pokémon Diamante Brillante/ Perla Reluciente es el remake para Nintendo Switch de las entregas para Nintendo DS. En esta adaptación para la consola de Nintendo, se ha manteniendo la región de Sinnoh tal y como conocimos, y no se ha alterado ni la historia ni el tamaño de los pueblos y las rutas originales, que serán exactas a lo visto en los juegos originales de Pokémon.",
    "precio": 390.90,
    "imagen_1":"nin4.jpg",
    "imagen_2":"nin4_2.jpg"
},
{
    "nombre":"Pokemon Perla reluciente",
    "descripcion": "Pokémon Diamante Brillante/ Perla Reluciente es el remake para Nintendo Switch de las entregas para Nintendo DS. En esta adaptación para la consola de Nintendo, se ha manteniendo la región de Sinnoh tal y como conocimos, y no se ha alterado ni la historia ni el tamaño de los pueblos y las rutas originales, que serán exactas a lo visto en los juegos originales de Pokémon.",
    "precio": 229.90,
    "imagen_1":"nin5.jpg",
    "imagen_2":"nin5_2.jpg"
},
{
    "nombre":"Splatoon 2",
    "descripcion": "Los inklings están de vuelta para entintarlo todo y ganar territorio en este caótico juego de disparos de 4 contra 4. Por primera vez, tus batallas territoriales estarán disponibles en donde quiera que estés con la consola Nintendo Switch™. Además podrás utilizar cualquiera de sus modos de juego portátiles para intensificar el modo multijugador*. ¡Haz un equipo de 4 jugadores y participa en Salmon Run!",
    "precio": 360.00,
    "imagen_1":"nin6.jpg",
    "imagen_2":"nin6_2.jpg"
},
{
    "nombre":"kirby y la tierra olvidada",
    "descripcion": "Únete a Kirby en una inolvidable aventura de plataformas en 3D a través de un misterioso mundo. Desplázate flotando en una nueva aventura como Kirby, la poderosa bola rosada. Explora escenarios en 3D mientras descubres un misterioso mundo con estructuras abandonadas de una civilización pasada.",
    "precio": 150.90,
    "imagen_1":"nin7.jpg",
    "imagen_2":"nin7_2.jpg"
},
{
    "nombre":"Fire Emblem Three houses",
    "descripcion": "Tres territorios. Tres casas. Tu propia aventura. La guerra se acerca al continente de Fódlan. Aquí, el orden lo mantiene la Iglesia de Seiros, la cual alberga en sus instalaciones principales a la prestigiosa Academia de Oficiales.",
    "precio": 520.90,
    "imagen_1":"nin8.jpg",
    "imagen_2":"nin8_2.jpg"
},
{
    "nombre":"Super Mario Odyssey Super Mario Standard Edition",
    "descripcion": "Explora increíbles lugares lejos del reino Champiñón al unirte a Mario y su nuevo amigo Cappy en una increíble aventura al mejor estilo trotamundos en 3D. Usa asombrosas habilidades como: el poder de capturar y controlar objetos, animales y enemigos; para conseguir energilunas necesarias para recargar la nave Odyssey y salvar a la princesa Peach de los planes de boda de Bowser.",
    "precio": 210.00,
    "imagen_1":"nin9.jpg",
    "imagen_2":"nin9_2.jpg"
}
];

const gameCards = document.querySelector('.ningallery')
let gallery = '';

arrayNintendo.forEach(obj =>{
    const product = `
            <tr>
                <td><h2 class="vgtitle">${obj.nombre}</h2></td>
            </tr>
            <tr>
                <td>
                    <div class="owl-carousel">
                        <div class="item">
                            <img style="width: 90%;" src="../productos/${obj.imagen_1}" alt="juego_nin">
                        </div>
                        <div class="item">
                            <img style="width: 90%;" src="../productos/${obj.imagen_2}" alt="juego_nin">
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div style="text-align: center;">
                        <table>
                            <tr>
                                <td><p class="vgprice">Precio: S/. ${obj.precio}  </p></td>
                                <td><button class="btncarrito">Añadir al carrito</button></p></td>
                            </tr>
                        </table>                  
                    </div>
                </td>
            </tr>
            <tr>
                <td><p class="vgdescription">${obj.descripcion}</p></td>
            </tr><br>  
    `;
    gallery += product;
});

gameCards.innerHTML = gallery;