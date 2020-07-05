export default {
    name: 'catalogue',
    products: [{
            id: 1,
            name: 'Rangement de bureau',
            type: 'Rangement',
            price: '5.00',
            sold: true,
            price_sold: '4.00',
            color: [],
            src: [require('@/assets/images/products/1.jpg')]
        },
        {
            id: 2,
            name: 'La maison de Blanche neige et les septs nains',
            type: 'Déco',
            price: '6.50',
            sold: false,
            price_sold: '',
            color: [],
            src: [require('@/assets/images/products/2.jpg')]
        },
        {
            id: 3,
            name: 'Dans l\'intérieur d\'un livre',
            type: 'Déco',
            price: '5.50',
            sold: false,
            price_sold: '',
            color: [],
            src: [require('@/assets/images/products/3.jpg')]
        },
        {
            id: 4,
            name: 'Petite décoration florale',
            type: 'Déco',
            price: '10.00',
            sold: false,
            price_sold: '',
            color: [],
            src: [require('@/assets/images/products/4.jpg')]
        },
        {
            id: 5,
            name: 'Poupée',
            type: 'Déco',
            price: '5.50',
            sold: false,
            price_sold: '',
            color: [{
                    value: "grey lighten-2",
                    label: "Blanc"
                },
                {
                    value: "blue",
                    label: "Bleu"
                },
                {
                    value: "red",
                    label: "Rouge"
                },
                {
                    value: "green",
                    label: "Vert"
                }
            ],
            src: [
                require('@/assets/images/products/5.jpg'),
                require('@/assets/images/products/5_1.jpg'),
                require('@/assets/images/products/5_2.jpg'),
                require('@/assets/images/products/5_3.jpg'),
                require('@/assets/images/products/5_4.jpg'),
            ]
        },
        {
            id: 6,
            name: 'La maison des Elphes',
            type: 'Déco',
            price: '6.00',
            sold: false,
            price_sold: '',
            color: [],
            src: [require('@/assets/images/products/6.jpg')]
        },
        {
            id: 8,
            name: 'Tableau la cage aux oiseaux',
            type: 'Déco',
            price: '6.00',
            sold: false,
            price_sold: '',
            color: [],
            src: [require('@/assets/images/products/8.jpg')]
        }, {
            id: 9,
            name: 'Le carrousel des lutins',
            type: 'Déco',
            price: '7.00',
            sold: false,
            price_sold: '',
            color: [],
            src: [require('@/assets/images/products/9.jpg')]
        },
        {
            id: 10,
            name: 'Attrapes rêves',
            type: 'Déco',
            price: '5.00',
            sold: false,
            price_sold: '',
            color: [],
            src: [
                require('@/assets/images/products/10.jpg'),
                require('@/assets/images/products/10_1.jpg')
            ]
        },
        {
            id: 11,
            name: 'Carte décoré',
            type: 'Déco',
            price: '5.00',
            sold: false,
            price_sold: '',
            color: [],
            src: [
                require('@/assets/images/products/11.jpg'),
                require('@/assets/images/products/11_1.jpg')
            ]
        },
    ]
}