import Image from "next/image";
import React from "react";

// Define the type for a Product
type Product = {
  id: number;
  label: string;
  name: string;
  category: string;
  colors: string;
  price: string;
  image: string;
  alt: string;
};

// Array of products with the correct type
const products: Product[] = [
  {
    id: 1,
    label: "Just In",
    name: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    colors: "1 Colour",
    price: "₹ 10,795.00",
    image: "/p1.png",
    alt: "Nike Air Force 1 Mid '07",
  },
  {
    id: 2,
    label: "Just In",
    name: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    colors: "1 Colour",
    price: "₹ 4,995.00",
    image: "/p2.png",
    alt: "Nike Court Vision Low Next Nature",
  },
  {
    id: 3,
    label: "Just In",
    name: "Nike Air Force 1 PLT.AF.ORM",
    category: "Women's Shoes",
    colors: "1 Colour",
    price: "₹ 8,695.00",
    image: "/p3.png",
    alt: "Nike Air Force 1 PLT.AF.ORM",
  },
  {
    id: 4,
    label: "Just In",
    name: "Nike Air Force 1 React",
    category: "Men's Shoes",
    colors: "1 Colour",
    price: "₹ 13,295.00",
    image: "/p4.png",
    alt: "Nike Air Force 1 React",
  },
  {
    id: 5,
    label: "Promo Exclusion",
    name: "Air Jordan 1 Elevate Low",
    category: "Women's Shoes",
    colors: "1 Colour",
    price: "₹ 11,895.00",
    image: "/p5.png",
    alt: "Air Jordan 1 Elevate Low",
  },
  {
    id: 6,
    label: "Just In",
    name: "Nike Standars issue",
    category: "Women's Basketball Jersey",
    colors: "1 Colour",
    price: "₹2,895.00",
    image: "/p6.png",
    alt: "Nike Standard Issue",
  },
  {
    id: 7,
    label: "Promo Exclution",
    name: "Nike Dunk Low Retro SE",
    category: "Mens's Shoes ",
    colors: "1 Colour",
    price: "₹ 9,695.00",
    image: "/p7.png",
    alt: "Nike Dunk Low Retro SE",
  },
  {
    id: 8,
    label: "Just In",
    name: "Nike One Leek Protection Period",
    category: "Women's Mid 18cm(approx)Biker Shorts",
    colors: "2 Colour",
    price: "₹ 3,395.00",
    image: "/p8.png",
    alt: "Nike One Leek Protection Period",
  },
  {
    id: 9,
    label: "Just In",
    name: "Nike AirForce 1LV8 3",
    category: "Order Kids Shoe",
    colors: "1 Colour",
    price: "₹ 7,495.00",
    image: "/p9.png",
    alt: "Nike AirForce 1LV8 3 ",
  },
  {
    id: 10,
    label: "Just In",
    name: "Nike Blazer Low Platform ",
    category: "Women's Shoes ",
    colors: "1 Colour",
    price: "₹ 8,195.00",
    image: "/p10.png",
    alt: "Nike Blazer Low Platform",
  },
  {
    id: 11,
    label: "Just In",
    name: "Nike Airforce 1 '07",
    category: "Women's Shoe",
    colors: "2 Colour",
    price: "₹ 8,195.00",
    image: "/p11.png",
    alt: "Nike Airforce 1 '07",
  },
  {
    id: 12,
    label: "Just In",
    name: "Nike Pro Dri-FIT",
    category: "Men's Tight-Fit seleeveles Top",
    colors: "1 Colour",
    price: "₹ 1,495.00",
    image: "/p12.png",
    alt: "Nike Pro Dri-FIT",
  },
  {
    id: 13,
    label: "Just In",
    name: "Nike Dunk Low Retro",
    category: "Men's Shoes",
    colors: "1 Colour",
    price: "₹ 8,695.00",
    image: "/p13.png",
    alt: "Nike Dunk Low Retro",
  },
  {
    id: 14,
    label: "Just In",
    name: "Nike Air Max SC",
    category: "Women's Shoes",
    colors: "2 Colour",
    price: "₹ 5,995.00",
    image: "/p14.png",
    alt: "Nike Air Max SC",
  },
  {
    id: 15,
    label: "Just In",
    name: "Nike Dri-Fit UV  Miler",
    category: "Mens's Short-Seleeve Running Top ",
    colors: "1 Colour",
    price: "₹ 1,695.00",
    image: "/p15.png",
    alt: "Nike Dri-Fit UV Miler",
  },
  {
    id: 16,
    label: "Just In",
    name: "Nike Air Max SYSTM",
    category: "Order Kid's Shoes",
    colors: "1 Colour",
    price: "₹ 6,495.00",
    image: "/p16.png",
    alt: "Nike Air Max SYSTM",
  },
  {
    id: 17,
    label: "Just In",
    name: "Nike Alate All U",
    category: "Women's Light-Support Lightly Lined U-Lined Neck Printed Sport Bra",
    colors: "1 Colour",
    price: "₹ 2,195.00",
    image: "/p17.png",
    alt: "Nike Alate ALL U",
  },
  {
    id: 18,
    label: "Just In",
    name: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    colors: "2 Colour",
    price: "₹ 7,495.00",
    image: "/p18.png",
    alt: "Nike Court Legacy Lift",
  },
  {
    id: 19,
    label: "Just In",
    name: "Nike Swoosh",
    category: "Women's Meduim Support Padded Sports Bra Tank",
    colors: "2 Colour",
    price: "₹ 3,095.00",
    image: "/p19.png",
    alt: "Nike Swoosh",
  },
  {
    id: 20,
    label: "Just In",
    name: "Nike SB Zoom Janoski OG+",
    category: "Shoes",
    colors: "1 Colour",
    price: "₹ 8,595.00",
    image: "/p20.png",
    alt: "Nike SB Janoski OG+",
  },
  {
    id: 21,
    label: "Just In",
    name: "Nike Dri-FIT Run Division Rise 365",
    category: "Men's Running Tank",
    colors: "2 Colour",
    price: "₹ 4,495.00",
    image: "/p21.png",
    alt: "Nike Dri-Fit Run Division Rise 365",
  },
  {
    id: 22,
    label: "Just In",
    name: "Nike Dri-Fit Challenger",
    category: "men's 18cm(apporx)2-in-1 Verstile Shorts",
    colors: "1 Colour",
    price: "₹ 2,495.00",
    image: "/p22.png",
    alt: "Nike Dri-Fit Challenger",
  },
{
    id: 23,
    label: "Just In",
    name: "Nike SB Zoom JanoskiOG+",
    category: "Shoes",
    colors: "1 Colour",
    price: "₹ 8,595.00",
    image: "/p23.png",
    alt: "Nike Standard Issue",
  },
  {
    id: 24,
    label: "Just In",
    name: "Nike Dri-Fit Run Division Rise 365 ",
    category: "Mens Running Tank",
    colors: "2 Colour",
    price: "₹ 3,495.00",
    image: "/p24.png",
    alt: "Nike Standard Issue",
  },
  {
    id: 25,
    label: "Just In",
    name: "Nike Dri-fit challenger Mens 18cm(Approx)2-in -1",
    category: "Versatile Shorts",
    colors: "1 Colour",
    price: "₹ 2,495.00",
    image: "/p25.png",
    alt: "Nike Standard Issue",
  },
  {
    id: 26,
    label: "Just In",
    name: "Jordan Series ES",
    category: "Mens Shoes",
    colors: "2 Colour",
    price: "₹ 7,495.00",
    image: "/p26.png",
    alt: "Nike Standard Issue",
  },
  {
    id: 27,
    label: "Just In",
    name: "Nike outdoor PLay",
    category: "Order Kids 0versized woven jacket",
    colors: "1 Colour",
    price: "₹ 3,895.00",
    image: "/p27.png",
    alt: "Ni  ke Standard Issue",
  },
{
    id: 28,
    label: "Just In",
      name: "Nike sports wear trend",
    category: "order kids (Girls)High-waisted woven shorts",
    colors: "2 Colour",
    price: "₹ 2,495.00",
    image: "/p28.png",
    alt: "Nike Standard Issue"
},
  {
    id: 29,
    label: "Just In",
    name: "Nike Blazzer Low 77 ",
    category: "Women  's shoes",
    colors: "1 Colour",
    price: "₹ 8,595.00",
    image: "/p29.png",
    alt: "Nike Standard Issue",
  },  {
    id: 30,
    label: "Just In",
    name: "Nike SB Force 58",
    category: "skate shoe",
    colors: "1 Colour",
    price: "₹ 5,995.00",
    image: "/p30.png",
    alt: "Nike Standard Issue",
  },

  
  
];

// ProductCard component
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <Image src={product.image} alt={product.alt} className="w-full h-auto rounded"  />
      <div className="mt-2 text-sm text-red-600">{product.label}</div>
      <div className="mt-1 text-lg font-semibold">{product.name}</div>
      <div className="mt-1 text-gray-600">{product.category}</div>
      <div className="mt-1 text-gray-600">{product.colors}</div>
      <div className="mt-1 text-black font-semibold">MRP: {product.price}</div>
    </div>
  );
}

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Two-column layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left column: Menu */}
        <div className="col-span-3 space-y-4">
          <div className="text-lg font-bold">Shoes</div>
          <div className="text-lg font-bold">Sports Bras</div>
          <div className="text-lg font-bold">Tops & T-Shirts</div>
          <div className="text-lg font-bold">Hoodies & Sweatshirts</div>
          <div className="text-lg font-bold">Jackets</div>
          <div className="text-lg font-bold">Trousers & Tights</div>
          <div className="text-lg font-bold">Shorts</div>
          <div className="text-lg font-bold">Tracksuits</div>
          <div className="text-lg font-bold">Jumpsuits & Rompers</div>
          <div className="text-lg font-bold">Skirts & Dresses</div>
          <div className="text-lg font-bold">Socks</div>
          <div className="text-lg font-bold">Accessories & Equipment</div>
        </div>

        {/* Right column: Products */}
        <div className="col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
