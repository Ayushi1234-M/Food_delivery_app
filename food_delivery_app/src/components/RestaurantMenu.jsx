import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

export default function RestaurantMenu() {

  const{resId}=useParams();
  console.log(resId);

  // const p = useParams();
  // console.log(p);


  const [dataInfo, setDataInfo] = useState(null); //to get restaurant basic info

  const [menuInfo, setMenuInfo] = useState(null); //to get menu

  async function fetchResMenu() {
    const url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=" + resId;

    const response = await fetch(url);

    const jsonResponse = await response.json();

    setDataInfo(jsonResponse.data.cards[2].card.card.info);

    console.log(
      jsonResponse.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card
        .card.itemCards
    );

    setMenuInfo(
      jsonResponse.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card
        .card.itemCards
    );
  }

  useEffect(() => {
    fetchResMenu();
  }, []);

  return (
    <div>
      {menuInfo === null ? (
        <div style={{ marginTop: "40px" }}>
          <Shimmer></Shimmer>
        </div>
      ) : (
        <div>
          <div className="RestaurantMenu_component">
            <h2>{dataInfo.name}</h2>

            <div className="ind_prop_part1">
              <div className="ind_cusine">
                <div style={{ width: "50%" }}>
                  <h3 style={{ color: "green" }}>
                    {dataInfo.cuisines.join(", ")}
                  </h3>
                </div>
              </div>

              <div className="ind_rating">
                <div className="indiv_rating">
                  <div className="rating-box">
                    <h3 style={{ textAlign: "center" }}>
                      ⭐{dataInfo.avgRating}
                    </h3>
                    <hr></hr>
                    <h4>{dataInfo.totalRatingsString}</h4>
                  </div>
                </div>
              </div>
            </div>

            <hr></hr>

            <h3>
              ✌️<span> {dataInfo.costForTwoMessage}</span>
            </h3>

            <div className="indiv_menu_items">
              {menuInfo.map((i) => {
                return (
                  <div className="menu-item" key={i.card.info.id}>
                    <div className="left-menu">
                      <div className="info-name">{i.card.info.name}</div>

                      <div className="info-price">
                        Rs.{Math.round(i.card.info.price / 100)}
                      </div>

                      <br></br>

                      <div className="info-to-add-btn">

                      <button>Add</button>

                        </div>

                      {/* <div className="info-add-btns">
                        <button>-</button>
                        <button>1</button>
                        <button>+</button>
                      </div> */}

                      <br></br>
                      <br></br>

                      <div className="info-description">

                        {
                          i.card.info.description.length>150?
                          i.card.info.description.slice(0,150)+"..."
                          :
                          i.card.info.description
                        }
                        {/* {i.card.info.description} */}
                      </div>
                      <br></br>
                    </div>

                    <div className="right-menu">
                      <img
                        src={
                          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                          i.card.info.imageId
                        }
                      ></img>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
