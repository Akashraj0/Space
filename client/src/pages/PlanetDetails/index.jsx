/*eslint-disable*/
import "./index.scss";
function PlanetDetails({ des, ved }) {
  console.log(des, ved);

  return (
    <div className="planetDetail">
      <video className="video" controls>
        <source
          className="source"
          src={`/assets/videos/${ved}`}
          type="video/mp4"
        />
      </video>
      <p className="para">{des}</p>
    </div>
  );
}

// PlanetDetails.propTypes = {
//   ved: PropTypes.string.isRequired,
//   des: PropTypes.string.isRequired,
// };

export default PlanetDetails;
