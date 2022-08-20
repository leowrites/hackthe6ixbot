import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/trispace'

const theme = createTheme({
    typography: {
        fontFamily: ["Trispace", "sans-serif"]
    }
})

export default function ThemeProvider(children) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}