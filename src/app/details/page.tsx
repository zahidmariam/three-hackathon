import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
    <div className="w-full md:w-1/2 flex justify-center">
        <img src="/p3.png" alt="Nike Air Force 1 PLT.AF.ORM shoe" className="max-w-full h-auto" />
    </div>
    <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
        <h1 className="text-3xl font-bold">Nike Air Force 1</h1>
        <h2 className="text-2xl font-bold">PLT.AF.ORM</h2>
        <p className="mt-4 text-gray-600">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>
        <p className="mt-4 text-2xl font-bold">₹ 8 695.00</p>
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-full flex items-center justify-center">
            <i className="fas fa-shopping-cart mr-2"></i> Add To Cart
        </button>
    </div>
</div>

  )
}

export default page

