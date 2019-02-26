import * as React from "react";
import * as OIDC from "oidc-client";
import { Switch, RouteComponentProps, Redirect, Route } from "react-router-dom";
import { ApplicationState } from "../stores/index";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import LandingLayout from "./LandingLayout";

import { WhiteListedComponents } from "./WhiteListedComponents";

interface RoutesProps {
  pathname: string;
}

class Routes extends React.Component<RoutesProps & RouteComponentProps<{}>> {
  render() {
    const { location } = this.props;
    if (location) {
      const whiteListedRoutes = WhiteListedComponents;

      return (
        <Switch>
          {whiteListedRoutes.map(props => (
            <LandingLayout key={props.path} {...props} />
          ))}
        </Switch>
      );
    }
    return null;
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
    dispatch,
  };
}
function mapStateToProps(state: ApplicationState) {
  return {
    pathname: state.router.location.pathname,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(module)(Routes));
