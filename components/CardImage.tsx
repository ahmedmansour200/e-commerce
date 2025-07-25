'use client'
import React, { useState } from 'react'

const CardImage = ({image}:{image : string[]}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
   <div className="container grid grid-cols-4 gap-4 max-w-5xl mx-auto">
  {/* Thumbnails */}
  <div className="col-span-1 flex flex-col gap-4">
    {image && image.slice(0, 4).map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Thumbnail ${index + 1}`}
        className="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-75 border border-gray-200"
        onClick={() => setSelectedImage(img)}
      />
    ))}
  </div>

  {/* Main Image */}
  <div className="col-span-3">
    <img
      src={selectedImage || image[0]}
      alt="Main product"
      className="w-full h-[500px] object-cover rounded-lg shadow"
    />
  </div>
</div>

  )
}

export default CardImage
