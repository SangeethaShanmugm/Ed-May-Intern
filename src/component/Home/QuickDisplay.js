import { Link } from "react-router-dom";
export const QuickDisplay = (props) => {
  const listMeal = ({ mealData }) => {
    if (mealData) {
      return mealData.map((item) => {
        return (
          <Link key={item._id} to={`/listing/${item.mealtype_id}`}>
            <div className="tileContainer">
              <div className="tileItem1">
                <img src={item.meal_image} alt={item.mealtype} />
              </div>
              <div className="tileMainHeading">
                <div className="tileHeading">{item.mealtype}</div>
              </div>
              <div className="tileSubheading">
                <div>{item.content}</div>
              </div>
            </div>
          </Link>
        );
      });
    }
  };

  return (
    <>
      <div className="mainTileContainer">{listMeal(props)}</div>
    </>
  );
};
