import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

import {
  Authenticator,
  ThemeProvider,
  Theme,
  useTheme,
} from '@aws-amplify/ui-react';

export const StyledAuth = ({children}: {children: React.ReactNode}) => {
  const { tokens } = useTheme();

  const theme: Theme = {
    name: 'Auth Example Theme',
    tokens: {
      fonts: {
        default: {
          variable: { value: `"Space Grotesk", sans-serif` },
        },
      },
      components: {
        authenticator: {
          router: {
            boxShadow: `box-shadow: 5px 5px 10px 1px #0003;`,
            borderStyle: 'none',
          },
          form: {
            padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
          },
        },
        button: {
          primary: {
            backgroundColor: tokens.colors.neutral['100'],
          },
          link: {
            color: tokens.colors.purple['80'],
          },
        },
        fieldcontrol: {
          _focus: {
            boxShadow: `0 0 0 2px ${tokens.colors.purple['60']}`,
          },
        },
        tabs: {
          item: {
            color: "#141774",
            _active: {
              borderColor: tokens.colors.neutral['100'],
              color: tokens.colors.purple['100'],
            },
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
        <Authenticator formFields={formFields}>
          {children}
          </Authenticator>
    </ThemeProvider>
  );
}

const formFields = {
  signIn: {
    username: {
      placeholder: '',
      isRequired: true,
      label: 'Login',
    },
    password: {
      placeholder: '',
      isRequired: true,
      label: 'Senha',
    },
  }
}
