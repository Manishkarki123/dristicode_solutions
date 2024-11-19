import android from '../../images/blog_img/android.png'
import iphone from '../../images/blog_img/iphone.png'
import photoshop from '../../images/blog_img/photoshop.png'
import russian from '../../images/blog_img/russian.png'
import street from '../../images/blog_img/street.png'
import person from '../../images/blog_img/person.png'
import content from '../../images/detail_img/content.png'
// Social Media
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

//Comments 
import herman from '../../images/detail_img/herman.png'
import lucile from '../../images/detail_img/lucile.png'

const blog_Cards = [{
    img: person, id: 1, date: new Date(), link: 'link-1',
    topic: `iOS 10: 8 things we want from Apple's new iPhone software`, content: 'Most smartphone cases are used to simply protect devices from knocks and drops – the most you can usually hope for is an extra battery ...'
},

{
    img: android, id: 2, date: new Date(), link: 'link-2',
    topic: 'Android will use beacons to tell phone users about local apps', content: 'Nullam molestie sem id ullamcorper congue sem nulla blandit neque sed viverra lorem metus quis justo vestibulum consequat odio ...'

},

{
    img: iphone, id: 3, date: new Date(), link: 'link-3',
    topic: 'The period-tracking app helping women and scientists', content: 'Nullam molestie sem id ullamcorper congue sem nulla blandit neque sed viverra lorem metus quis justo vestibulum consequat odio ...'

},

{
    img: photoshop, id: 4, date: new Date(), link: 'link-4',
    topic: 'Google Street View banned in India due to security', content: 'Proin consectetur cur sapien sit amet ullamcorper lectus vestibulum et odio vehicula odio dapibus ultrices id sed nibh ommodo odio ...'

},

{
    img: russian, id: 5, date: new Date(), link: 'link-5',
    topic: 'Russian hackers sell 33 million Twitter passwords online', content: 'Integer dolor enim eleifend utsa egestas ametinter dum non libero phasellus molestie pharetra nunc cras bibendum luctus nisi ...'
},

{
    img: street, id: 6, date: new Date(), link: 'link-6',
    topic: 'Russian hackers sell 33 million Twitter passwords online', content: 'Integer dolor enim eleifend utsa egestas ametinter dum non libero phasellus molestie pharetra nunc cras bibendum luctus nisi ...'
},


{

    img: photoshop, id: 7, date: new Date(), link: 'link-7',
    topic: 'Google Street View banned in India due to security', content: 'Proin consectetur cur sapien sit amet ullamcorper lectus vestibulum et odio vehicula odio dapibus ultrices id sed nibh ommodo odio ...'

},

{
    img: russian, id: 8, date: new Date(), link: 'link-8',
    topic: 'Russian hackers sell 33 million Twitter passwords online', content: 'Integer dolor enim eleifend utsa egestas ametinter dum non libero phasellus molestie pharetra nunc cras bibendum luctus nisi ...'
},

{
    img: street, id: 9, date: new Date(), link: 'link-9',
    topic: 'Russian hackers sell 33 million Twitter passwords online', content: 'Integer dolor enim eleifend utsa egestas ametinter dum non libero phasellus molestie pharetra nunc cras bibendum luctus nisi ...'
}

];
// Blog detail json file
const detail_Data = [{
    id: '1', img: content, date: new Date(),
    topic: 'GOOGLE IS TESTING A MAJOR CHANGE TO SEARCH RESULTS',
    description1: 'Donec placerat est enim, molestie finibus sem eleifend. In commodo, velit sed consequat vehicula, ipsum tellus vehicula neque, eget porttitor quam odio vitae tellus. Nullam sem lacus, aliquet sed fermentum vel, placerat sit amet erat volutpat. Quisque rhoncus lectus et nisl mattis aliquet. Aenean eleifend dolor sit amet imperdiet semper phasellus finibus auctor dui eget bibendum. Suspendisse ac tortor consequat, dictum urna ac.',
    description2: 'Integer dolor enim, eleifend ut egestas sit amet, interdum non libero. Phasellus molestie pharetra nunc. Cras bibendum luctus nisi, quis eleifend orci finibus ac. Ut semper non nunc ut fermentum. Aliquam ut aliquam magna. Proin vitae orci eu elit tristique tempus sit amet sit amet eros. Morbi suscipit elit et venenatis placerat.',
    description3: 'Pellentesque ac ligula eu ligula eleifend fringilla sed quis enim. Praesent quis accumsan erat. Integer dolor odio, vehicula in euismod in, maximus ac quam. Donec ut sapien tempus, tincidunt neque gravida, pharetra nisl. Cras sollicitudin maruis tristique. Nunc massa purus, feugiat pulvinar placerat nec, tempus in diam. Cras porttitor diam vitae dignissim volutpat. Morbi finibus, orci non mollis rhoncus erat lorem.',
    media:[<FaFacebookF style={{backgroundColor:'#3B5998',borderRadius:'1rem',padding:'5px'}}/>,<FaTwitter style={{backgroundColor:'#1DA1F2',borderRadius:'1rem',padding:'5px'}}/>,<RiInstagramFill style={{backgroundColor:'#EA4C89',borderRadius:'1rem',padding:'5px'}}/>,<FaLinkedin style={{backgroundColor:'#0077B5',borderRadius:'1rem',padding:'5px'}}/>,<FaPinterest style={{backgroundColor:'#BD081C',borderRadius:'1rem',padding:'5px'}}/>]
},
{
    id: '2', img: content, date: new Date(),
    topic: 'GOOGLE IS TESTING A MAJOR CHANGE TO SEARCH RESULTS',
    description1: 'Donec placerat est enim, molestie finibus sem eleifend. In commodo, velit sed consequat vehicula, ipsum tellus vehicula neque, eget porttitor quam odio vitae tellus. Nullam sem lacus, aliquet sed fermentum vel, placerat sit amet erat volutpat. Quisque rhoncus lectus et nisl mattis aliquet. Aenean eleifend dolor sit amet imperdiet semper phasellus finibus auctor dui eget bibendum. Suspendisse ac tortor consequat, dictum urna ac.',
    description2: 'Integer dolor enim, eleifend ut egestas sit amet, interdum non libero. Phasellus molestie pharetra nunc. Cras bibendum luctus nisi, quis eleifend orci finibus ac. Ut semper non nunc ut fermentum. Aliquam ut aliquam magna. Proin vitae orci eu elit tristique tempus sit amet sit amet eros. Morbi suscipit elit et venenatis placerat.',
    media:[<FaFacebookF style={{backgroundColor:'#3B5998',borderRadius:'1rem',padding:'5px'}}/>,<FaTwitter style={{backgroundColor:'#1DA1F2',borderRadius:'1rem',padding:'5px'}}/>,<RiInstagramFill style={{backgroundColor:'#EA4C89',borderRadius:'1rem',padding:'5px'}}/>,<FaLinkedin style={{backgroundColor:'#0077B5',borderRadius:'1rem',padding:'5px'}}/>,<FaPinterest style={{backgroundColor:'#BD081C',borderRadius:'1rem',padding:'5px'}}/>],
    description3: 'Pellentesque ac ligula eu ligula eleifend fringilla sed quis enim. Praesent quis accumsan erat. Integer dolor odio, vehicula in euismod in, maximus ac quam. Donec ut sapien tempus, tincidunt neque gravida, pharetra nisl. Cras sollicitudin maruis tristique. Nunc massa purus, feugiat pulvinar placerat nec, tempus in diam. Cras porttitor diam vitae dignissim volutpat. Morbi finibus, orci non mollis rhoncus erat lorem.',
},
{
    id: '3', img: content, date: new Date(),
    topic: 'GOOGLE IS TESTING A MAJOR CHANGE TO SEARCH RESULTS',
    description1: 'Donec placerat est enim, molestie finibus sem eleifend. In commodo, velit sed consequat vehicula, ipsum tellus vehicula neque, eget porttitor quam odio vitae tellus. Nullam sem lacus, aliquet sed fermentum vel, placerat sit amet erat volutpat. Quisque rhoncus lectus et nisl mattis aliquet. Aenean eleifend dolor sit amet imperdiet semper phasellus finibus auctor dui eget bibendum. Suspendisse ac tortor consequat, dictum urna ac.',
    media:[<FaFacebookF style={{backgroundColor:'#3B5998',borderRadius:'1rem',padding:'5px'}}/>,<FaTwitter style={{backgroundColor:'#1DA1F2',borderRadius:'1rem',padding:'5px'}}/>,<RiInstagramFill style={{backgroundColor:'#EA4C89',borderRadius:'1rem',padding:'5px'}}/>,<FaLinkedin style={{backgroundColor:'#0077B5',borderRadius:'1rem',padding:'5px'}}/>,<FaPinterest style={{backgroundColor:'#BD081C',borderRadius:'1rem',padding:'5px'}}/>],
    description2: 'Integer dolor enim, eleifend ut egestas sit amet, interdum non libero. Phasellus molestie pharetra nunc. Cras bibendum luctus nisi, quis eleifend orci finibus ac. Ut semper non nunc ut fermentum. Aliquam ut aliquam magna. Proin vitae orci eu elit tristique tempus sit amet sit amet eros. Morbi suscipit elit et venenatis placerat.',
    description3: 'Pellentesque ac ligula eu ligula eleifend fringilla sed quis enim. Praesent quis accumsan erat. Integer dolor odio, vehicula in euismod in, maximus ac quam. Donec ut sapien tempus, tincidunt neque gravida, pharetra nisl. Cras sollicitudin maruis tristique. Nunc massa purus, feugiat pulvinar placerat nec, tempus in diam. Cras porttitor diam vitae dignissim volutpat. Morbi finibus, orci non mollis rhoncus erat lorem.',
},
{
    id: '4', img: content, date: new Date(),
    topic: 'GOOGLE IS TESTING A MAJOR CHANGE TO SEARCH RESULTS',
    media:[<FaFacebookF style={{backgroundColor:'#3B5998',borderRadius:'1rem',padding:'5px'}}/>,<FaTwitter style={{backgroundColor:'#1DA1F2',borderRadius:'1rem',padding:'5px'}}/>,<RiInstagramFill style={{backgroundColor:'#EA4C89',borderRadius:'1rem',padding:'5px'}}/>,<FaLinkedin style={{backgroundColor:'#0077B5',borderRadius:'1rem',padding:'5px'}}/>,<FaPinterest style={{backgroundColor:'#BD081C',borderRadius:'1rem',padding:'5px'}}/>],
    description1: 'Donec placerat est enim, molestie finibus sem eleifend. In commodo, velit sed consequat vehicula, ipsum tellus vehicula neque, eget porttitor quam odio vitae tellus. Nullam sem lacus, aliquet sed fermentum vel, placerat sit amet erat volutpat. Quisque rhoncus lectus et nisl mattis aliquet. Aenean eleifend dolor sit amet imperdiet semper phasellus finibus auctor dui eget bibendum. Suspendisse ac tortor consequat, dictum urna ac.',
    description2: 'Integer dolor enim, eleifend ut egestas sit amet, interdum non libero. Phasellus molestie pharetra nunc. Cras bibendum luctus nisi, quis eleifend orci finibus ac. Ut semper non nunc ut fermentum. Aliquam ut aliquam magna. Proin vitae orci eu elit tristique tempus sit amet sit amet eros. Morbi suscipit elit et venenatis placerat.',
    description3: 'Pellentesque ac ligula eu ligula eleifend fringilla sed quis enim. Praesent quis accumsan erat. Integer dolor odio, vehicula in euismod in, maximus ac quam. Donec ut sapien tempus, tincidunt neque gravida, pharetra nisl. Cras sollicitudin maruis tristique. Nunc massa purus, feugiat pulvinar placerat nec, tempus in diam. Cras porttitor diam vitae dignissim volutpat. Morbi finibus, orci non mollis rhoncus erat lorem.',
},

{
    id: '5', img: content, date: new Date(),
    topic: 'GOOGLE IS TESTING A MAJOR CHANGE TO SEARCH RESULTS',
    description1: 'Donec placerat est enim, molestie finibus sem eleifend. In commodo, velit sed consequat vehicula, ipsum tellus vehicula neque, eget porttitor quam odio vitae tellus. Nullam sem lacus, aliquet sed fermentum vel, placerat sit amet erat volutpat. Quisque rhoncus lectus et nisl mattis aliquet. Aenean eleifend dolor sit amet imperdiet semper phasellus finibus auctor dui eget bibendum. Suspendisse ac tortor consequat, dictum urna ac.',
    media:[<FaFacebookF style={{backgroundColor:'#3B5998',borderRadius:'1rem',padding:'5px'}}/>,<FaTwitter style={{backgroundColor:'#1DA1F2',borderRadius:'1rem',padding:'5px'}}/>,<RiInstagramFill style={{backgroundColor:'#EA4C89',borderRadius:'1rem',padding:'5px'}}/>,<FaLinkedin style={{backgroundColor:'#0077B5',borderRadius:'1rem',padding:'5px'}}/>,<FaPinterest style={{backgroundColor:'#BD081C',borderRadius:'1rem',padding:'5px'}}/>],
    description2: 'Integer dolor enim, eleifend ut egestas sit amet, interdum non libero. Phasellus molestie pharetra nunc. Cras bibendum luctus nisi, quis eleifend orci finibus ac. Ut semper non nunc ut fermentum. Aliquam ut aliquam magna. Proin vitae orci eu elit tristique tempus sit amet sit amet eros. Morbi suscipit elit et venenatis placerat.',
    description3: 'Pellentesque ac ligula eu ligula eleifend fringilla sed quis enim. Praesent quis accumsan erat. Integer dolor odio, vehicula in euismod in, maximus ac quam. Donec ut sapien tempus, tincidunt neque gravida, pharetra nisl. Cras sollicitudin maruis tristique. Nunc massa purus, feugiat pulvinar placerat nec, tempus in diam. Cras porttitor diam vitae dignissim volutpat. Morbi finibus, orci non mollis rhoncus erat lorem.',
},

{
    id: '6', img: content, date: new Date(),
    topic: 'GOOGLE IS TESTING A MAJOR CHANGE TO SEARCH RESULTS',
    media:[<FaFacebookF style={{backgroundColor:'#3B5998',borderRadius:'1rem',padding:'5px'}}/>,<FaTwitter style={{backgroundColor:'#1DA1F2',borderRadius:'1rem',padding:'5px'}}/>,<RiInstagramFill style={{backgroundColor:'#EA4C89',borderRadius:'1rem',padding:'5px'}}/>,<FaLinkedin style={{backgroundColor:'#0077B5',borderRadius:'1rem',padding:'5px'}}/>,<FaPinterest style={{backgroundColor:'#BD081C',borderRadius:'1rem',padding:'5px'}}/>],
    description1: 'Donec placerat est enim, molestie finibus sem eleifend. In commodo, velit sed consequat vehicula, ipsum tellus vehicula neque, eget porttitor quam odio vitae tellus. Nullam sem lacus, aliquet sed fermentum vel, placerat sit amet erat volutpat. Quisque rhoncus lectus et nisl mattis aliquet. Aenean eleifend dolor sit amet imperdiet semper phasellus finibus auctor dui eget bibendum. Suspendisse ac tortor consequat, dictum urna ac.',
    description2: 'Integer dolor enim, eleifend ut egestas sit amet, interdum non libero. Phasellus molestie pharetra nunc. Cras bibendum luctus nisi, quis eleifend orci finibus ac. Ut semper non nunc ut fermentum. Aliquam ut aliquam magna. Proin vitae orci eu elit tristique tempus sit amet sit amet eros. Morbi suscipit elit et venenatis placerat.',
    description3: 'Pellentesque ac ligula eu ligula eleifend fringilla sed quis enim. Praesent quis accumsan erat. Integer dolor odio, vehicula in euismod in, maximus ac quam. Donec ut sapien tempus, tincidunt neque gravida, pharetra nisl. Cras sollicitudin maruis tristique. Nunc massa purus, feugiat pulvinar placerat nec, tempus in diam. Cras porttitor diam vitae dignissim volutpat. Morbi finibus, orci non mollis rhoncus erat lorem.',

},
{
    id: '7', img: content, date: new Date(),
    topic: 'GOOGLE IS TESTING A MAJOR CHANGE TO SEARCH RESULTS',
    media:[<FaFacebookF style={{backgroundColor:'#3B5998',borderRadius:'1rem',padding:'5px'}}/>,<FaTwitter style={{backgroundColor:'#1DA1F2',borderRadius:'1rem',padding:'5px'}}/>,<RiInstagramFill style={{backgroundColor:'#EA4C89',borderRadius:'1rem',padding:'5px'}}/>,<FaLinkedin style={{backgroundColor:'#0077B5',borderRadius:'1rem',padding:'5px'}}/>,<FaPinterest style={{backgroundColor:'#BD081C',borderRadius:'1rem',padding:'5px'}}/>],
    description1: 'Donec placerat est enim, molestie finibus sem eleifend. In commodo, velit sed consequat vehicula, ipsum tellus vehicula neque, eget porttitor quam odio vitae tellus. Nullam sem lacus, aliquet sed fermentum vel, placerat sit amet erat volutpat. Quisque rhoncus lectus et nisl mattis aliquet. Aenean eleifend dolor sit amet imperdiet semper phasellus finibus auctor dui eget bibendum. Suspendisse ac tortor consequat, dictum urna ac.',
    description2: 'Integer dolor enim, eleifend ut egestas sit amet, interdum non libero. Phasellus molestie pharetra nunc. Cras bibendum luctus nisi, quis eleifend orci finibus ac. Ut semper non nunc ut fermentum. Aliquam ut aliquam magna. Proin vitae orci eu elit tristique tempus sit amet sit amet eros. Morbi suscipit elit et venenatis placerat.',
    description3: 'Pellentesque ac ligula eu ligula eleifend fringilla sed quis enim. Praesent quis accumsan erat. Integer dolor odio, vehicula in euismod in, maximus ac quam. Donec ut sapien tempus, tincidunt neque gravida, pharetra nisl. Cras sollicitudin maruis tristique. Nunc massa purus, feugiat pulvinar placerat nec, tempus in diam. Cras porttitor diam vitae dignissim volutpat. Morbi finibus, orci non mollis rhoncus erat lorem.',

},

{
    id: '8', img: content, date: new Date(),
    topic: 'GOOGLE IS TESTING A MAJOR CHANGE TO SEARCH RESULTS',
    media:[<FaFacebookF style={{backgroundColor:'#3B5998',borderRadius:'1rem',padding:'5px'}}/>,<FaTwitter style={{backgroundColor:'#1DA1F2',borderRadius:'1rem',padding:'5px'}}/>,<RiInstagramFill style={{backgroundColor:'#EA4C89',borderRadius:'1rem',padding:'5px'}}/>,<FaLinkedin style={{backgroundColor:'#0077B5',borderRadius:'1rem',padding:'5px'}}/>,<FaPinterest style={{backgroundColor:'#BD081C',borderRadius:'1rem',padding:'5px'}}/>],
    description1: 'Donec placerat est enim, molestie finibus sem eleifend. In commodo, velit sed consequat vehicula, ipsum tellus vehicula neque, eget porttitor quam odio vitae tellus. Nullam sem lacus, aliquet sed fermentum vel, placerat sit amet erat volutpat. Quisque rhoncus lectus et nisl mattis aliquet. Aenean eleifend dolor sit amet imperdiet semper phasellus finibus auctor dui eget bibendum. Suspendisse ac tortor consequat, dictum urna ac.',
    description2: 'Integer dolor enim, eleifend ut egestas sit amet, interdum non libero. Phasellus molestie pharetra nunc. Cras bibendum luctus nisi, quis eleifend orci finibus ac. Ut semper non nunc ut fermentum. Aliquam ut aliquam magna. Proin vitae orci eu elit tristique tempus sit amet sit amet eros. Morbi suscipit elit et venenatis placerat.',
    description3: 'Pellentesque ac ligula eu ligula eleifend fringilla sed quis enim. Praesent quis accumsan erat. Integer dolor odio, vehicula in euismod in, maximus ac quam. Donec ut sapien tempus, tincidunt neque gravida, pharetra nisl. Cras sollicitudin maruis tristique. Nunc massa purus, feugiat pulvinar placerat nec, tempus in diam. Cras porttitor diam vitae dignissim volutpat. Morbi finibus, orci non mollis rhoncus erat lorem.',

},

{
    id: '9', img: content, date: new Date(),
    topic: 'GOOGLE IS TESTING A MAJOR CHANGE TO SEARCH RESULTS',
    media:[<FaFacebookF style={{backgroundColor:'#3B5998',borderRadius:'1rem',padding:'5px'}}/>,<FaTwitter style={{backgroundColor:'#1DA1F2',borderRadius:'1rem',padding:'5px'}}/>,<RiInstagramFill style={{backgroundColor:'#EA4C89',borderRadius:'1rem',padding:'5px'}}/>,<FaLinkedin style={{backgroundColor:'#0077B5',borderRadius:'1rem',padding:'5px'}}/>,<FaPinterest style={{backgroundColor:'#BD081C',borderRadius:'1rem',padding:'5px'}}/>],
    description1: 'Donec placerat est enim, molestie finibus sem eleifend. In commodo, velit sed consequat vehicula, ipsum tellus vehicula neque, eget porttitor quam odio vitae tellus. Nullam sem lacus, aliquet sed fermentum vel, placerat sit amet erat volutpat. Quisque rhoncus lectus et nisl mattis aliquet. Aenean eleifend dolor sit amet imperdiet semper phasellus finibus auctor dui eget bibendum. Suspendisse ac tortor consequat, dictum urna ac.',
    description2: 'Integer dolor enim, eleifend ut egestas sit amet, interdum non libero. Phasellus molestie pharetra nunc. Cras bibendum luctus nisi, quis eleifend orci finibus ac. Ut semper non nunc ut fermentum. Aliquam ut aliquam magna. Proin vitae orci eu elit tristique tempus sit amet sit amet eros. Morbi suscipit elit et venenatis placerat.',
    description3: 'Pellentesque ac ligula eu ligula eleifend fringilla sed quis enim. Praesent quis accumsan erat. Integer dolor odio, vehicula in euismod in, maximus ac quam. Donec ut sapien tempus, tincidunt neque gravida, pharetra nisl. Cras sollicitudin maruis tristique. Nunc massa purus, feugiat pulvinar placerat nec, tempus in diam. Cras porttitor diam vitae dignissim volutpat. Morbi finibus, orci non mollis rhoncus erat lorem.',

}
];

const Comment=[{img:lucile,name:'LUCILE SPARKS',time:'1-HOUR AGO',about:'Vivamus ipsum turpis laoreet ac consequat et mattis in justo pellentesque enim mi interdum ac lacus eget euismod fermentum urna aenean suscipit arcu nulla.'}
    ,{img:herman,name:'HERMAN MALDONADO',time:'24-MINUTES AGO',about:'Etiam interdum luctus sem, tincidunt congue nisi rutrum vel. Nunc porta maximus interdum. Donec tristique diam id augue egestas feugiat nunc gravid'},
    {img:lucile,name:'DANNY GUTIEREZ',time:'45-MINUTES AGO',about:'Phasellus ligula urna, commodo et eleifend vitae, malesuada eget purus. Phasellus at nisi id eros interdum pharetra. Mauris rutrum ultrices turpis.'}]

export { blog_Cards, detail_Data,Comment };