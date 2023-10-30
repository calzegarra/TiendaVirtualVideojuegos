const arrayXbox = [
{
    "nombre":"Vampire Survivors",
    "descripcion": "Vampire Survivors es un título de supervivencia cronometrada con una dinámica de juego minimalista y elementos de roguelite.",
    "precio": 250.90,
    "imagen_1":"xbox_1a.jpeg",
    "imagen_2":"xbox_1b.jpeg"
},
{
    "nombre":"Persona 4 Golden",
    "descripcion": "El famoso Persona 4 Golden promete aventuras inolvidables, vínculos inquebrantables y experiencias compartidas con amigos.",
    "precio": 410.00,
    "imagen_1":"xbox_2a.jpeg",
    "imagen_2":"xbox_2b.jpeg"
},
{
    "nombre":"Starfield",
    "descripcion": "Starfield es el primer universo nuevo en más de 25 años de Bethesda Game Studios, los galardonados creadores de The Elder Scrolls V: Skyrim y Fallout 4.",
    "precio": 255.90,
    "imagen_1":"xbox_3a.jpeg",
    "imagen_2":"xbox_3b.jpeg"
},
{
    "nombre":"Somerville",
    "descripcion": "En los albores del fin del mundo, deberás hacer todo lo posible por reunir de nuevo a toda tu familia. Somerville es un juego de aventura de ciencia-ficción que pone el foco en las consecuencias personales de un conflicto a gran escala.",
    "precio": 420.00,
    "imagen_1":"xbox_4a.jpeg",
    "imagen_2":"xbox_4b.jpeg"
},
{
    "nombre":"EVERSPACE 2",
    "descripcion": "EVERSPACE™ 2 es un trepidante shooter espacial para un jugador con exploración profunda del espacio y los planetas, saqueo, minería, creación y elementos de RPG. Vive una intricada historia de ciencia ficción ambientada en un mundo abierto realista y lleno de secretos y peligros.",    
    "precio": 199.90,
    "imagen_1":"xbox_5a.jpeg",
    "imagen_2":"xbox_5b.jpeg"
},
{
    "nombre":"The Gunk",
    "descripcion": "En The Gunk tenemos a Rani, parte de nuestro dúo de transportistas espaciales, que lucha por ganarse el pan cuando se topa con un planeta virgen que rebosa vida. Rani y su compi han venido en busca de recursos valiosos y parece que les ha tocado el premio gordo.",
    "precio": 120.00,
    "imagen_1":"xbox_6a.jpeg",
    "imagen_2":"xbox_6b.jpeg"
},
{
    "nombre":"Ghostwire: Tokyo",
    "descripcion": "Un peligroso ocultista ha provocado la desaparición instantánea de la población de Tokio y esta se halla invadida por mortíferas fuerzas sobrenaturales. Únete a una poderosa entidad espectral en su búsqueda de venganza y domina un potente arsenal de destrezas que te ayudarán a desvelar la oscura verdad tras las desapariciones.",
    "precio": 250.90,
    "imagen_1":"xbox_7a.jpeg",
    "imagen_2":"xbox_7b.jpeg",
},
{
    "nombre":"Yakuza: Like a Dragon",
    "descripcion": "Ichiban Kasuga, un yakuza de una familia de bajo rango de Tokio, se enfrenta a una pena de cárcel de 18 años por asumir la culpa de un delito que no cometió. Sin perder la esperanza, cumple su condena. Cuando sale de la cárcel, descubre que nadie lo está esperando y que el hombre al que más respetaba ha destruido su clan.",
    "precio": 480.90,
    "imagen_1":"xbox_8a.jpeg",
    "imagen_2":"xbox_8b.jpeg"
},
{
    "nombre":"Lies of P",
    "descripcion": "Lies of P es un soulslike trepidante que toma la conocida historia de Pinocho, le da la vuelta y la ubica en una belle époque elegante y oscura.",
    "precio": 150.00,
    "imagen_1":"xbox_9a.jpeg",
    "imagen_2":"xbox_9b.jpeg"
}
];

const gameCards = document.querySelector('.ningallery')
let gallery = '';

arrayXbox.forEach(obj =>{
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