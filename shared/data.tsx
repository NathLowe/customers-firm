// Types
type ProductDataType = {
    slug:string,
    parfum?:boolean,
    dataContenant:object[],
    dataContenance:object[],
    title:string,
    description:string
}

type ImageWithParfum = {
    image:string,
    contenant:string,
    contenance:string,
    parfum:string
}

type ImageWithoutParfum = {
    image:string,
    contenant:string,
    contenance:string,
}

interface ProductImagesType {
    glycerine:ImageWithParfum[],
    lotion:ImageWithParfum[],
    alcool:ImageWithoutParfum[],
    'huile-eclaircissante':ImageWithoutParfum[],
    'gel-hydroalcoolique':ImageWithoutParfum[],
}

// MaterialUI theme datas
var primaryColor = "#ffbf00"
var secondaryColor = "#b7e38a"

// Slug with url
var slugUrls = [
    {slug:'produits',href:'/produits',name:'Nos Produits'},
    {slug:'glycerine',href:'/produits/glycerine',name:'Glycérine'},
    {slug:'alcool',href:'/produits/alcool',name:'Alcool'},
    {slug:'gel-hydroalcoolique',href:'/produits/gel-hydroalcoolique',name:'Gel Hydroalcoolique'},
    {slug:'lotion',href:'/produits/lotion',name:'Lotion'},
    {slug:'huile-eclaircissante',href:'/produits/huile-eclaircissante',name:'Huile Eclaircissante'},
    {slug:'contact',href:'/contact',name:'Nous Contacter'},
    {slug:'a-propos',href:'/a-propos',name:'A Propos'},
]

var datasParfum = [
    {image:'/images/carotte.jpg',name:'carotte'},
    {image:'/images/citron.jpg',name:'citron'},
    {image:'/images/aloe-vera.jpg',name:'aloe vera'},
    {image:'/images/pure.jpg',name:'pure'},
]

var allProductsDatas: {params:ProductDataType}[] = [
    {params:{
        slug:'alcool',
        parfum:false,
        dataContenant:[
            {image:'/images/bouteille-plastique.jpg',name:'bouteille plastique'},
            {image:'/images/bouteille-verre.jpg',name:'bouteille verre'},
        ],
        dataContenance:[
            {name:'30ml',text:'30ml',contenant:[0,1]},
            {name:'60ml',text:'60ml',contenant:[0,1]},
            {name:'125ml',text:'125ml',contenant:[0]},
            {name:'250ml',text:'250ml',contenant:[0]},
            {name:'500ml',text:'500ml',contenant:[0]},
            {name:'1000ml',text:'1000ml',contenant:[0]},
        ],
        title:'Alcool',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint consequuntur illo reiciendis voluptatibus veniam architecto dicta neque perferendis, est distinctio atque pariatur nobis suscipit voluptate aspernatur impedit et quisquam.'
    }},

    {params:{
        slug:'gel-hydroalcoolique',
        parfum:false,
        dataContenant:[
            {image:'/images/bouteille-avec-bec.jpg',name:'bouteille a bec'},
            {image:'/images/tube-plastique.jpg',name:'tube plastique'},
        ],
        dataContenance:[
            {name:'30ml',text:'30ml',contenant:[1]},
            {name:'125ml',text:'125ml',contenant:[1]},
            {name:'300ml',text:'300ml',contenant:[0]},
            {name:'500ml',text:'500ml',contenant:[0]}
        ],
        title:'Gel Hydroalcoolique',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint consequuntur illo reiciendis voluptatibus veniam architecto dicta neque perferendis, est distinctio atque pariatur nobis suscipit voluptate aspernatur impedit et quisquam.'
    }},

    {params:{
        slug:'glycerine',
        parfum:true,
        dataContenant:[
            {image:'/images/bouteille-plastique.jpg',name:'bouteille plastique'},
            {image:'/images/bouteille-verre.jpg',name:'bouteille verre'},
            {image:'/images/tube-plastique.jpg',name:'tube plastique'},
        ],
        dataContenance:[
            {name:'30ml',text:'30ml',contenant:[0,1,2]},
            {name:'60ml',text:'60ml',contenant:[0,1,2]},
            {name:'125ml',text:'125ml',contenant:[0,2]},
            {name:'250ml',text:'250ml',contenant:[0]},
            {name:'500ml',text:'500ml',contenant:[0]},
            {name:'1000ml',text:'1000ml',contenant:[0]},
        ],
        title:'Glycerine',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint consequuntur illo reiciendis voluptatibus veniam architecto dicta neque perferendis, est distinctio atque pariatur nobis suscipit voluptate aspernatur impedit et quisquam.'
    }},

    {params:{
        slug:'lotion',
        parfum:true,
        dataContenant:[
            {image:'/images/bouteille-plastique.jpg',name:'bouteille plastique'},
            {image:'/images/bouteille-verre.jpg',name:'bouteille verre'},
        ],
        dataContenance:[
            {name:'30ml',text:'30ml',contenant:[0,1]},
            {name:'60ml',text:'60ml',contenant:[0,1]},
            {name:'125ml',text:'125ml',contenant:[0]},
            {name:'250ml',text:'250ml',contenant:[0]},
            {name:'500ml',text:'500ml',contenant:[0]},
            {name:'1000ml',text:'1000ml',contenant:[0]},
        ],
        title:'Lotion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint consequuntur illo reiciendis voluptatibus veniam architecto dicta neque perferendis, est distinctio atque pariatur nobis suscipit voluptate aspernatur impedit et quisquam.'
    }},

    {params:{
        slug:'huile-eclaircissante',
        parfum:true,
        dataContenant:[
            {image:'/images/flacon-verre.jpg',name:'flacon en verre'},
        ],
        dataContenance:[
            {name:'30ml',text:'30ml',contenant:[0]},
            {name:'60ml',text:'60ml',contenant:[0]},
        ],
        title:'Huile Eclaircissante',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint consequuntur illo reiciendis voluptatibus veniam architecto dicta neque perferendis, est distinctio atque pariatur nobis suscipit voluptate aspernatur impedit et quisquam.'
    }},

]

var allProductsImages:ProductImagesType = {
    glycerine:[
        {image:'/images/1.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'30ml' },
        {image:'/images/2.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'60ml' },
        {image:'/images/3.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'125ml' },
        {image:'/images/4.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'250ml' },
        {image:'/images/1.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'500ml' },
        {image:'/images/2.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'1000ml' },
        {image:'/images/1.jpg',parfum:'carotte',contenant:'bouteille verre',contenance:'30ml' },
        {image:'/images/2.jpg',parfum:'carotte',contenant:'bouteille verre',contenance:'60ml' },
        {image:'/images/3.jpg',parfum:'carotte',contenant:'tube plastique',contenance:'30ml' },
        {image:'/images/4.jpg',parfum:'carotte',contenant:'tube plastique',contenance:'125ml' },
        
        {image:'/images/2.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'30ml' },
        {image:'/images/3.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'60ml' },
        {image:'/images/4.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'125ml' },
        {image:'/images/1.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'250ml' },
        {image:'/images/2.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'500ml' },
        {image:'/images/3.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'1000ml' },
        {image:'/images/2.jpg',parfum:'citron',contenant:'bouteille verre',contenance:'30ml' },
        {image:'/images/2.jpg',parfum:'citron',contenant:'bouteille verre',contenance:'60ml' },
        {image:'/images/4.jpg',parfum:'citron',contenant:'tube plastique',contenance:'30ml' },
        {image:'/images/1.jpg',parfum:'citron',contenant:'tube plastique',contenance:'125ml' },
        
        {image:'/images/2.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'30ml' },
        {image:'/images/3.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'60ml' },
        {image:'/images/4.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'125ml' },
        {image:'/images/4.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'250ml' },
        {image:'/images/1.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'500ml' },
        {image:'/images/3.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'1000ml' },
        {image:'/images/1.jpg',parfum:'pure',contenant:'bouteille verre',contenance:'30ml' },
        {image:'/images/2.jpg',parfum:'pure',contenant:'bouteille verre',contenance:'60ml' },
        {image:'/images/4.jpg',parfum:'pure',contenant:'tube plastique',contenance:'30ml' },
        {image:'/images/3.jpg',parfum:'pure',contenant:'tube plastique',contenance:'125ml' },
        
        {image:'/images/3.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'30ml' },
        {image:'/images/2.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'60ml' },
        {image:'/images/4.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'125ml' },
        {image:'/images/4.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'250ml' },
        {image:'/images/1.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'500ml' },
        {image:'/images/1.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'1000ml' },
        {image:'/images/2.jpg',parfum:'aloe-vera',contenant:'bouteille verre',contenance:'30ml' },
        {image:'/images/4.jpg',parfum:'aloe-vera',contenant:'bouteille verre',contenance:'60ml' },
        {image:'/images/3.jpg',parfum:'aloe-vera',contenant:'tube plastique',contenance:'30ml' },
        {image:'/images/4.jpg',parfum:'aloe-vera',contenant:'tube plastique',contenance:'125ml' },
    ],
    lotion:[
        {image:'/images/1.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'30ml' },
        {image:'/images/2.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'60ml' },
        {image:'/images/3.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'125ml' },
        {image:'/images/4.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'250ml' },
        {image:'/images/1.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'500ml' },
        {image:'/images/2.jpg',parfum:'carotte',contenant:'bouteille plastique',contenance:'1000ml' },
        {image:'/images/1.jpg',parfum:'carotte',contenant:'bouteille verre',contenance:'30ml' },
        {image:'/images/2.jpg',parfum:'carotte',contenant:'bouteille verre',contenance:'60ml' },
        {image:'/images/3.jpg',parfum:'carotte',contenant:'tube plastique',contenance:'30ml' },
        {image:'/images/4.jpg',parfum:'carotte',contenant:'tube plastique',contenance:'125ml' },
        
        {image:'/images/2.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'30ml' },
        {image:'/images/3.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'60ml' },
        {image:'/images/4.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'125ml' },
        {image:'/images/1.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'250ml' },
        {image:'/images/2.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'500ml' },
        {image:'/images/3.jpg',parfum:'citron',contenant:'bouteille plastique',contenance:'1000ml' },
        {image:'/images/2.jpg',parfum:'citron',contenant:'bouteille verre',contenance:'30ml' },
        {image:'/images/2.jpg',parfum:'citron',contenant:'bouteille verre',contenance:'60ml' },
        {image:'/images/4.jpg',parfum:'citron',contenant:'tube plastique',contenance:'30ml' },
        {image:'/images/1.jpg',parfum:'citron',contenant:'tube plastique',contenance:'125ml' },
        
        {image:'/images/2.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'30ml' },
        {image:'/images/3.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'60ml' },
        {image:'/images/4.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'125ml' },
        {image:'/images/4.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'250ml' },
        {image:'/images/1.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'500ml' },
        {image:'/images/3.jpg',parfum:'pure',contenant:'bouteille plastique',contenance:'1000ml' },
        {image:'/images/1.jpg',parfum:'pure',contenant:'bouteille verre',contenance:'30ml' },
        {image:'/images/2.jpg',parfum:'pure',contenant:'bouteille verre',contenance:'60ml' },
        {image:'/images/4.jpg',parfum:'pure',contenant:'tube plastique',contenance:'30ml' },
        {image:'/images/3.jpg',parfum:'pure',contenant:'tube plastique',contenance:'125ml' },
        
        {image:'/images/3.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'30ml' },
        {image:'/images/2.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'60ml' },
        {image:'/images/4.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'125ml' },
        {image:'/images/4.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'250ml' },
        {image:'/images/1.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'500ml' },
        {image:'/images/1.jpg',parfum:'aloe-vera',contenant:'bouteille plastique',contenance:'1000ml' },
        {image:'/images/2.jpg',parfum:'aloe-vera',contenant:'bouteille verre',contenance:'30ml' },
        {image:'/images/4.jpg',parfum:'aloe-vera',contenant:'bouteille verre',contenance:'60ml' },
        {image:'/images/3.jpg',parfum:'aloe-vera',contenant:'tube plastique',contenance:'30ml' },
        {image:'/images/4.jpg',parfum:'aloe-vera',contenant:'tube plastique',contenance:'125ml' },
    ],
    alcool:[        
        {image:'/images/3.jpg',contenant:'bouteille plastique',contenance:'30ml' },
        {image:'/images/2.jpg',contenant:'bouteille plastique',contenance:'60ml' },
        {image:'/images/4.jpg',contenant:'bouteille plastique',contenance:'125ml' },
        {image:'/images/1.jpg',contenant:'bouteille plastique',contenance:'250ml' },
        {image:'/images/4.jpg',contenant:'bouteille plastique',contenance:'500ml' },
        {image:'/images/1.jpg',contenant:'bouteille plastique',contenance:'1000ml' },
        {image:'/images/2.jpg',contenant:'bouteille verre',contenance:'30ml' },
        {image:'/images/4.jpg',contenant:'bouteille verre',contenance:'60ml' },
    ],
    'gel-hydroalcoolique':[
        {image:'/images/1.jpg',contenant:'bouteille a bec',contenance:'300ml' },
        {image:'/images/2.jpg',contenant:'bouteille a bec',contenance:'500ml' },
        {image:'/images/3.jpg',contenant:'tube plastique',contenance:'30' },
        {image:'/images/4.jpg',contenant:'tube plastique',contenance:'125ml' },
    ],
    'huile-eclaircissante':[
        {image:'/images/huile-eclaircissante.jpg',contenant:'flacon en verre',contenance:'30ml' },
        {image:'/images/huile-eclaircissante.jpg',contenant:'flacon en verre',contenance:'60ml' },
    ],
}

export {primaryColor,secondaryColor,slugUrls,allProductsDatas,allProductsImages, datasParfum}