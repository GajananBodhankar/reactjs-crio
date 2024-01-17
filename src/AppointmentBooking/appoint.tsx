import React, { useState } from "react";
import "./appoint.css";
import {
  handleComplete,
  handleDoctor,
  handleEmail,
  handleFirstName,
  handleLastName,
  handleSubmit,
  handleTime,
  handleWhere,
} from "./handle";
function Appoint() {
  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    doctor: "",
    where: "",
    dateTime: "",
  });
  let [loading, setLoading] = useState<boolean>(false);
  let [complete, setComplete] = useState(false);
  return (
    <div className="mainContainer">
      {!complete && (
        <>
          <h1>Book a Session</h1>
          <p>
            Fill in the form below to book a virtual session with your doctor
          </p>
          <h5>Basic Info</h5>
        </>
      )}
      {!loading ? (
        <form
          action=""
          onSubmit={async (e) => {
            if (await handleSubmit(e, data, setLoading, loading)) {
              setComplete(true);
              setLoading(true);
            }
          }}
        >
          <div className="contentDiv">
            <div className="subDiv">
              <label htmlFor="first">First Name : </label>
              <input
                type="text"
                id="first"
                name="first"
                value={data.firstName}
                onChange={(e) => handleFirstName(e, setData, data)}
              />
            </div>
            <div className="subDiv">
              <label htmlFor="last">Last Name : </label>
              <input
                type="text"
                id="last"
                name="last"
                value={data.lastName}
                onChange={(e) => handleLastName(e, setData, data)}
              />
            </div>
            <div className="subDiv">
              <label htmlFor="email">Email : </label>
              <input
                type="text"
                id="email"
                value={data.email}
                onChange={(e) => handleEmail(e, setData, data)}
              />
            </div>
          </div>
          <h5>Doctor</h5>
          <select
            name="doctor"
            id="doctor"
            defaultValue={"select"}
            onChange={(e) => handleDoctor(e, setData, data)}
          >
            <option value={"select"} disabled>
              Select Doctor
            </option>
            <option value="Dr.John Hopkins">Dr.John Hopkins</option>
            <option value="Dr.Mark">Dr.Mark</option>
          </select>
          <h5>Where?</h5>
          <input
            type="radio"
            name="where"
            id="google"
            value={"google"}
            onChange={(e) => handleWhere(e, setData, data)}
          />
          <label htmlFor="google">Google Meet</label>
          <br />
          <input
            type="radio"
            name="where"
            id="Phone"
            value={"phone"}
            onChange={(e) => handleWhere(e, setData, data)}
          />
          <label htmlFor="Phone">Phone</label>
          <br />
          <h5>When ?</h5>
          <input
            type="datetime-local"
            name=""
            id=""
            value={data.dateTime}
            onChange={(e) => handleTime(e, setData, data)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      ) : (
        !complete && <h5>Scheduling the appointment...</h5>
      )}
      {complete && (
        <div>
          <h4>Appointment booked Successfully</h4>
          <button
            onClick={() =>
              handleComplete(setComplete, setLoading, loading, setData)
            }
          >
            Cancel appointment
          </button>
        </div>
      )}
    </div>
  );
}

export default Appoint;
