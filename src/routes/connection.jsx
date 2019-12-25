import React from "react";
import { Link, withRouter } from "react-router-dom";
import { user } from "../db/user";
import { Helmet } from "react-helmet";

const isQueried = (value, { ...props }) => {
  const URL = new URLSearchParams(props.location.search);
  return URL.get("q") === value;
};

const Connection = props => {
  let data;
  let view = "";

  if (isQueried("pending", props)) {
    data = user;
    view = "pending";
  }

  if (isQueried("accepted", props)) {
    data = user;
    view = "accepted";
  }

  return (
    <main id="connection">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Prakhar Lolha</title>
      </Helmet>
      <section id="usr-list" className="row container">
        <section id="usr-profile">
          <h2>Your Invites</h2>
          <Link
            to="?q=pending"
            className={
              "btn btn-sm " + (isQueried("pending", props) && " active")
            }
          >
            Pending requests
          </Link>
          <Link
            to="?q=accepted"
            className={
              "btn btn-sm " + (isQueried("accepted", props) && " active")
            }
          >
            Accepted requests
          </Link>
        </section>

        <section id="usrs" className="">
          <ul>
            {data ? (
              user.map((item, id) => (
                <li key={id}>
                  <div className="row">
                    <div className="usr-avatar">
                      <div className="avatar"></div>
                    </div>
                    <div className="usr-details">
                      <p className="usr-name">
                        <Link to="">{item.name}</Link>
                      </p>
                      <p className="label desc">{item.role}</p>
                      <p className="label">{item.language}</p>
                      <button
                        className={
                          "btn btn-md last " +
                          (isQueried("accepted", props)
                            ? "  btn-primary"
                            : " btn-default")
                        }
                      >
                        {view}
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li>
                <p>No request</p>
              </li>
            )}
          </ul>
        </section>
      </section>
    </main>
  );
};
export default withRouter(Connection);
