import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class TabsProfile extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="About Me" icon={<PersonPinIcon />} />
            <Tab label="Contact" icon={<PhoneIcon />} />
            <Tab label="Portofolio" icon={<FavoriteIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <h4>Hello There!!</h4>
            <p>
              <h5>
                Ini blog pribadi saya, jadi saya akan menuliskan sesuatu yang
                saya tulis disini tentunya haha...
              </h5>
            </p>
            <p>
              <h5>
                Sebelum itu tentunya perkenalan dulu, nama saya <b>Aminudin</b>{" "}
                dan saya adalah very very junior programmer. Jadi, jangan heran
                kalau tulisan saya aga kurang mengena gitu wkwk
              </h5>
            </p>
            <p>
              <h5>
                Pekerjaan saya saat ini adalah seorang programmer react di salah
                satu <b>StartUp</b> saya juga biasa menggunakan <b>AWS</b> untuk
                pembuatan <b>BackEnd</b> di <b>StartUp</b> tersebut..
              </h5>
            </p>

            <p>
              <h5>Ok selamat berkenalan dengan saya ^_^</h5>
            </p>
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

TabsProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabsProfile);
