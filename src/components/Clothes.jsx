import React,{useState} from 'react';
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import {BsSearch} from 'react-icons/bs';

const img1 = "https://i.pinimg.com/736x/aa/cd/f6/aacdf67227fdf40b1ab9b356923815f0.jpg";
const img2 = "https://images.jdmagicbox.com/quickquotes/images_main/men-s-formal-wear-blue-2030070345-6fpsdndx.jpg";
const img3 = 'https://cpimg.tistatic.com/06731779/b/6/Designer-Embroidery-Work-Festive-Wear-Kurta-With-Pajama-Mens-Wear-Catalog-Collection.jpg';
const img4 = 'https://static.wixstatic.com/media/524c26_94b96f9eb88a40b68d568c88fec0f099~mv2.jpg/v1/fill/w_677,h_677,al_c,lg_1,q_85/524c26_94b96f9eb88a40b68d568c88fec0f099~mv2.webp';
const img5 = 'https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/4/c/i/l-st2-vebnor-original-imagmg2wm2bbbddc.jpeg?q=70';
const img6 = 'https://rukminim1.flixcart.com/image/832/832/xif0q/sari/y/0/i/free-brasosari2-0-lorofy-unstitched-original-imaghbve6kzhaj6t.jpeg?q=70';
const img7 = 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/t/4/d/xxl-h-n-311-s-h-n-original-imagf9zzrrrgwu7x.jpeg?q=70';
const img8 = 'https://rukminim1.flixcart.com/image/832/832/kshtxu80/top/l/q/p/s-215tk111-selvia-original-imag6fvbju6reehp.jpeg?q=70';

function Clothes() {
  const productList = [
    {
        name:"Dress 1",
        price: 2200,
        imgSrc: img1,
        id: "jwvevxujwbxuiew"
    },
    {
      name:"Men's formal wear blue",
      price: 920,
      imgSrc: img2,
      id: "jwvevpxujwbxuiew"
    },
    {
      name:"Men's Kurta",
      price: 3520,
      imgSrc: img3,
      id: "jwvevpxujwbxuiew1"
    },
    {
      name:"Casual Full Sleeve T-Shirt With Joggers",
      price: 2000,
      imgSrc: img4,
      id: "jwvevpxujwbxuiew2"
    },
    {
      name:"Men Regular Fit Solid Spread Collar Casual Shirt",
      price: 1000,
      imgSrc: img5,
      id: "jwvevpxujwbxkuiew"
    },
    {
      name:"Blue silk saree",
      price: 1099,
      imgSrc: img6,
      id: "jvevpxujwbx4kuiew"
    },
    {
      name:"Cotton Blend Anarkali Kurta",
      price: 1499,
      imgSrc: img7,
      id: "jvevpxu9ojwbxkuiew"
    },
    {
      name:"Puff Sleeves Printed Women Pink Top",
      price: 1499,
      imgSrc: img8,
      id: "evp0xuojwbxkuiew"
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
      <div><BsSearch size={20}/></div>
      <div>
      <input
          placeholder="Find your product...."
          sx={{ width: '250px', margin: '10px auto' }}
          onChange={(e) => setsearchName(e.target.value)}
        /></div>
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

export default Clothes