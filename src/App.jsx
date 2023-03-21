import "./App.css";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} sx={{ border: "1px solid black" }}>
            item 1
          </Grid>
          <Grid item xs={12} sm={6} sx={{ border: "1px solid black" }}>
            item 2
          </Grid>
          <Grid item xs={12} sm={6} sx={{ border: "1px solid black" }}>
            item 3
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ border: "1px solid black" }}>
            item 4
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
