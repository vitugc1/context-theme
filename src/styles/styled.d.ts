import 'styled-components'

declare module 'styled-components' {
    interface DefaultTheme {
        title: string;

        colors: {
            primary: string,
            secundary: string,

            background: string,
            text: string,
        }
    }
}