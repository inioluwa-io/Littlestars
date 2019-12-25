import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { user } from "../db/user";

const Profile = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Prakhar Lolha</title>
      </Helmet>
      <section id="banner">
        <h1>Find mentor matching your skills</h1>
        <div className="btn btn-lg btn-primary">
          <Link to="">Add Connection</Link>
        </div>
      </section>
      <section id="usr-list" className="row container">
        <section id="usr-profile">
          <h2>Your Mentor Profile</h2>
          <div className="row">
            <div className="usr-avatar">
              <div className="avatar"></div>
            </div>
            <div className="usr-details">
              <p className="usr-name">Prakhar Lolha</p>
              <p className="label">Mentor</p>
              <p className="label desc">
                Software Engineer @Honeywell @swiggy @hp @notebook
              </p>
              <p className="label last">Last Updated 17/05/19</p>
            </div>
          </div>
          <button className="btn btn-md">Update Details</button>
        </section>

        <section id="usrs" className="">
          <ul>
            {user.map((item, id) => (
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
                    <button className="btn btn-md btn-primary last">
                      connect
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
};
export default Profile;
