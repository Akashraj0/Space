import PropTypes from "prop-types";
// Import our custom CSS
// import "../scss/styles.scss";

function Timeline({ time }) {
  return (
    <div
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "auto",
      }}
    >
      <div>
        <div>
          <div>
            <ul>
              {time?.map((times) => (
                <div key={time}>
                  <ul
                    style={{
                      justifyContent: "center",
                      textAlign: "center",
                      listStyle: "none",
                      padding: "20px",
                    }}
                  >
                    <li>
                      <div>
                        <div
                          className="event-date badge bg-info"
                          style={{
                            width: "20%",
                            padding: "1rem",
                            marginTop: "2rem",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          {times.date}
                        </div>
                        <p
                          style={{
                            color: "black",
                            margin: "auto",
                            width: "50%",
                            padding: "2rem",
                            textAlign: "justify",
                          }}
                        >
                          {times.para}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Timeline.propTypes = {
  time: PropTypes.array.isRequired,
  data: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

export default Timeline;
