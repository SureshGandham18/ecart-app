import React,{useState} from 'react';
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import {MdOutlineFindInPage} from 'react-icons/md';

const img1 = "https://rukminim1.flixcart.com/image/832/832/xif0q/computer/b/e/h/-original-imagjyc69gh3a8wu.jpeg?q=70";
const img2 = "https://rukminim1.flixcart.com/image/832/832/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70";
const img3 = 'https://rukminim1.flixcart.com/image/300/300/l44hyfk0/computer/6/7/9/-original-imagf39qzkzncyvh.jpeg?q=90';
const img4 = 'https://rukminim1.flixcart.com/image/300/300/l0r1j0w0/computer/z/m/a/np340xla-ka1in-thin-and-light-laptop-samsung-original-imagcgqvcvcbsun6.jpeg?q=90';
const img5 = 'https://rukminim1.flixcart.com/image/832/832/xif0q/computer/2/v/m/-original-imagmnmr59pmudx6.jpeg?q=70';
const img6 = 'https://rukminim1.flixcart.com/image/832/832/xif0q/computer/k/b/8/15s-fr4000tu-thin-and-light-laptop-hp-original-imaghrcwmt7v5svk.jpeg?q=70';
const img7 = 'https://rukminim1.flixcart.com/image/832/832/l4vnbm80/computer/i/f/f/15ada7-thin-and-light-laptop-lenovo-original-imagfzzxmhfgzysy.jpeg?q=70';
const img8 = 'https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/computer/g/u/y/-original-imagewgtfgzf8fdd.jpeg?q=70';

function Laptops() {
  const productList = [
    {
        name:"acer Aspire 7 Ryzen 5 Hexa Core AMD R5-5500U",
        price: 52200,
        imgSrc: img1,
        id: "jwvevxujwbxuiew"
    },
    {
        name:"APPLE 2020 Macbook Air M1",
        price: 87999,
        imgSrc: img2,
        id: "jwvevxujwuiew"
    },
    {
        name:"Infinix X1 Slim Series Core i5 10th Gen",
        price: 40999,
        imgSrc: img3,
        id: "jwvevxujwuiew"
    },
    {
        name:"SAMSUNG Galaxy Book Go Snapdragon 7c Gen 2",
        price: 32999,
        imgSrc: img4,
        id: "jwvevxujsuiew"
    },
    {
        name:"HP Pavilion Intel Core i5 12th Gen",
        price: 70000,
        imgSrc: img5,
        id: "jwvevzujsuiew"
    },
    {
        name:"HP Intel Core i5 11th Gen",
        price: 52999,
        imgSrc: img6,
        id: "jwvevzujsuipw"
    },
    {
        name:"Lenovo IdeaPad 1 Ryzen 5 Quad Core 3500U",
        price: 47999,
        imgSrc: img7,
        id: "jwvevzujsuipw"
    },
    {
        name:"ASUS ROG Strix G15 Ryzen 7 Octa Core AMD R7-4800H",
        price: 79999,
        imgSrc: img8,
        id: "jwvelzujsuipw"
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

export default Laptops