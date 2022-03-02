import React from 'react'
import img1 from '../../assets/images/d1.png';
import img2 from '../../assets/images/d2.png';
import img3 from '../../assets/images/d3.png';

function home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 pt-10 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-white text-5xl font-bold leading-none tracking-tight">
                <span className="text-white">Welcome to Dead Story</span>
              </h1>
              <p className="text-white text-xl mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quas, quibusdam.
              </p>
              <div className="mt-8">
                <a href="#" className="inline-block bg-white text-gray-800 hover:text-gray-600 hover:bg-gray-200 rounded-full px-5 py-3 mt-4">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center pt-5 font-extralight text-5xl">Digital Tools</h1>
      <div className="lg:flex md:flex sm:flex justify-center px-10 py-1">
        <div className="bg-sky-100 p-2 m-2 rounded">
          <h5 className="font-semibold text-xl">Evil Dead</h5>
          <img src={img1} alt="img1" className="w-50" />
          <p>Anne and her husband have just moved to a secluded ranch in search of tranquility. At a meeting, a friend of the couple tells a terrifying story about the place. Soon they realise that real life may be even more macabre. <a href="#">See More</a> </p>
        </div>
        <div className="bg-sky-100 p-2 m-2">
          <h5 className="font-semibold text-xl">Dead Stars</h5>
          <img src={img2} alt="img2" className="w-50" />
          <p>Anne and her husband have just moved to a secluded ranch in search of tranquility. At a meeting, a friend of the couple tells a terrifying story about the place. Soon they realise that real life may be even more macabre. <a href="#">See More</a></p>
        </div>
        <div className="bg-sky-100 p-2 m-2">
          <h5 className="font-semibold text-xl">Red Dead Story</h5>
          <img src={img3} alt="img3" className="w-50" />
          <p>Anne and her husband have just moved to a secluded ranch in search of tranquility. At a meeting, a friend of the couple tells a terrifying story about the place. Soon they realise that real life may be even more macabre. <a href="#">See More</a></p>
        </div>
      </div>
      <div className="lg:flex md:flex sm:flex justify-center px-10 py-1">
        <div className="bg-sky-100 p-2 m-2">
          <h5 className="font-semibold text-xl">Evil Dead</h5>
          <img src={img1} alt="img1" className="w-50" />
          <p>Anne and her husband have just moved to a secluded ranch in search of tranquility. At a meeting, a friend of the couple tells a terrifying story about the place. Soon they realise that real life may be even more macabre. <a href="#">See More</a> </p>
        </div>
        <div className="bg-sky-100 p-2 m-2">
          <h5 className="font-semibold text-xl">Dead Stars</h5>
          <img src={img2} alt="img2" className="w-50" />
          <p>Anne and her husband have just moved to a secluded ranch in search of tranquility. At a meeting, a friend of the couple tells a terrifying story about the place. Soon they realise that real life may be even more macabre. <a href="#">See More</a></p>
        </div>
        <div className="bg-sky-100 p-2 m-2">
          <h5 className="font-semibold text-xl">Red Dead Story</h5>
          <img src={img3} alt="img3" className="w-50" />
          <p>Anne and her husband have just moved to a secluded ranch in search of tranquility. At a meeting, a friend of the couple tells a terrifying story about the place. Soon they realise that real life may be even more macabre. <a href="#">See More</a></p>
        </div>
      </div>
      <div className="lg:flex md:flex sm:flex justify-center px-10 py-1">
        <div className="bg-sky-100 p-2 m-2">
          <h5 className="font-semibold text-xl">Evil Dead</h5>
          <img src={img1} alt="img1" className="w-50" />
          <p>Anne and her husband have just moved to a secluded ranch in search of tranquility. At a meeting, a friend of the couple tells a terrifying story about the place. Soon they realise that real life may be even more macabre. <a href="#">See More</a> </p>
        </div>
        <div className="bg-sky-100 p-2 m-2">
          <h5 className="font-semibold text-xl">Dead Stars</h5>
          <img src={img2} alt="img2" className="w-50" />
          <p>Anne and her husband have just moved to a secluded ranch in search of tranquility. At a meeting, a friend of the couple tells a terrifying story about the place. Soon they realise that real life may be even more macabre. <a href="#">See More</a></p>
        </div>
        <div className="bg-sky-100 p-2 m-2">
          <h5 className="font-semibold text-xl">Red Dead Story</h5>
          <img src={img3} alt="img3" className="w-50" />
          <p>Anne and her husband have just moved to a secluded ranch in search of tranquility. At a meeting, a friend of the couple tells a terrifying story about the place. Soon they realise that real life may be even more macabre. <a href="#">See More</a></p>
        </div>
      </div>

    </div>
  )
}

export default home