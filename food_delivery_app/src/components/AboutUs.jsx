import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function AboutUs() {
  const [recipesData, setRecipesData] = useState([]);

  const [currIndex, setCurrIndex] = useState(0);

  async function fetchImgData() {
    const url = "https://dummyjson.com/recipes";

    const fetchedData = await fetch(url);

    const jsonResponse = await fetchedData.json();

    console.log(jsonResponse);

    setRecipesData(jsonResponse.recipes);
  }

  useEffect(() => {
    fetchImgData();

  }, []);


  useEffect(()=>{

    var intId = setInterval(() => {

      handleNext();
      
    }, 2000);

    return()=>clearInterval(intId);

  },[recipesData, currIndex])

  function handleNext() {
    var newidx = currIndex + 1;

    setCurrIndex(newidx);

    if(newidx > recipesData.length-1)
    {
      setCurrIndex(0);
    }
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">About BreakBites</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to BreakBites! We are passionate about bringing you the best
          experience when it comes to quick, delicious, and satisfying bites.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to revolutionize the way you enjoy snacks, ensuring
          quality, taste, and convenience in every bite. Whether you’re at work,
          home, or on the go, BreakBites has something special for you!
        </p>
        <p className="text-lg text-gray-700">
          Join us on this journey and let’s make snack time the best part of
          your day!
        </p>
      </div>

      <div className="about_carousel">
        {recipesData.length > 0 ? (
          <img className="aboutusimages" src={recipesData[currIndex].image}></img>
        ) : (
          // <h4>loading......</h4>

          <ClipLoader className="loader-body-page" color="#123abc" loading={true} size={70} />
        )}
      </div>
    </div>
  );
}
