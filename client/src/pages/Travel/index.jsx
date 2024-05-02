import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import "./index.scss";

const Travel = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),
    subject: Yup.string().required("Please enter a subject"),
    message: Yup.string().required("Please enter a message"),
    date: Yup.date().required("Please select a date"),
    time: Yup.string().required("Please select a time"),
    depature: Yup.string().required("Please select a departure destination"),
    arrival: Yup.string().required("Please select an arrival destination"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
      date: "",
      time: "",
      depature: "",
      arrival: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log(values);
        const response = await axios.post(
          "https://space-t99y.onrender.com/booking",
          values
        );
        if (response.data.error) {
          toast.error(response.data.error);
        } else {
          toast.success("Booking is successfully!");
          formik.resetForm();
        }
      } catch (error) {
        console.log(error);
      }
      setSubmitting(false);
    },
  });

  return (
    <footer className="footer">
      <div className="contact">
        <h1>Book a Ride</h1>
      </div>
      <div>
        <div className="contact-form">
          <form onSubmit={formik.handleSubmit}>
            <ul>
              <li className="half">
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </li>
              <li className="half">
                <select
                  onChange={formik.handleChange}
                  name="depature"
                  value={formik.values.depature}
                  style={{ width: "100%", padding: "8px" }}
                >
                  <option>--Depature Destination--</option>
                  <option value="Earth">Earth</option>
                </select>
                {formik.touched.depature && formik.errors.depature ? (
                  <div className="error">{formik.errors.depature}</div>
                ) : null}
              </li>
              <li className="half">
                <select
                  onChange={formik.handleChange}
                  name="arrival"
                  value={formik.values.arrival}
                  style={{ width: "100%", padding: "8px" }}
                >
                  <option>--Arrival Destination--</option>
                  <option value="sun">Sun</option>
                  <option value="saturn">Saturn</option>
                  <option value="Jupiter">Jupiter</option>
                  <option value="Venus">Venus</option>
                  <option value="Neptun">Neptune</option>
                  <option value="Mercury">Mercury</option>
                  <option value="Mars">Mars</option>
                  <option value="Uranus">Uranus</option>
                </select>
                {formik.touched.arrival && formik.errors.arrival ? (
                  <div className="error">{formik.errors.arrival}</div>
                ) : null}
              </li>
              <li className="half">
                <input
                  style={{ color: "black" }}
                  id="date"
                  type="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="error">{formik.errors.date}</div>
                ) : null}
              </li>
              <li className="half">
                <select
                  onChange={formik.handleChange}
                  name="time"
                  value={formik.values.time}
                  style={{ width: "100%", padding: "8px" }}
                >
                  <option style={{ color: "black" }}>Time</option>
                  <option style={{ color: "black" }} value="6:00">
                    6:00
                  </option>
                  <option style={{ color: "black" }} value="12:00">
                    12:00
                  </option>
                  <option style={{ color: "black" }} value="18:00">
                    18:00
                  </option>
                  <option style={{ color: "black" }} value="00:00">
                    00:00
                  </option>
                </select>
                {formik.touched.time && formik.errors.time ? (
                  <div className="error">{formik.errors.time}</div>
                ) : null}
              </li>
              <li>
                <input
                  placeholder="What is the reason you choose the planet to travel"
                  type="text"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div className="error">{formik.errors.subject}</div>
                ) : null}
              </li>
              <li>
                <textarea
                  placeholder="Tell us about Yourself"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="error">{formik.errors.message}</div>
                ) : null}
              </li>
              <li>
                <input type="submit" className="flat-button" value="BOOK" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </footer>
  );
};

export default Travel;
