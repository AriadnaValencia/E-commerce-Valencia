const productos = [
    {
        id:'1',
        name:'Patty y Selma',
        stock:10,
        price:62000, /*el precio va en nros, no en string*/
        description:'Combo pensado para que coman bien 6 personas. Todo casero y de la mejor calidad',
        imagen:'../images/combos/combo1.png',
        category: 'combos',
    },

    {
        id:'2',
        name:'Ned Flanders',
        stock:12,
        price:76000, /*el precio va en nros, no en string*/
        description:'Combo pensado para que coman bien 12 personas. Todo casero y de la mejor calidad',
        imagen:'../images/combos/combo2.png',
        category: 'combos',
    },

    {
        id:'3',
        name:'Jasper Beardley',
        stock:14,
        price:90000, /*el precio va en nros, no en string*/
        description:'Combo pensado para que coman bien 18 personas. Todo casero y de la mejor calidad',
        imagen:'../images/combos/combo3.png',
        category: 'combos',
    },

    {
        id:'4',
        name:'Bart Simpson',
        stock:20,
        price:96000, /*el precio va en nros, no en string*/
        description:'Combo pensado para que coman bien 25 personas. Todo casero y de la mejor calidad',
        imagen:'../images/combos/combo4.png',
        category: 'combos',
    },

    {
        id:'5',
        name:'Marge Simpson',
        stock:20,
        price:120000, /*el precio va en nros, no en string*/
        description:'Combo pensado para que coman bien 35 personas. Todo casero y de la mejor calidad',
        imagen:'../images/combos/combo5.png',
        category: 'combos',
    },

    {
        id:'6',
        name:'Homero Simpson',
        stock:24,
        price:160000, /*el precio va en nros, no en string*/
        description:'Combo pensado para que coman bien 50 personas. Todo casero y de la mejor calidad',
        imagen:'../images/combos/combo6.png',
        category: 'combos',
    },
/*SALSAS*/
    {
        id:'salsa1',
        name:'Provenzal',
        stock:10,
        imagen:'https://i.postimg.cc/nLpw6xNw/provenzal.png',
        category: 'salsas',
    },

    {
        id:'salsa2',
        name:'Chimichurri',
        stock:10,
        imagen:'https://i.postimg.cc/4d32x5f6/chimi.png',
        category: 'salsas',
    },

    {
        id:'salsa3',
        name:'Criolla',
        stock:10,
        imagen:'https://i.postimg.cc/FRnWdLz2/criolla.png',
        category: 'salsas',
    },

    {
        id:'salsa4',
        name:'Mostaza',
        stock:10,
        imagen:'https://i.postimg.cc/jSSm3tNq/mostaza.png',
        category: 'salsas',
    },

    {
        id:'salsa5',
        name:'Roquefort',
        stock:10,
        imagen:'https://i.postimg.cc/qqP1QH8w/roque.png',
        category: 'salsas',
    },

    {
        id:'salsa6',
        name:'Cheddar',
        stock:10,
        imagen:'https://i.postimg.cc/YC1sn0DW/cheddar.png',
        category: 'salsas',
    },

    {
        id:'salsa7',
        name:'Big pata',
        stock:10,
        imagen:'https://i.postimg.cc/J0DTbzBt/bigPata.png',
        category: 'salsas',
    },

    {
        id:'salsa8',
        name:'Mayonesa picante',
        stock:10,
        imagen:'https://i.postimg.cc/W48fVKvp/picante.png',
        category: 'salsas',
    },

    {
        id:'salsa9',
        name:'Puerro',
        stock:10,
        imagen:'https://i.postimg.cc/c4tj3XQT/puerro.png',
        category: 'salsas',
    },

    {
        id:'salsa10',
        name:'Aceitunas',
        stock:10,
        imagen:'https://i.postimg.cc/cC2bjnNQ/aceitunas.png',
        category: 'salsas',
    },
/*PRODUCTOS*/
    {
        id:'producto1',
        name:'Pata',
        stock:50,
        imagen:'https://i.postimg.cc/7Z7HNP38/pata.jpg',
        category: 'productos',
    },

    {
        id:'producto2',
        name:'Pancitos saborizados',
        stock:600,
        imagen:'https://i.postimg.cc/W4v2YR8D/pancitos.jpg',
        category: 'productos',
    },

    {
        id:'producto3',
        name:'Frankfurt',
        stock:200,
        imagen:'https://i.postimg.cc/ryPqXRg2/frankfurt.jpg',
        category: 'productos',
    },

    {
        id:'producto4',
        name:'Empanadas',
        stock:250,
        imagen:'https://i.postimg.cc/zvV5HqzQ/empanadas.jpg',
        category: 'productos',
    },

    {
        id:'producto5',
        name:'Pizzetas',
        stock:400,
        imagen:'https://i.postimg.cc/zXH8JDPb/pizzetas1.jpg',
        category: 'productos',
    }
]

export const getProducts=() => {
    let error =  false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Ups! Hubo un problema, vuelva prontos')
            }
            else{
                resolve(productos)
            }
        },2000)
    })
}