
var eshop1 = [
    {
      title: 'Lizards',
      image: "../img/monitor.jpg",
      price: '$7,500-15,000',
      description: 'Monitor'
    },
    {
      title: 'Lizards',
      image: "../img/cynthia-beilmann-YBJqVEYlLqw-unsplash.jpg",
      price: '$7,500-15,000',
      description: 'Bearded'
    },
    {
      title: 'Lizards',
      image: "../img/Lizard5.jpg",
      price: '$7,500-15,000',
      description: 'Gecko'
    },
    {
      title: 'Lizards',
      image: "../img/d-hilpert-CIr9uq2O168-unsplash.jpg",
      price: '$7,500-15,000',
      description: 'Chameleon'
    },
    {
      title: 'Lizards',
      image: "../img/sultan-alsultan-2RDOig8tu94-unsplash.jpg",
      price: '$7,500-15,000',
      description: 'Iguana'
    },
    {
      title: 'Lizards',
      image: "../img/mano-HhHIa8MkPS4-unsplash.jpg",
      price: '$7,500-15,000',
      description: 'monitor'
    }
    
  
    
    ]
    
    var postHTML = " "



   for (var i=0; i < eshop1.length; i++){
      var heading = '<div class="product ' + '"><span><h5>' + eshop1[i].title + '</h5>'

      var image = '<img src="' + eshop1[i].image + '"/'

      var price = '<p> $' + eshop1[i].price + '</p></span>'

      var description = '<div class=""><p>'+ eshop1[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'

      var concatThis = heading + image + price + description;
      postHTML = postHTML + concatThis
   }
  document.getElementById('market1').innerHTML = postHTML





//shop2
  
var eshop2 = [
  {
    title: 'Snake',
    image: "../img/snake1.jpg",
    price: '$7,500-15,000',
    description: 'Python'
  },
  {
    title: 'Snake',
    image: "../img/snake2.jpg",
    price: '$7,500-15,000',
    description: 'Boaconstrictor'
  },
  {
    title: 'Snake',
    image: "../img/snake3.jpg",
    price: '$7,500-15,000',
    description: 'Yellow Viper'
  },
  {
    title: 'Snake',
    image: "../img/snake 4.jpg",
    price: '$7,500-15,000',
    description: 'Albino Cobra'
  },
  {
    title: 'Sanke',
    image: "../img/snake 5.jpg",
    price: '$7,500-15,000',
    description: 'Cobra'
  },
  {
    title: 'Snake',
    image: "../img/snake 6.jpg",
    price: '$7,500-15,000',
    description: 'Rattler'
  }
  

  
  ]
  
  var postHTML = " "



 for (var i=0; i < eshop2.length; i++){
    var heading = '<div class="product ' + '"><span><h5>' + eshop2[i].title + '</h5>'

    var image = '<img src="' + eshop2[i].image + '"/'

    var price = '<p> $' + eshop2[i].price + '</p></span>'

    var description = '<div class=""><p>'+ eshop2[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'

    var concatThis = heading + image + price + description;
    postHTML = postHTML + concatThis
 }
  document.getElementById('market2').innerHTML = postHTML


  //shop3
  
var eshop3 = [
  {
    title: 'Alligator',
    image: "../img/baby croc.jpg",
    price: '$100,000-250,000',
    description: 'monitor'
  },
  {
    title: 'Crocodile',
    image: "../img/croc1.jpg",
    price: '$50,500-75,000',
    description: 'Nile'
  },
  {
    title: 'Crocodile',
    image: "../img/croc2.jpg",
    price: '$50,000-75,000',
    description: 'Salt'
  },
  {
    title: 'Alligator',
    image: "../img/gator1.jpg",
    price: '$35,000-50,000',
    description: 'American'
  },
  {
    title: 'Alligator',
    image: "../img/gator2.jpg",
    price: '$7,500-15,000',
    description: 'German'
  },
  {
    title: 'Gharial',
    image: "../img/gator3.jpg",
    price: '$80,000-250,000',
    description: 'Rare'
  }
  

  
  ]
  
  var postHTML = " "



 for (var i=0; i < eshop3.length; i++){
    var heading = '<div class="product ' + '"><span><h5>' + eshop3[i].title + '</h5>'

    var image = '<img src="' + eshop3[i].image + '"/'

    var price = '<p> $' + eshop3[i].price + '</p></span>'

    var description = '<div class=""><p>'+ eshop3[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'

    var concatThis = heading + image + price + description;
    postHTML = postHTML + concatThis
 }
  document.getElementById('market3').innerHTML = postHTML

  
