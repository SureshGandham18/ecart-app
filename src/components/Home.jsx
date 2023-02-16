import React,{useState} from 'react';
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';

const img1 = "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 = "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
const img3 = "https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg";
const img4 = "https://rukminim1.flixcart.com/image/416/416/kqwobrk0/stuffed-toy/c/0/x/3-feet-red-teddy-bear-90-srt-original-imag4tbcndxgqfhz.jpeg?q=70";
const img5 = "https://www.mylloyd.com/media/products/4_zoom7.jpg";
const img6 = "https://www.lg.com/in/images/washing-machines/md07518535/gallery/FHV1408ZWB-Washing-Machines-Left-View-Open-D-07.jpg";
const img7 = "https://www.ikonicworld.com/pub/media/catalog/product/cache/1dee15635ad016025242be8fbb183c2b/8/9/8904231000216_1.jpg";
const img8 = "https://5.imimg.com/data5/RM/ZZ/MP/IOS-31758803/product-jpeg-500x500.png";
const img9 = "https://m.media-amazon.com/images/I/41ywkR6OhIL._SX450_.jpg";
const img10 = "https://5.imimg.com/data5/SELLER/Default/2021/10/MF/MA/BQ/90098806/new-product-500x500.jpeg";
const img11 = "	https://5.imimg.com/data5/NU/QE/MY-8657522/microwave-oven-500x500.jpg";
const img12 = "	https://mykit.in/crm/public/uploads/product_images_500x500/mixer-grinder-410174.jpg";
function Home() {
  const productList = [
    {
        name:"Mac Book",
        price: 12000,
        imgSrc: img1,
        id: "jwvevxujwbxuiew"
    },
    {
        name:"Black Shoes",
        price: 500,
        imgSrc: img2,
        id: "iopevxujwbxuiew"
    },
    {
      name:"Mobile",
      price:1500,
      imgSrc:img3,
      id: "jhgdbkehdoienvjnc"
    },
    {
      name:"Teddy Bear",
      price:85,
      imgSrc:img4,
      id: "uydgbweuhdweiweoijew"
    },
    {
      name:"Refrigirator",
      price:8500,
      imgSrc:img5,
      id: "uydgbweuhdweopoijew"
    },
    {
      name:"Washing Machine",
      price:7550,
      imgSrc:img6,
      id: "sueshhdweiweoijew"
    },
    {
      name:"Hair Dryer",
      price:91,
      imgSrc:img7,
      id: "uydgbweuhdweiwehukw"
    },
    {
      name:"Android Smart TV",
      price:6800,
      imgSrc:img8,
      id: "uppgbweuhdweiweoijew"
    },
    {
      name:"Lenovo Idea Pad",
      price:9000,
      imgSrc:img9,
      id: "upoobweuhdweiweoijew"
    },
    {
      name:"Sofa Set",
      price:13000,
      imgSrc:img10,
      id: "upoyyweuhdweiweoijew"
    },
    {
      name:"Microoven",
      price:2300,
      imgSrc:img11,
      id: "upocceuhdweiweoijew"
    },
    {
      name:"Mixer Grinder",
      price:3300,
      imgSrc:img12,
      id: "upocceuhdweilijew"
    }
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
          placeholder="EnterName"
          sx={{ width: '250px', margin: '10px auto' }}
          onChange={(e) => setsearchName(e.target.value)}
        /></div>
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
              <h3>name not found</h3>
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
        <h4>${price}</h4>
        <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
    </div>
)

export default Home