import PropTypes from "prop-types";
import "./index.scss";

function Timeline({ time }) {
  return (
    <div className="Timeline">
      <div>
        <div>
          <div>
            <ul>
              {time?.map((times) => (
                <div key={time}>
                  <ul className="ul">
                    <li>
                      <div>
                        <div className="event-date badge bg-info ul-1">
                          {times.date}
                        </div>
                        <p>{times.para}</p>
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
