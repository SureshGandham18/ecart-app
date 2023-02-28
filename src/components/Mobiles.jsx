import React,{useState} from 'react';
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import {MdOutlineFindInPage} from 'react-icons/md';

const img1 = "https://rukminim1.flixcart.com/image/300/300/l2p23rk0/mobile/x/b/y/-original-imagdznhnzmzfbwx.jpeg?q=90";
const img2 = "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/v/j/h/-original-imagkp8fvenrrkth.jpeg?q=70";
const img3 = 'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/a/x/j/-original-imagmkjfhzjhfhhe.jpeg?q=70';
const img4 = 'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/x/r/n/-original-imagmgy5jk8ytxnw.jpeg?q=70';
const img5 = 'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70';
const img6 = 'https://rukminim1.flixcart.com/image/832/832/xif0q/computer/k/b/8/15s-fr4000tu-thin-and-light-laptop-hp-original-imaghrcwmt7v5svk.jpeg?q=70';
const img7 = 'https://rukminim1.flixcart.com/image/832/832/l4vnbm80/computer/i/f/f/15ada7-thin-and-light-laptop-lenovo-original-imagfzzxmhfgzysy.jpeg?q=70';
const img8 = 'https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/computer/g/u/y/-original-imagewgtfgzf8fdd.jpeg?q=70';

function Mobiles() {
  const productList = [
    {
        name:"vivo T1 44W ",
        price: 17999,
        imgSrc: img1,
        id: "jwvevxujwexuiew"
    },
    {
        name:"realme 10 Pro+ 5G ",
        price: 24999,
        imgSrc: img2,
        id: "hwvevxujwexuiew"
    },
    {
        name:"POCO X5 Pro 5G",
        price: 27990,
        imgSrc: img3,
        id: "hwvevxusjlwexuiew"
    },
    {
        name:"OPPO Reno8T 5G",
        price: 32999,
        imgSrc: img4,
        id: "hwve2vxujlwexuiew"
    },
    {
        name:"Google Pixel 6a",
        price: 29990,
        imgSrc: img5,
        id: "hwve1vxujlwexuiew"
    },
    {
        name:"POCO X5 Pro 5G",
        price: 27990,
        imgSrc: img3,
        id: "hwvevxujlwexuilew"
    },
    {
        name:"POCO X5 Pro 5G",
        price: 27990,
        imgSrc: img3,
        id: "hwvevxul8jlwexuiew"
    },
    {
        name:"POCO X5 Pro 5G",
        price: 27990,
        imgSrc: img3,
        id: "hwvevx0ujlwexuiew"
    },
  ];

  const dispatch = useDispatch()

  const addToCartHandler = (options) =>{
    dispatch({type:"addToCart",payload:options});
    dispatch({type:"calculatePrice"});
    toast.success("Added to Cart");
  }
  const [searchName, setsearchName] = useState('');

  const filtername = productList?.filter((filteRName, index) => {
    if (filteRName.name.toLowerCase().includes(searchName.toLowerCase())) {
      return filteRName.name;
    }
  });

  return (
    <>
    <div className='input'>
      <input
          placeholder="Find your product...."
          sx={{ width: '250px', margin: '10px auto' }}
          onChange={(e) => setsearchName(e.target.value)}
        />
      <t><MdOutlineFindInPage size={50}/></t>
    </div>
    <div className='home'>
        {
            filtername?.length>0?(
              filtername?.map(i=>(
            <ProductCard 
            key={i.id} 
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
            />
            ))
            ):(
              <h3>Product not found</h3>
            )
        }
    </div>
    </>
  )
};
 
const ProductCard = ({name,id,price,handler,imgSrc})=>(
    <div className='productCard'>
        <img src={imgSrc} alt={name}/>
        <p>{name}</p>
        <h4>&#8377;{price}</h4>
        <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
    </div>
)

export default Mobiles