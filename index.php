<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web</title>
    <script src="js/popup.js"></script>
    <link rel="stylesheet" href="css/estilo.css">
    <link rel="stylesheet" href="css/estilo_prod.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
    <header>
    </header>
        <!-- Cabecera -->
        <?php
             include_once('componentes/cabecera.php');
        ?>

            <!-- Cuerpo de la pagina -->
            <!-- Seccion 1 -->
    <div class="container">
        <section class="section">
            <nav class="menu_lat">
                <ul>
                    <li><a href="paginas/PC.html" target="iframe_contenido">Juegos para PC</a></li>
                    <li><a href="paginas/Playstation.php" target="iframe_contenido">Juegos para PS</a></li>
                    <li><a href="paginas/Xbox.html" target="iframe_contenido">Juegos para Xbox</a></li>
                    <li><a href="paginas/nintendo.php" target="iframe_contenido">Juegos para Nintendo</a></li>
                    <li><a href="paginas/proxLanzamiento.html" target="iframe_contenido">Próximos lanzamientos</a></li>
                </ul>
            </nav>
            <nav class="sub_container">
                 <!-- Seccion de galerias -->
                  <iframe src="paginas/contenido.html" name="iframe_contenido">  </iframe>

            </nav>
        </section>
        
        <!-- Seccion Informativa -->
        <?php
             include_once('componentes/nosotros.php');
        ?>

        <!-- Seccion de Contactos -->

        <?php
             include_once('componentes/contactenos.php');
        ?>
    </div>
            <!-- Pie de la pagina -->
    <footer>
        <p>2023 FUTURE Videojuegos. Todos los derechos reservados ©</p>
    </footer>
    <script src="js/arrayNintendo.js"></script>
    <script src="js/arrayNintendo.js"></script>
</body>
</html>