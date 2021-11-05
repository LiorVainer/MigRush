interface ColorOptions {
    stauration?: number
    lightness?: number
    opacity?: number
}

export const ThemeColors = {
    grayScale: (lightness: number, opacity?: number) =>
        `hsla(0, 0%, ${lightness}%, ${opacity !== undefined ? opacity : 1})`,

    primary: ({ stauration, lightness, opacity }: ColorOptions = {}) =>
        `hsla(60, 12%, 97%, ${opacity ? opacity : 1})`,

    accent: ({ stauration, lightness, opacity }: ColorOptions = {}) =>
        `hsla(258, 24%, 33%, ${opacity ? opacity : 1})`,
}
