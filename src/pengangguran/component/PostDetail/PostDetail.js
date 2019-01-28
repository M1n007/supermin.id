import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

class PostDetail extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.postDetailRoot}>
        <Grid item className={classes.postDetailTitleImageRoot}>
          <img
            className={classes.postDetailTitleImage}
            src={this.props.location.state.thumbnail}
            alt="new"
          />
        </Grid>
        <Grid item>
          <div>
            <h2 className={classes.postDetailTitle}>
              {this.props.location.state.title}
            </h2>
            <Grid
              container
              className={classes.postInfo}
              alignItems="center"
              spacing={20}
            >
              <Grid item>
                <p className={classes.postDate}>
                  {this.props.location.state.time}
                </p>
              </Grid>
            </Grid>
            <p className={classes.postDetailContent}>
              {this.props.location.state.body}
            </p>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  postDetailRoot: {
    margin: 0,
    padding: 30
  },
  postDetailTitleImageRoot: {
    marginBottom: "20px",
    flexGrow: 1
  },
  postDetailTitleImage: {
    width: "100%",
    height: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "2px"
  },
  postDetailTitle: {
    fontSize: "30px",
    marginBottom: "5px"
  },
  postInfo: {
    marginTop: "10px"
  },
  postDate: {
    fontSize: "13px",
    color: "#484848"
  },
  postReadTime: {
    fontSize: "13px",
    color: "#484848"
  },
  postDetailContent: {
    marginTop: "20px",
    color: "#484848"
  },
  postDetailDate: {
    marginTop: "5px",
    fontSize: "13px"
  }
};

export default withStyles(styles)(PostDetail);
