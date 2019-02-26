import createMuiTheme, { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    drawer: {
      width: React.CSSProperties["width"];
      text: {
        color: string;
      };
    };
    toolbar: {
      height: number;
    };
  }
  interface ThemeOptions {
    drawer?: {
      width?: React.CSSProperties["width"];
      text?: {
        color: string;
      };
    };
    toolbar?: {
      height?: number;
    };
  }
}

export default function createRiteTheme(options: ThemeOptions) {
  const toolbarHeight = 64;
  return createMuiTheme({
    drawer: {
      width: 260,
      text: {
        color: "#FFFFFF",
      },
    },
    toolbar: {
      height: toolbarHeight,
    },
    overrides: {
      MuiToolbar: {
        root: {
          height: toolbarHeight,
        },
      },
    },
    ...options,
  });
}
