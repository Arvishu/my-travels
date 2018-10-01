import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination:"las vegas",
        country:"America",
        photo:"https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/manual_crop/public/media/destination/slider/mobile/gettyrf_518150115_0.jpg?itok=Tn_DZyxf",
        distance:" 9 322 Km"
    },
    {
        destination:"mumbay",
        country:"India",
        photo:"https://thumbnails.trvl-media.com/S-WjJF9fqae9EZhOFoIYUGgGf7o=/768x432/images.trvl-media.com/media/content/shared/images/travelguides/destination/6050062/Mumbai-68013.jpg",
        distance:" 6761 Km"
    },
    {
        destination:"the Moon",
        country:"Space",
        photo:"https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAxOS8wOTEvb3JpZ2luYWwvanVseS1za3l3YXRjaGluZy1wb3J0bGFuZC5qcGc=",
        distance:" 384 400 km"
    },
    {
        destination:"Mars",
        country:"America",
        photo:"http://www.astronoo.com/images/planetes/mars/mars-valles-marineris.jpg",
        distance:" 56 millions de kilomètres"
    },
    {
        destination:"Alpha du Centaure",
          country:"universe",
          photo:"http://apod.cidehom.com/pix/2012/120628.jpg",
          distance:" 41,32 billions km"
    },
]

const Travels = () => (
    <div>
      {travels.map(travel => (
    <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
  
  
      ))}
    </div>
  );
  
  export default Travels;