// @flow

export const BREAKPOINT_SIZES = {
    xs: 320,
    sm: 540,
    md: 900,
    lg: 1024,
    xl: 1440,
}

export const BREAKPOINTS = {
    xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
    sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
    md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
    lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
    xl: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
    xsMin: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
    smMin: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
    mdMin: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
    lgMin: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
    xlMin: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
    desktop: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
}

export const READING_WIDTH = 850
export const EXTRA_WIDE_WIDTH = 1024

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i

const userAgent =
    typeof window !== "undefined" ? window.navigator.userAgent : "node"

export const IS_MOBILE_USER_AGENT = mobileRegex.test(userAgent)

export const Z_INDICES = {
    hero: 1,
    mainContent: 10,
    header: 100,
}

export const COLORS = {
    // pink: {
    //     "100": "#FF80AB",
    //     "300": "#FF4081",
    //     "500": "#f40088",
    //     "700": "#cc0072",
    // },
    // red: {
    //     "500": "#EF5350",
    //     "700": "#D50000",
    // },
    // orange: {
    //     "500": "#FF9100",
    //     "700": "#FF6D00",
    // },
    // yellow: {
    //     "500": "#FFC400",
    //     "700": "#FFAB00",
    // },
    // lime: {
    //     "500": "#C6FF00",
    //     "700": "#AEEA00",
    // },
    // green: {
    //     "500": "#00E676",
    //     "700": "#00C853",
    // },
    // blue: {
    //     "500": "#3D5AFE",
    //     "700": "#304FFE",
    // },
    // indigo: {
    //     "500": "#000bef",
    //     "700": "#0000e0",
    // },
    // violet: {
    //     "500": "#D500F9",
    //     "700": "#AA00FF",
    // },
    // purple: {
    //     "500": "#651fff",
    //     "700": "#4919b7",
    // },
    // gray: {
    //     "50": "#f8f8f8",
    //     "100": "#f2f2f2",
    //     "200": "#eaeaea",
    //     "300": "#cccccc",
    //     "400": "#aaaaaa",
    //     "500": "#888888",
    //     "600": "#666666",
    //     "700": "#444444",
    //     "800": "#2A2A2A",
    //     "900": "#111111",
    // },
    // white: "#FFF",
    // black: "#000",
    // light: {
    //     text: "#21232c",
    //     background: "#ffffff",
    //     primary: "#cae9f8",
    // },
    // dark: {
    //     text: "#f2f5f7",
    //     background: "#0e141a",
    //     primary: "#2b4655",
    // },
    ["text"]: {
        dark: "hsl(0deg, 0%, 100%)",
        light: "hsl(222deg, 22%, 5%)",
    },
    ["background"]: {
        dark: "hsl(210deg, 30%, 8%)",
        light: "hsl(0deg, 0%, 100%)",
    },
    ["blurred-background"]: {
        dark: "hsla(210deg, 30%, 8%, 0.85)",
        light: "hsla(0deg, 0%, 100%, 0.85)",
    },
    ["primary"]: {
        dark: "hsl(230deg, 100%, 69%)",
        light: "#77d2ff",
    },
    ["secondary"]: {
        dark: "hsl(333deg, 100%, 52%)",
        light: "hsl(333deg, 100%, 45%)",
    },
    ["tertiary"]: {
        dark: "hsl(53deg, 100%, 50%)",
        light: "hsl(255deg, 85%, 30%)",
    },
    ["decorative"]: {
        dark: "hsl(200deg, 50%, 60%)",
        light: "hsl(200deg, 75%, 65%)",
    },
    ["muted"]: {
        dark: "hsl(210deg, 38%, 15%)",
        light: "hsl(210deg, 55%, 92%)",
    },
    ["muted-background"]: {
        dark: "hsla(210deg, 38%, 15%, 0.85)",
        light: "hsla(210deg, 55%, 92%, 0.85)",
    },
    ["info"]: {
        dark: "hsl(230deg, 100%, 69%)",
        light: "hsl(245deg, 100%, 60%)",
    },
    ["success"]: {
        dark: "hsl(160deg, 100%, 40%)",
        light: "hsl(160deg, 100%, 40%)",
    },
    ["success-background"]: {
        dark: "hsla(160deg, 100%, 40%, 0.1)",
        light: "hsla(160deg, 100%, 40%, 0.1)",
    },
    ["error"]: {
        dark: "hsl(340deg, 95%, 60%)",
        light: "hsl(340deg, 95%, 50%)",
    },
    ["error-background"]: {
        dark: "hsla(340deg, 95%, 43%, 0.1)",
        light: "hsla(340deg, 95%, 43%, 0.1)",
    },
    ["alert"]: {
        dark: "hsl(30deg, 100%, 50%)",
        light: "hsl(37deg, 100%, 50%)",
    },
    ["alert-background"]: {
        dark: "hsl(40deg 13% 13%)",
        light: "hsla(52deg, 100%, 50%, 0.25)",
    },
    ["venn-0"]: {
        dark: "hsl(250deg, 100%, 50%)",
        light: "hsl(190deg, 100%, 65%)",
    },
    ["venn-1"]: {
        dark: "hsl(175deg, 100%, 50%)",
        light: "hsl(340deg, 100%, 65%)",
    },
    ["gray-100"]: {
        dark: "hsl(210deg, 15%, 20%)",
        light: "hsl(225deg, 25%, 95%)",
    },
    ["gray-200"]: {
        dark: "hsl(210deg, 15%, 25%)",
        light: "hsl(225deg, 16%, 90%)",
    },
    ["gray-300"]: {
        dark: "hsl(210deg, 10%, 40%)",
        light: "hsl(225deg, 8%, 80%)",
    },
    ["gray-400"]: {
        dark: "hsl(210deg, 9%, 45%)",
        light: "hsl(225deg, 8%, 70%)",
    },
    ["gray-500"]: {
        dark: "hsl(210deg, 8%, 50%)",
        light: "hsl(225deg, 7%, 60%)",
    },
    ["gray-600"]: {
        dark: "hsl(210deg, 12%, 55%)",
        light: "hsl(225deg, 15%, 50%)",
    },
    ["gray-700"]: {
        dark: "hsl(210deg, 14%, 66%)",
        light: "hsl(225deg, 12%, 40%)",
    },
    ["gray-900"]: {
        dark: "hsl(210deg, 25%, 88%)",
        light: "hsl(225deg, 25%, 20%)",
    },
    ["gray-1000"]: {
        dark: "hsl(210deg, 25%, 96%)",
        light: "hsl(225deg, 15%, 15%)",
    },
    ["subtle-background"]: {
        dark: "hsl(210deg, 30%, 8%)",
        light: "hsl(225deg, 25%, 95%)",
    },
    ["subtle-floating"]: {
        dark: "hsl(210deg, 22%, 15%)",
        light: "hsl(0deg, 0%, 100%)",
    },
    ["homepage-light"]: {
        dark: "hsla(200deg, 100%, 85%, 0)",
        light: "hsl(204deg, 67%, 85%)",
    },
    ["homepage-dark"]: {
        dark: "hsla(200deg, 100%, 85%, 0.1)",
        light: "hsl(202deg, 71%, 90%)",
    },
    ["homepage-bg"]: {
        dark: "hsl(210deg, 30%, 8%)",
        light: "hsl(204deg, 67%, 85%)",
    },
}

export const COLORS_SYNTAX = {
    ["bg"]: {
        dark: "hsl(210deg, 30%, 12%)",
        light: "hsl(225deg, 25%, 97%)",
    },
    ["highlight"]: {
        dark: "hsl(210deg, 30%, 18%)",
        light: "hsl(225deg, 25%, 93%)",
    },
    ["txt"]: {
        dark: "#FFF",
        light: "#2A2A2A",
    },
    ["comment"]: {
        dark: "#6c8998",
        light: "#467790",
    },
    ["prop"]: {
        dark: "#FF39A8",
        light: "#da0079",
    },
    ["bool"]: {
        dark: "#FFD600",
        light: "#bf00b8",
    },
    ["val"]: {
        dark: "#718e9c",
        light: "#78909C",
    },
    ["str"]: {
        dark: "rgb(155, 109, 255)",
        light: "#651fff",
    },
    ["name"]: {
        dark: " #C653FF",
        light: "#AA00FF",
    },
    ["del"]: {
        dark: "#FF5555",
        light: "rgb(255, 85, 85)",
    },
    ["regex"]: {
        dark: "#ffd700",
        light: "#3600d6",
    },
    ["fn"]: {
        dark: "rgb(0, 190, 255)",
        light: "#3D5AFE",
    },
    ["dark"]: {
        dark: "true",
        light: "false",
    },
}
