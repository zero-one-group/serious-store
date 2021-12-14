// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import {
  Tasks,
  NewUsers,
  BugReports,
  ItemOrders,
  NewsUpdate,
  WeeklySales,
  OrderTimeline,
  CurrentVisits,
  WebsiteVisits,
  TrafficBySite,
  CurrentSubject,
  ConversionRates
} from '../../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function Dashboard() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <WeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <WebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <ConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <NewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <OrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <Tasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
