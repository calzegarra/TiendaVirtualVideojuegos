

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Xbox</title>
  <link rel="stylesheet" href="css/estilo.css">
  <link rel="stylesheet" href="../css/estilo_prod.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
  <style>
      .item img {
      width: 300px; 
      height: 350px; 
    }
  </style>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
  <script src="script.js"></script> 
</head>
<body>
   <table>
       <p class="ningallery">
   </table>

  <script>
    $(document).ready(function() {
     $('.owl-carousel').owlCarousel({
       items: 1, 
       loop: true, 
       autoplay: true, 
       autoplayTimeout: 1000, 
       dots: true, 
     });
    });
  </script>
  <script src="../js/arrayXbox.js"></script>
</body>
</html>