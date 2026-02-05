import React from "react";
import lash1 from "../assets/1.webp";
import classic from "../assets/classic.jpg";
import volume from "../assets/volume.jpg";
import hybrid from "../assets/hybrid.webp";
import { Map, MapControls, MapMarker, MarkerContent } from "../components/ui/map";
import { Card } from "../components/ui/card";

function Hompage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full md:p-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 shadow-xl rounded-2xl pb-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={lash1}
            alt="Professional lash extensions by LashByChino"
            className="w-full h-full md:h-100 md:min-w-100 max-h-125 lg:min-w-150 lg:min-h-125 object-cover object-center shadow-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 px-6 md:px-8 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left leading-tight">
            Elevate Your Gaze with{" "}
            <span className="text-pink-500">LashByChino</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center md:text-left max-w-lg">
            Experience professional lash extensions that enhance your natural
            beauty. Book your appointment today and discover the difference.
          </p>
          <button className="font-serif rounded-lg px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white hover:from-pink-500 hover:to-pink-600 transition duration-300 font-bold shadow-lg transform hover:scale-105">
            Book Appointment
          </button>
        </div>
      </section>
      {/* {Service Section} */}
      <section className="justify-center items-center flex flex-col md:gap-4 mt-16">
        <p className="font-bold">Service</p>
        <h1 className="font-bold text-4xl">What we offer</h1>
        {/* Lash Extensions Services */}
        <div className="w-full flex flex-col md:flex-row gap-4 mt-8 items-center md:items-stretch md:justify-evenly px-4">
          {/* Classic Lash Extensions */}
          <div className="w-full max-w-sm flex flex-col rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={classic}
                alt="Classic Lash Extension"
                className="w-full h-64 object-cover object-center transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-bold text-2xl text-gray-800">
                Classic Lash Extensions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Natural & Timeless look using 1:1 application technique for
                subtle enhancement. Perfect for a polished everyday look.
              </p>
              <button className="text-pink-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group mt-2">
                Learn More
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
          {/* Volume Lash Extensions */}
          <div className="w-full max-w-sm flex flex-col rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={volume}
                alt="Classic Lash Extension"
                className="w-full h-64 object-cover object-center transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-bold text-2xl text-gray-800">
                Volume Lash Extensions
              </h2>
              <p className="text-gray-600 leading-relaxed">
               Bold&
                Flamorous/ Multi-lash fans aplied to each natural lash for
                maximul volume and drama. Ideal for a glamorous, full look.
              </p>
              <button className="text-pink-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group mt-2">
                Learn More
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
          {/* Hybrid Lash Extensions */}
          <div className="w-full max-w-sm flex flex-col rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={hybrid}
                alt="Hybrid Lash Extension"
                className="w-full h-64 object-cover object-center transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-bold text-2xl text-gray-800">
                Hybrid Lash Extensions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The best of both worlds. A mix of classic and volume techniques for a textured. Perfect for those who want a bit of drama with a natural feel.

              </p>
              <button className="text-pink-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group mt-2">
                Learn More
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* {Book Appointment Section} */}
      <section className="w-full flex flex-col justify-center items-center mt-10 overflow-x-hidden">
        <div className="flex flex-col items-center text-center px-4">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Ready for your transformation?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mt-3">
            Book your appointment today and see what beautiful lashes can do for you.
          </p>
        </div>
        <div className="w-full px-4 mt-6">
          <Card className="h-[400px] w-full max-w-4xl mx-auto p-0 overflow-hidden">
            <Map
              center={[145.15198599625785, -37.97585481344235]}
              zoom={15}
              styles={{
                light: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
                dark: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
              }}
            >
              <MapControls />
              <MapMarker longitude={145.1519999992575} latitude={-37.97585481344235}>
                <MarkerContent>
                  <div className="relative">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg" />
                    <div
                      className="absolute left-1/2 -bottom-3 w-0 h-0
        border-l-[6px] border-l-transparent
        border-r-[6px] border-r-transparent
        border-t-[10px] border-t-blue-600
        -translate-x-1/2"
                    />
                  </div>
                </MarkerContent>
              </MapMarker>
            </Map>
          </Card>
        </div>
      </section>

    </main>
  );
}

export default Hompage;
