import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 1000,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      background: "white",
        "&$selected": {
      background: "red"
        }
    },
    same: {
        height: 1000,
    }

    
  }));
  
export default function Cosmetics() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div className={classes.same}>
         
           
                <Paper className={classes.paper}>
                <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Shiseido" {...a11yProps(0)} />
        <Tab label="Pola" {...a11yProps(1)} />
        <Tab label="Noevir" {...a11yProps(2)} />
        <Tab label="EV Princess" {...a11yProps(3)} />
        <Tab label="Kileinei" {...a11yProps(4)} />
        <Tab label="Obagi" {...a11yProps(5)} />
        <Tab label="Menard" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0} >
      Shiseido
      </TabPanel>
      <TabPanel value={value} index={1}>
       Pola
      </TabPanel>
      <TabPanel value={value} index={2}>
      Noevir
      </TabPanel>
      <TabPanel value={value} index={3}>
      EV Princess
      </TabPanel>
      <TabPanel value={value} index={4}>
      Kileinei
      </TabPanel>
      <TabPanel value={value} index={5}>
      Obagi
      </TabPanel>
      <TabPanel value={value} index={6}>
        Menard
      </TabPanel>
    </div>
                
                </Paper>
            
     
        </div>
    )
}
