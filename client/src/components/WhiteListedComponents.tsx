import Landing from "./Landing";
import RoutePaths from "./RoutePaths";
import IRoute from "./IRoute";

export const WhiteListedComponents: IRoute[] = [{ exact: true, path: RoutePaths.Landing, component: Landing }];
