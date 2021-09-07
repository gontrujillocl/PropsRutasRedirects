<template>
  <div>
    <!-- CONTENIDO PARA LA VISTA PRINCIPAL O PADRE DEL POST -->
    <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="post-heading">
                    <h1><strong>Chevrolet presenta la totalmente nueva Blazer</strong></h1>
                    <h2 class="subheading"><strong>Llega como la primera SUV deportiva de la marca</strong></h2>
                </div>
            </div>
        </div>
    </div>
</header>
    <div>
      <!-- IMPLEMENTAR EL ROUTER VIEW QUE MUSTRE EL ARTICULO-->
    <router-link :to="{name: 'Articulo'}">Ver Articulo</router-link>
      <router-view />
    </div>
  </div>
</template>

