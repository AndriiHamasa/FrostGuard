import { Toolbar, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState("/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Toolbar>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab
          value="/"
          label="Home"
          component={Link}
          to="/"
          style={{
            color: value === "/" ? "#2196F3" : "inherit",
            transition: "color 0.3s ease",
          }}
        />
        <Tab
          value="/saved"
          label="Saved"
          component={Link}
          to="/saved"
          style={{ color: value === "/saved" ? "#2196F3" : "inherit" }}
        />
        {/*  */}
        <Tab
          value="/map"
          label="Map"
          component={Link}
          to="/map"
          style={{ color: value === "/map" ? "#2196F3" : "inherit" }}
        />
      </Tabs>
      
    </Toolbar>
  );
};

export default Header;
