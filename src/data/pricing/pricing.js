
import { CiUser } from "react-icons/ci";

import { FiUsers } from "react-icons/fi";

import { PiSuitcaseLight } from "react-icons/pi";
const pricing_Data = [
    {

        id: 1,title: 'PERSONAL', icon: <CiUser style={{color:'#8E54E9'}} />, text1: 'Free Setup', bandwidth: 'Unlimited bandwidth', storage: '50 GB', email: ' 10 Email Accounts', disk: '100GB Disk Space', price: '$ 37 /mo'
    },

    {

       id:2, title: 'TEAM', icon: <FiUsers style={{color:'#4776E6'}} />, text1: 'Free Setup', bandwidth: 'Unlimited bandwidth', storage: '100 GB', email: '15 Email Accounts', disk: '200GB Disk Space', price: '$ 57 / mo'
    },

    {

       id:3, title: 'BUSINESS', icon: <PiSuitcaseLight style={{color:'#8E54E9'}} />, text1: 'Free Setup', bandwidth: 'Unlimited bandwidth', storage: '200 GB', email: '20 Email Accounts', disk: '500GB Disk Space', price: '$ 87 / mo'
    }
]

export {pricing_Data};