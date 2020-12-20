import React from 'react'
import './App.css'
import {
  Button,
  Container,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
} from '@material-ui/core'
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import { Save, Delete } from '@material-ui/icons/'
import { orange, red } from '@material-ui/core/colors'
import 'fontsource-roboto'

const CheckboxExample = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            checkedIcon={<Save />}
            icon={<Delete />}
          />
        }
        label="testing checkbox"
      ></FormControlLabel>
    </>
  )
}
const useStyles = makeStyles({
  root: {
    borderRadius: '10px',
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    color: 'white',
    // padding: '0, 10px',
    margin: 10,
  },
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: red[500],
    },
  },
  typography: {
    h3: {
      fontSize: 12,
    },
  },
})
function ButtonStyled() {
  const classes = useStyles()
  return <Button className={classes.root}>Testing Styles</Button>
}

function App() {
  const contStyle = {
    display: 'grid',
    gap: 10,
  }

  const buttonGroupStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
  }

  const buttonStyle = {
    margin: 10,
  }
  return (
    <Container style={contStyle} maxWidth="xs">
      <AppBar color="secondary">
        <Toolbar>
          <IconButton color="primary" icon={<Save />}>
            <Menu>
              <h1>Sup</h1>
            </Menu>
          </IconButton>
          <Typography variant="h6">MUI Theming</Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h3">Wecome to Mui</Typography>
      <Typography variant="subtitle1" component="div">
        Learn how to use Material UI
      </Typography>
      <CheckboxExample />
      <TextField
        variant="outlined"
        color="secondary"
        type="time"
        type="email"
        placeholder="test@test.com"
        label="the time"
      />
      <ButtonGroup variant="contained" color="primary" style={buttonGroupStyle}>
        <Button size="large" startIcon={<Save />} style={buttonStyle}>
          Save
        </Button>
        <Button size="large" startIcon={<Delete />} style={buttonStyle}>
          Delete
        </Button>
        <ButtonStyled />
      </ButtonGroup>{' '}
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={6} md={8}>
          <Paper style={{ height: 75, width: 50 }}></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ height: 75, width: 50 }}></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ height: 75, width: 50 }}></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ height: 75, width: 50 }}></Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
