import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {Link as RouteLink} from "react-router-dom";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const sections = [
  {title: 'Technology', url: '#'},
  {title: 'Culture', url: '#'},
  {title: 'Politics', url: '#'},
  {title: 'Opinion', url: '#'},
  {title: 'Science', url: '#'},
  {title: 'Health', url: '#'},
  {title: 'Travel', url: '#'},
];

export default function Header() {
  const classes = useStyles();

  return (
      <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <Button component={RouteLink} to="/" size="small">Home</Button>
          <Typography component="h2"
                      variant="h5"
                      color="inherit"
                      align="center"
                      noWrap
                      className={classes.toolbarTitle}>
            Ryker Tyler's Blog
          </Typography>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <Button component={RouteLink}
                  to="/login"
                  variant="outlined"
                  size="small">
            Login
          </Button>
          &nbsp;
          <Button component={RouteLink}
                  to="/signup"
                  variant="outlined"
                  size="small">
            Sign Up
          </Button>
        </Toolbar>
        <Toolbar component="nav"
                 variant="dense"
                 className={classes.toolbarSecondary}>
          {sections.map((section) => (
              <Link component={RouteLink}
                    to="err"
                    color="inherit"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    className={classes.toolbarLink}>
                {section.title}
              </Link>
          ))}
        </Toolbar>
      </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
