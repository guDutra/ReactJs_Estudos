export function getProducts() {
     return new Promise((resolve) => {
       // Define your data from different sources
       const products = [
         {
           name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
           image: '/static/images/produtos/produto-1.png',
           price: { amount: 179.9, isDiscount: null },
           id: 1,
         },
         {
           name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
           image: '/static/images/produtos/produto-2.png',
           price: { amount: 349.9, isDiscount: 315 },
           id: 2,
         },
         {
           name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
           image: '/static/images/produtos/produto-3.png',
           price: { amount: 159.90, isDiscount: null },
           id: 3,
         },
       ];
   
       const principais = [
         {
           name: 'Imagem Principal Grande Mulher Sentada',
           image: '/static/images/principais/banner-principal-1.png',
           id: 1,
         },
         {
           name: 'Imagem Principal Grande Mulher Escorada',
           image: '/static/images/principais/banner-principal-2.png',
           id: 2,
         },
         {
           name: 'Imagem Principal Grande Calçado',
           image: '/static/images/principais/banner-principal-3.png',
           id: 3,
         },
         {
           name: 'Imagem Principal Grande Mulher Com Mão No Calçado',
           image: '/static/images/principais/banner-grande.png',
           id: 4,
         },
         {
           name: 'Imagem Principal Pequena Frase',
           image: '/static/images/principais/banner-pequeno.png',
           id: 5,
         },
       ];
   
       const categorias = [
         {
           name: 'Botas',
           image: '/static/images/categorias/banner-botas.png',
           id: 1,
         },
         {
           name: 'Sandalias',
           image: '/static/images/categorias/banner-sandalias.png',
           id: 2,
         },
         {
           name: 'Sapatilhas',
           image: '/static/images/categorias/banner-sapatilhas.png',
           id: 3,
         },
         {
           name: 'Scarpins',
           image: '/static/images/categorias/banner-scarpins.png',
           id: 4,
         },
       ];
   
       const blog = [
         {
           name: 'Calçados',
           image: '/static/images/ConhecaMais/Frame 83 1.png',
           id: 1,
         },
         {
           name: 'Mulher e Frase',
           image: '/static/images/ConhecaMais/Frame 83.png',
           id: 2,
         },
         {
           name: 'Calçado e Frase',
           image: '/static/images/ConhecaMais/Frame 5.png',
           id: 3,
         },
       ];
   
       resolve({
         Products: products,
         Principais: principais,
         Categorias: categorias,
         Blog: blog,
       });
     });
   }
   