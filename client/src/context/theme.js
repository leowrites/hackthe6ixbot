import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/trispace'

const theme = createTheme({
    typography: {
        fontFamily: ["Trispace"]
    }
})

export default function ({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}