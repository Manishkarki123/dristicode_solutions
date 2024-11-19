
import linus from '../../images/home_img/carousel_img/linus.png'
import carl from '../../images/home_img/carousel_img/carl.png'
import george from '../../images/home_img/carousel_img/george.png'
import grace from '../../images/home_img/carousel_img/grace.png'
import jonas from '../../images/home_img/carousel_img/jonas.png'
import richard from '../../images/home_img/carousel_img/richard.png'

const slidesData = [
    {
        id: 1,
        name: 'Linus Pauling',
        start_date: '1901',
        end_date:'1994',
        about:'He was a prolific author, educator, and advocate for vitamin C supplementation, although some of his later claims in this area were controversial.',
       img: linus
    }, {
        id: 2,
        name: 'Carl Sagan',
        start_date: '1934',
        end_date:'1996',
        about:'Sagan authored numerous books, including “Cosmos: A Personal Voyage,” which became a best-selling science book and a highly acclaimed TV series.',
        img: carl
    }, {
        id: 3,
        name: ' George Washington Carver',
        start_date: '1960s',
        end_date:'1943',
        about:'He is best known for his work in promoting alternative crops to cotton, such as peanuts and sweet potatoes, which helped improve soil quality and crop diversity in the American South.',
        img:george

    }, {
        id: 4,
        name: 'Richard Feynman',
        start_date: '1918',
        end_date:'1988',
        about:'He played a crucial role in the development of the theory of quantum electrodynamics (QED), which earned him a share of the Nobel Prize in Physics in 1965. ',
        img:richard

    }, {
        id: 5,
        name:'Grace Hopper',
        start_date: '1906',
        end_date:'1992',
        about:'Hopper was one of the first programmers of the Harvard Mark I computer, an early electromechanical computer developed during World War II.',
        img:grace

    }, {
        id: 6,
        name: 'Jonas Salk',
        start_date: '1914',
        end_date:'1995',
        about:'Jonas Salk was an American medical researcher and virologist who is best known for developing the first effective polio vaccine.',
        img:jonas
    },
];

export {slidesData};