import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';

export default function Navbar() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
          <Tab label="Product" to="/" component={Link} />
        <Tab label="user" to="/user" component={Link} />
        <Tab label="order" to="/order" component={Link} />
      </Tabs>
    </Paper>
  );
}
