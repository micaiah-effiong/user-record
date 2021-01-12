import { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./profileCard.js";
import filterAndSearch from "../handlers/filterAndSearch.js";

export default function ProfilePanel() {
  const [step] = useState(20);
  const [profiles, setProfiles] = useState([]);
  const [showProfiles, setShowProfiles] = useState([]);
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(step);
  const [page, setPage] = useState(1);

  const handelSubmit = (event) => {
    const { currentTarget, type } = event;

    if (type === "submit") {
      event.preventDefault();
    }

    const newProfs = filterAndSearch(profiles, currentTarget);
    setProfiles(newProfs);

    return setShowProfiles(newProfs.slice(0, step));
  };

  const prev = (_arr, page, unit = 20) => {
    const arr = [..._arr];
    const current = page * unit - unit;
    const result = arr.slice(current - unit, current);
    if (result.length) {
      if (result.length === unit) {
        setPage(page - 1);
      }
      return setShowProfiles(result);
    }
  };

  const next = (_arr, page, unit = 20) => {
    const arr = [..._arr];
    const current = page * unit;

    const result = arr.slice(current, current + unit);
    if (result.length) {
      if (result.length === unit) {
        setPage(page + 1);
      }
      return setShowProfiles(result);
    }
  };

  const handlePageMovement = (pos) => {
    if (pos === "L") {
      prev(profiles, page, step);
    } else {
      next(profiles, page, step);
    }
  };

  useEffect(async () => {
    const { data } = await axios
      .get("/")
      .catch((e) => alert("An error occured while loading the page"));
    const profs = data.records.profiles;
    setProfiles(profs);
    setShowProfiles(profs);
  }, []);

  // window.hpm = handlePageMovement;

  return (
    <div className="p-3">
      <h2>Find users</h2>
      <br />

      <div className="m-4">
        <form
          onSubmit={handelSubmit}
          onInput={handelSubmit}
          onChange={handelSubmit}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <label className="form-control-label width-mx">
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    placeholder="Search By Name"
                    name="search"
                  />
                </label>
                <button className="btn btn-primary btn-sm ml-3" type="submit">
                  Search
                </button>

                <button className="btn btn-primary btn-sm ml-3" type="reset">
                  Clear
                </button>
              </div>
            </div>

            <div className="row">
              <legend>Filter</legend>
              <div className="col">
                Payment Method
                <div className="form-check">
                  <input
                    type="checkbox"
                    value="check"
                    id="check"
                    name="payment_method"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="check">
                    Check
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    value="paypal"
                    id="paypal"
                    name="payment_method"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    value="cc"
                    id="cc"
                    name="payment_method"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="cc">
                    CC
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    value="money order"
                    id="money_order"
                    name="payment_method"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="money_order">
                    Money Order
                  </label>
                </div>
              </div>

              <div className="col">
                Last Seen
                <div>
                  <input
                    type="radio"
                    value="Male"
                    name="Gender"
                    className="form-check-input"
                    id="m1"
                  />
                  <label className="form-check-label" htmlFor="m1">
                    {" "}
                    Male
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="Female"
                    name="Gender"
                    className="form-check-input"
                    id="m6"
                  />
                  <label className="form-check-label" htmlFor="m6">
                    {" "}
                    Female
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="Prefer to skip"
                    name="Gender"
                    className="form-check-input"
                    id="m6"
                  />
                  <label className="form-check-label" htmlFor="m6">
                    {" "}
                    Prefer to skip
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-1"></div>
            </div>
          </div>
        </form>
      </div>

      <div className="container gallery">
        {showProfiles.map((e, index) => (
          <ProfileCard infor={e} key={index} />
        ))}
      </div>

      <div className="container mb-5">
        <div className="row">
          <button
            className="btn btn-primary btn-sm ml-3"
            onClick={() => handlePageMovement("L")}
          >
            Prev
          </button>
          <button
            className="btn btn-primary btn-sm ml-3"
            onClick={() => handlePageMovement("R")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
