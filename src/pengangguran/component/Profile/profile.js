import React, { Component } from "react";

import ProfilePic from "../../assets/img/me.jpg";
import TabsProfile from "../Tabs/Tabs";

export default class Profile extends Component {
  render() {
    return (
      <div style={{ flexDirection: "column" }}>
        <div style={{ backgroundColor: "#3498db", height: 250 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={ProfilePic}
                style={{
                  width: 150,
                  borderRadius: 80
                }}
              />
              <font
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  color: "#ecf0f1",
                  paddingTop: 30,
                  fontWeight: "bold",
                  fontSize: 15
                }}
              >
                Aminudin
              </font>
            </div>
          </div>
        </div>
        <div>
          <TabsProfile />
        </div>
      </div>
    );
  }
}
