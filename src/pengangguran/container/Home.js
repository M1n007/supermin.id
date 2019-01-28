import React, { Component } from "react";
import Zoom from "@material-ui/core/Zoom";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Fade from "@material-ui/core/Fade";

import "../assets/css/style.css";
import { Link } from "react-router-dom";

import Profile from "../component/Profile/profile";

export default class PengangguranIndex extends Component {
  state = {
    article: [
      {
        id: 0,
        title: "mengapa kita selalu sendiri ?",
        body: `body lorem ipsum lorem ipsum
                body lorem ipsum lorem ipsum
                body lorem ipsum lorem ipsum
                body lorem ipsum lorem ipsum
                body lorem ipsum lorem ipsum`,
        time: "Sabtu, 15 Desember 2018",
        writer: "Admin",
        thumbnail:
          "https://images.pexels.com/photos/750225/pexels-photo-750225.jpeg?cs=srgb&dl=black-background-blaze-blur-750225.jpg"
      },
      {
        id: 1,
        title: "test dark background",
        body: `body lorem ipsum lorem ipsum
                body lorem ipsum lorem ipsum
                body lorem ipsum lorem ipsum
                body lorem ipsum lorem ipsum
                body lorem ipsum lorem ipsum`,
        time: "Sabtu, 15 Desember 2018",
        writer: "Admin",
        thumbnail:
          "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-HD-Dark-wallpaper-1920x1080-PIC-WPD009333.jpg"
      },
      {
        id: 2,
        title: "Apa itu AWS ?",
        body: `Apa itu aws, dan apa kegunaan aws ?, sekarang kalian harus tahu tentang aws ? snagat penting hmmm`,
        time: "Sabtu, 15 Desember 2018",
        writer: "Admin",
        thumbnail:
          "https://mybroadband.co.za/news/wp-content/uploads/2018/10/AWS-Amazon-Web-Services-Dark.jpg"
      },
      {
        id: 3,
        title: "Apa itu AWS ?",
        body: `Apa itu aws, dan apa kegunaan aws ?, sekarang kalian harus tahu tentang aws ? snagat penting hmmm`,
        time: "Sabtu, 15 Desember 2018",
        writer: "Admin",
        thumbnail:
          "https://mybroadband.co.za/news/wp-content/uploads/2018/10/AWS-Amazon-Web-Services-Dark.jpg"
      },
      {
        id: 4,
        title: "Apa itu AWS ?",
        body: `Apa itu aws, dan apa kegunaan aws ?, sekarang kalian harus tahu tentang aws ? snagat penting hmmm`,
        time: "Sabtu, 15 Desember 2018",
        writer: "Admin",
        thumbnail:
          "https://mybroadband.co.za/news/wp-content/uploads/2018/10/AWS-Amazon-Web-Services-Dark.jpg"
      }
    ],
    activePage: 1,
    page: 1,
    previousPageCheck: false
  };

  nextPage() {
    this.setState({
      activePage: this.state.activePage + 1,
      previousPageCheck: true
    });
  }

  previousPage() {
    this.setState({
      activePage: this.state.activePage - 1,
      previousPageCheck: this.state.activePage == 1 ? false : true
    });
  }

  render() {
    return (
      <div>
        <div className="wrap">
          {/* <div className="body"> */}
          <Grid container spacing={24}>
            <Grid item xs={12} sm={7}>
              {this.state.article.map(artic => (
                <div redirect="/post" style={{ paddingTop: 25 }}>
                  <Paper>
                    <Zoom
                      in={true}
                      style={{ transitionDelay: true ? "100ms" : "0ms" }}
                    >
                      <div
                        className="article "
                        style={{
                          backgroundImage: "url(" + artic.thumbnail + ")",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat"
                        }}
                      >
                        {/* <div>
                            <img
                              src={artic.thumbnail}
                              className="thumbnail-img"
                            />
                          </div> */}
                        <div className="wrap-article">
                          <div>
                            <Link
                              to={{
                                pathname: `/post/${artic.title}`,
                                state: {
                                  id: artic.id,
                                  title: artic.title,
                                  body: artic.body,
                                  time: artic.time,
                                  writer: artic.writer,
                                  thumbnail: artic.thumbnail
                                }
                              }}
                            >
                              <Typography variant="h3" component="h3">
                                <font
                                  style={{
                                    color: "#ecf0f1",
                                    fontWeight: "bold",
                                    fontSize: 15
                                  }}
                                >
                                  {artic.title}
                                </font>
                              </Typography>
                            </Link>
                          </div>
                          <div>
                            <Typography
                              style={{ paddingTop: 10 }}
                              variant="subtitle1"
                              component="p"
                            >
                              <font
                                style={{
                                  color: "#ecf0f1",
                                  fontWeight: "bold",
                                  fontSize: 12
                                }}
                              >
                                {artic.body}
                              </font>
                            </Typography>
                          </div>
                          <div>
                            <Typography
                              style={{ cursor: "pointer", paddingTop: 5 }}
                            >
                              <font
                                style={{
                                  color: "#ecf0f1",
                                  fontWeight: "bold",
                                  fontSize: 9
                                }}
                              >
                                {artic.time}
                              </font>
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </Zoom>
                  </Paper>
                </div>
              ))}
            </Grid>
            <Grid
              item
              sm={1}
              style={{
                textAlign: "center"
              }}
            >
              <Grid container spacing={24}>
                <Grid item sm={12}>
                  {this.state.activePage > 1 ? (
                    <Fade in={this.state.previousPageCheck}>
                      <Fab
                        onClick={() => this.previousPage()}
                        aria-label="previous"
                      >
                        <KeyboardArrowLeft />
                      </Fab>
                    </Fade>
                  ) : null}
                </Grid>
                <Grid item sm={12}>
                  <Fab onClick={() => this.nextPage()} aria-label="next">
                    <KeyboardArrowRight />
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ paddingTop: 25 }}>
                <Paper>
                  <Profile />
                </Paper>
              </div>
            </Grid>
          </Grid>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
