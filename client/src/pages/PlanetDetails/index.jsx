/*eslint-disable*/

function PlanetDetails({ des, ved }) {
  console.log(des, ved);
  const planetDetailsStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3rem",
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
  };

  const planetDescriptionStyle = {
    fontSize: "16px",
    width: "80%",
    marginTop: "6rem",
    marginBottom: "6rem",
    textAlign: "justify",
  };

  return (
    <div style={planetDetailsStyle}>
      <video width="750" height="500" controls>
        <source src={`/assets/videos/${ved}`} type="video/mp4" />
      </video>
      <p style={planetDescriptionStyle}>{des}</p>
    </div>
  );
}

// PlanetDetails.propTypes = {
//   ved: PropTypes.string.isRequired,
//   des: PropTypes.string.isRequired,
// };

export default PlanetDetails;
