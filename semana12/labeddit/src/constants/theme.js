import { createMuiTheme } from '@material-ui/core/styles'
import { MainColor } from './colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: MainColor,
        }
    }
})

export default theme;