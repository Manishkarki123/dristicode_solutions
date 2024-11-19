import cap_man from '../../images/team_img/cap_man.png'
import black_tshirt from '../../images/team_img/black_tshirt.png'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
const team_Cards=[{
    img:cap_man,name:'JackMan',position:'Assistant'
},

{
    img:black_tshirt,name:'Leo',position:'Chairman'

},

{
    img:cap_man,name:'William',position:'Ceo'

},

{

    img:black_tshirt,name:'Michael',position:'Developer'

}

]

const team_Media=[{fb:<FaFacebookF className='team-fa'/>},{twitter:<FaTwitter className='team-fa'/>},{instagram:<RiInstagramFill className='team-fa'/>},{linkedin:<FaLinkedin className='team-fa'/>},{pi:<FaPinterest className='team-fa'/>}]

 export {team_Cards,team_Media};