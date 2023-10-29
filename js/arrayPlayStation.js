const arrayPlayStation = [
    {
        "nombre":"Metal Gear Solid: Master Collection Vol. 1 (PS5)",
        "descripcion": "Regresa el título que dio origen al género de acción e infiltración. METAL GEAR SOLID: MASTER COLLECTION Vol. 1 reúne los comienzos de la experiencia METAL GEAR en un único paquete. Infíltrate en fortalezas enemigas por todo el mundo, completa misiones con sigilo y disfruta de la emocionante historia cinemática de la serie METAL GEAR.    ",
        "precio": 279.90,
        "imagen_1":"play_1.jpg",
        "imagen_2":"play_1_1.jpg",
        "imagen_3":"play_1_2.jpg"
    },
    {
        "nombre":"Marvel’s Spider-Man 2 (PS5)",
        "descripcion": "Marvel's Spider-Man 2 es el próximo juego de la franquicia Marvel's Spider-Man para PlayStation, aclamada por la crítica. En esta secuela, desarrollada por Insomniac Games para la consola PlayStation 5 en colaboración con PlayStation y Marvel Games, te pondrás debajo de los trajes de Peter Parker y Miles Morales para proteger a Nueva York de la delincuencia y en el que también te enfrentarás a super villanos como Venom, Kraven The Hunter o Lizard.​",
        "precio": 339.90,
        "imagen_1":"play_2.jpg",
        "imagen_2":"play_2_1.jpg",
        "imagen_3":"play_2_2.jpg"
    },
    {
        "nombre":"Call of Duty: Modern Warfare III (PS5) Preventa",
        "descripcion": "En la continuación directa del exitoso Call of Duty®: Modern Warfare® II, el capitán Price y la Fuerza operativa 141 enfrentan la amenaza definitiva. Vladimir Makarov, el criminal de guerra ultranacionalista extiende su dominio por todo el mundo lo cual motiva a la Fuerza operativa 141 a luchar como nunca antes. Modern Warfare 3 celebra el 20 aniversario de Call of Duty® con una de las colecciones de mapas Multijugador más grandes, que incluyen mapas nuevos y favoritos de los fans.",
        "precio": 319.90,
        "imagen_1":"play_3.jpg",
        "imagen_2":"play_3_1.jpg",
        "imagen_3":"play_3_2.jpg"
    },
    {
        "nombre":"Assassin's Creed Mirage (PS5)",
        "descripcion": "En Assassin's Creed Mirage puedes vivir la historia de Basim, un astuto ladrón callejero que busca respuestas y justicia mientras recorre las bulliciosas calles del Bagdad del siglo IX. La antigua y misteriosa organización de los Ocultos cambiará su destino de una forma que nunca habría imaginado y lo convertirá en un Maestro Asesino letal.",
        "precio": 229.90,
        "imagen_1":"play_4.jpg",
        "imagen_2":"play_4_1.jpg",
        "imagen_3":"play_4_2.jpg"
    },
    {
        "nombre":"EA Sports FC 24 (PS5)",
        "descripcion": "EA SPORTS FC 24 representa una nueva era para el Juego de Todos: más de 19,000 futbolistas con licencia total, más de 700 equipos y más de 30 ligas en la experiencia futbolística más auténtica jamás creada.",
        "precio": 369.90,
        "imagen_1":"play_5.jpg",
        "imagen_2":"play_5_1.jpg",
        "imagen_3":"play_5_2.jpg"
    },
    {
        "nombre":"Mortal Kombat 1 - Edición Premium (PS5)",
        "descripcion": "Descubre el nuevo universo de Mortal Kombat creado por el Dios del Fuego Liu Kang. ¡Mortal Kombat 1 marca el comienzo de una nueva era para la icónica franquicia, con un sistema de lucha, modos de juego y Fatalities nuevos!",
        "precio": 549.90,
        "imagen_1":"play_6.jpg",
        "imagen_2":"play_6_1.jpg",
        "imagen_3":"play_6_2.jpg"
    },
    {
        "nombre":"Avatar: Frontiers of Pandora (PS5) - Preventa",
        "descripcion": "Avatar: Frontiers of Pandora es un juego de acción y aventura en primera persona que se desarrolla en la inexplorada Frontera Occidental de Pandora. Eres na'vi, la corporación militar humana conocida como la RDA te secuestró y te ha entrenado y moldeado para cumplir con sus objetivos. Quince años más tarde, vuelves a ser libre, pero sientes que te encuentras entre extraños en tu propio mundo. Vuelve a conectar con tu herencia perdida, descubre qué significa realmente ser na'vi y únete a otros clanes para proteger Pandora de la RDA.",
        "precio": 329.90,
        "imagen_1":"play_7.jpg",
        "imagen_2":"play_7_1.jpg",
        "imagen_3":"play_7_2.jpg"
    },
    {
        "nombre":"Final Fantasy 16 (PS5)",
        "descripcion": "En Final Fantasy 16 ingresarás a un mundo épico de oscura fantasía donde los poderosos Eikon y los Dominantes a los que habitan deciden el futuro de la tierra. Esta nueva entrega de la popular serie de JRPG de Square Enix narrará la historia de Clive Rosfield, un guerrero al que concedieron el título de 'Primer Escudo de Rosaria' y que juró proteger a su hermano pequeño Joshua, el Dominante del Fénix.",
        "precio": 349.90,
        "imagen_1":"play_8.jpg",
        "imagen_2":"play_8_1.jpg",
        "imagen_3":"play_8_2.jpg"
    },
    {
        "nombre":"Street Fighter 6 (PS5)",
        "descripcion": "¡Llega el nuevo contendiente de Capcom! Street Fighter 6 representa la próxima evolución de la popular serie de juegos de peleas.",
        "precio": 279.90,
        "imagen_1":"play_9.jpg",
        "imagen_2":"play_9_1.jpg",
        "imagen_3":"play_9_2.jpg"
    }
    ];
    
    const gameCards = document.querySelector('.ningallery')
    let gallery = '';
    
    arrayPlayStation.forEach(obj =>{
        const product = `
                <tr>
                    <td><h2 class="vgtitle">${obj.nombre}</h2></td>
                </tr>
                <tr>
                    <td>
                        <div class="owl-carousel">
                            <div class="item">
                                <img style="width: 90%;" src="../productos/${obj.imagen_1}" alt="juego_play">
                            </div>
                            <div class="item">
                                <img style="width: 90%;" src="../productos/${obj.imagen_2}" alt="juego_play">
                            </div>
                            <div class="item">
                                <img style="width: 90%;" src="../productos/${obj.imagen_3}" alt="juego_play">
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