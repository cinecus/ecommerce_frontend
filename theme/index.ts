import { createTheme, NextUIProvider, Text } from "@nextui-org/react"

const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            primaryLight: '$purple200',
            primaryLightHover: '$purple300',
            primaryLightActive: '$purple400',
            primaryLightContrast: '$purple600',
            primary: '#8E05C2',
            primaryBorder: '$purple500',
            primaryBorderHover: '$purple600',
            primarySolidHover: '$purple700',
            primarySolidContrast: '$white',
            primaryShadow: '$purple500',
            primaryGrey: '$grey',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',

            facebook:'$blue600',

            // you can also create your own color
            myColor: '#ff4ecd'

            // ...  more colors
        },
        space: {},
        fonts: {
            san:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue','Kanit', sans-serif ",
            // mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono'"
        },
        shadows: {
            xs: '0 2px 8px 1px rgb(0 0 0 / 0.07), 0 1px 1px -1px rgb(0 0 0 / 0.04)',
            sm: '0 2px 8px 2px rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.04)',
            md: '0 12px 20px 6px rgb(0 0 0 / 0.08)',
            lg: '0 12px 34px 6px rgb(0 0 0 / 0.18)',
            xl: '0 25px 65px 0px rgb(0 0 0 / 0.35)'
        },
        // to use along with css dropShadow utility
        dropShadows: {
            xs: 'drop-shadow(0 2px 4px rgb(0 0 0 / 0.07)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.04))',
            sm: 'drop-shadow(0 2px 8px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 4px rgb(0 0 0 / 0.04))',
            md: 'drop-shadow(0 4px 12px rgb(0 0 0 / 0.08)) drop-shadow(0 20px 8px rgb(0 0 0 / 0.04))',
            lg: 'drop-shadow(0 12px 24px rgb(0 0 0 / 0.15)) drop-shadow(0 12px 14px rgb(0 0 0 / 0.1))',
            xl: 'drop-shadow(0 25px 34px rgb(0 0 0 / 0.35))'
        },
        // breakpoints: {
        //     xs: '320px',
        //     sm: '960px',
        //     md: '1280px',
        //     lg: '1400px',
        //     xl: '1920px'
        // }
    }
})

export default theme