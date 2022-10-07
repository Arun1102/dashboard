import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WalletIcon from '@mui/icons-material/Wallet';
function Widget({type}) {

    let data;
    let amount = 200
    switch(type){
        case "user":
            data =   {
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PermIdentityIcon className='icon' style={{
                    color:"yellow", 
                    backgroundColor:"#88E289"

                    }}/>
                
            }
            break;
        case "order":
            data =  {
                    title:"ORDERS",
                    isMoney:true,
                    link:"See all Order",
                    icon:<ShoppingCartCheckoutIcon className='icon' style={{
                        color:"green", 
                        backgroundColor:"#B8D6B7"
    
                        }}/>
                    
                }
            break;
        case "earning":
            data =  {
                    title:"EARNING",
                    isMoney:true,
                    link:"See all earning",
                    icon:<AttachMoneyIcon className='icon' style={{
                        color:"red",
                        backgroundColor:"#F1C2C1"
                        }}/>
                    
                }
                break;
        case "balance":
            data =  {
                    title:"BALANCE",
                    isMoney:true,
                    link:"See all balance",
                    icon:<WalletIcon className='icon' 
                    style={{
                    color:"blue", 
                    backgroundColor:"#A5CDDA"

                    }}/>
                    
                }
                break;
            
            default:
            break;
    }

  return (
    <div className='Widget'>
        <div className="wrapper">
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney&&"$"}{amount}</span>
                <span className='link'>{data.link}</span>
                
            </div>
            <div className="right">
                <div className="rightup">
                    <KeyboardArrowUpIcon className='icon red'/>
                    <div className="percentage red">20 %</div>
                </div>
                <div className="rightdown">
                    <div className="icons">{data.icon}</div>
                    {/* <PermIdentityIcon className='icon'/> */}
                    {/* <div className="percentage">20 %</div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Widget