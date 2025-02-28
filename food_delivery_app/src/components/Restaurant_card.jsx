import PropTypes from "prop-types";

export default function Restaurant_card({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
  cloudinaryImageId,
}) {
  console.log(name);

  return (
    <div>
      <div className="restaurant_card_component">
        <div className="restaurant_image">
          <img
            style={{ width: "300px", height: "240px" }}
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
          ></img>
        </div>

        <span className="restaurant_name">{name}</span>
        <br></br>
        <span style={{ color: "grey" }}>
          {cuisines.join(", ").length > 35
            ? `${cuisines.join(", ").slice(0, 35)}...`
            : cuisines.join(",")}
        </span>
        <div className="restaurant_extra_details">
          <h4 style={{ color: "grey" }}>⭐{avgRating}</h4> |
          <h4 style={{ color: "grey" }}>{deliveryTime} 🏃‍♂️‍➡️</h4>
        </div>
        <div>{costForTwoString}</div>
      </div>
    </div>
  );
}

Restaurant_card.propTypes = {
  name: PropTypes.string.isRequired,
  cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
  cloudinaryImageId: PropTypes.string.isRequired,
  costForTwoString: PropTypes.string.isRequired,
  deliveryTime: PropTypes.number.isRequired,
  avgRating: PropTypes.string.isRequired,
};
