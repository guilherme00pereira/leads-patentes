import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

import { I18n } from 'aws-amplify/utils';
import { Heading, translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('pt');

import {
  Authenticator,
  ThemeProvider,
  Theme,
  useTheme,
} from '@aws-amplify/ui-react';


export const StyledAuth = ({children}: {children: React.ReactNode}) => {
  const { tokens } = useTheme();

  const theme: Theme = {
    name: 'Funilize Theme',
    tokens: {
      colors: {
        font: {
          primary: "#141774",
          secondary: "#1677ff",
        },
      },
      fonts: {
        default: {
          variable: { value: `"Space Grotesk", sans-serif` },
        },
      },
      // components: {
      //   authenticator: {
      //     router: {
      //       boxShadow: `5px 5px 10px 1px #0003;`,
      //       borderStyle: 'none',
      //     },
      //     form: {
      //       padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
      //     },
      //   },
      //   button: {
      //     primary: {
      //       backgroundColor: "#249882",
      //     },
      //     link: {
      //       color: "#1677ff",
      //     },
      //   },
      //   fieldcontrol: {
      //     _focus: {
      //       boxShadow: "0 0 0 2px #249882",
      //     },
      //   },
      //   tabs: {
      //     item: {
      //       color: "#141774",
      //       _active: {
      //         borderColor: "#141774",
      //         color: "#249882",
      //       },
      //     },
      //   },
      // },
    },
  };

  return (
    <ThemeProvider theme={theme}>
        <Authenticator hideSignUp={true} components={components}>
          {children}
          </Authenticator>
    </ThemeProvider>
  );
}

const components = {
  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={6}
        >
          Acesso
        </Heading>
        </div>
      );
    },
  },
}