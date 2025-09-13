import { Card, CardContent, Typography, Grid } from "@mui/material";

function StatsCards({ stats }) {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {stats.map((stat, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" color="primary">{stat.title}</Typography>
              <Typography variant="h4">{stat.value}</Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.change}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default StatsCards;
