import { useEffect, useState } from "react";
import Restaurant_card from "./Restaurant_card";
// import resObj from "../assets/mockData";
// import ClipLoader from "react-spinners/ClipLoader";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default function Body() {
  const [origData, setOrigData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //-------------Search functionality starts-----------------
  const [searchText, setSearchText] = useState("");

  function handleSearchText(e) {
    var text = e.target.value;
    setSearchText(text);

    applyFilters(topRatedFilterSelected, fastDeliveryFilterSelected, text);
  }
  //------------search ends------------------------------

  //--------------Filter functionalities start------------

  const [topRatedFilterSelected, setTopRatedFilterSelected] = useState(false);
  const [fastDeliveryFilterSelected, setFastDeliveryFilterSelected] =
    useState(false);

  function applyFilters(topRated, fastDelivery, searchText) {
    let filteredData = origData;

    if (topRated) {
      filteredData = filteredData.filter((i) => i.info.avgRating >= 4);
    }

    if (fastDelivery) {
      filteredData = filteredData.filter((i) => i.info.sla.deliveryTime < 30);
    }

    if (searchText) {
      console.log("Yes func called");

      filteredData = filteredData.filter((i) =>
        i.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setData(filteredData); 
  }

  function handleTopRatedFilterBtn() {
    const newTopRatedState = !topRatedFilterSelected;
    setTopRatedFilterSelected(newTopRatedState);

    applyFilters(newTopRatedState, fastDeliveryFilterSelected, searchText);
  }

  function handleFastDeliveryFilterBtn() {
    const newFastDeliveryState = !fastDeliveryFilterSelected;
    setFastDeliveryFilterSelected(newFastDeliveryState);

    applyFilters(topRatedFilterSelected, newFastDeliveryState, searchText); 
  }

  //--------------Filter functionalities end------------

  async function fetchData() {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

    setLoading(true);

    try {
      const response = await fetch(url);

      const receivedData = await response.json();

     // console.log(receivedData);

      console.log(
        receivedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      // console.log(
      //   receivedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants[0]?.info?.name
      // );

      setOrigData(
        receivedData.data.cards[1].card.card.gridElements.infoWithStyle
          .restaurants
      );
      setData(
        receivedData.data.cards[1].card.card.gridElements.infoWithStyle
          .restaurants
      );

      console.log("-----------");
      console.log(receivedData.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="body_component">
        <div className="body_filters">
          <div className="btn-filter">
            <input
              type="text"
              className="search_bar_input"
              value={searchText}
              onChange={handleSearchText}
              placeholder="Search here..."
            />

            <button
              className={
                topRatedFilterSelected == true
                  ? "button-selected-focus filter-top-rated-btn"
                  : "filter-top-rated-btn"
              }
              onClick={handleTopRatedFilterBtn}
            >
              Top rated
            </button>

            <button
              className={
                fastDeliveryFilterSelected == true
                  ? "button-selected-focus thirty-mins-del"
                  : "thirty-mins-del"
              }
              onClick={handleFastDeliveryFilterBtn}
            >
              Quick delivery
            </button>
          </div>
        </div>

        {
        loading ? (
          // <ClipLoader className="loader-body-page" color="#123abc" loading={loading} size={70} />
          <div style={{ marginTop: "20px" }}>
            <Shimmer></Shimmer>
          </div>
        ) : (
          <div className="restaurant_container">
            {data?.length > 0 ? (
              data.map((i) => (

                <Link
                key={i.info.id}
                to={`/restaurant/${i.info.id}`}
                style={{ textDecoration: "none", color: "inherit" }} // Optional: keeps default styles
              >
  <Restaurant_card
                  key={i?.info?.id}
                  resObj={i}
                  name={i?.info?.name}
                  cuisines={i?.info?.cuisines}
                  avgRating={i?.info?.avgRating}
                  deliveryTime={i?.info?.sla?.deliveryTime}
                  costForTwoString={i?.info?.costForTwoString}
                  cloudinaryImageId={i?.info?.cloudinaryImageId}
                />
 </Link>
                
                
              ))
            ) : (
              <p>No restaurants found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
