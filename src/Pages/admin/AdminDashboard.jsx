import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function AdminDashboard() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Stats Data
  const stats = [
    { title: "Total Donors", value: 573, change: "10% changes on Donors" },
    { title: "Total Recipients", value: 963, change: "25% changes on Recipients" },
    { title: "Total Blood Banks", value: 160, change: "20% changes on Blood Banks" },
    { title: "Total Hospitals", value: 200, change: "10% changes on Hospitals" },
    { title: "Approved Requests", value: 53, change: "25% changes on Approved Requests" },
    { title: "Total Requests", value: 20, change: "20% changes on Requests" },
  ];

  // Blood Group Data
  const bloodGroupData = [
    { name: "O+", value: 20 },
    { name: "A+", value: 10 },
    { name: "O-", value: 5 },
    { name: "A-", value: 15 },
    { name: "B+", value: 10 },
    { name: "AB+", value: 25 },
    { name: "B-", value: 15 },
  ];
  const COLORS = ["#333", "#B30E08", "#f48fb1", "#ef5350", "#757575", "#b71c1c", "#8d6e63"];

  // Donor Growth Data
  const donorGrowth = [
    { month: "Jan", donors: 200 },
    { month: "Feb", donors: 250 },
    { month: "Mar", donors: 300 },
    { month: "Apr", donors: 350 },
    { month: "May", donors: 400 },
    { month: "Jun", donors: 450 },
    { month: "Jul", donors: 500 },
    { month: "Aug", donors: 550 },
  ];

  // Requests Data
  const requestsData = [
    { month: "Jan", requests: 120 },
    { month: "Feb", requests: 90 },
    { month: "Mar", requests: 150 },
    { month: "Apr", requests: 180 },
    { month: "May", requests: 200 },
    { month: "Jun", requests: 170 },
    { month: "Jul", requests: 190 },
    { month: "Aug", requests: 210 },
  ];

  // Donations Data
  const donationsData = [
    { month: "Jan", donations: 100 },
    { month: "Feb", donations: 130 },
    { month: "Mar", donations: 170 },
    { month: "Apr", donations: 140 },
    { month: "May", donations: 180 },
    { month: "Jun", donations: 160 },
    { month: "Jul", donations: 200 },
    { month: "Aug", donations: 220 },
  ];

  // Custom label for pie chart
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f9f9f9" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          ml: { xs: "70px", md: "240px" },
          p: { xs: 2, md: 3 },
          width: { xs: "calc(100% - 70px)", md: "calc(100% - 240px)" },
        }}
      >
        <Header title="Admin Dashboard" />

        {/* Stats Cards */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ borderRadius: "12px", boxShadow: 3, height: "100%" }}>
                <CardContent>
                  <Typography variant="h6">{stat.title}</Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#B30E08", my: 1 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#B30E08", fontWeight: "500" }}
                  >
                    {stat.change}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Charts Row with specific column sizing */}
        <Box sx={{ width: '100%', height: '65vh', mb: 3 }}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            {/* Blood Group Availability - 30% */}
            <Grid item xs={12} lg={3.6} sx={{ height: '100%' }}>
              <Card sx={{ borderRadius: "12px", boxShadow: 3, height: '100%' }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                    Blood Group Availability
                  </Typography>
                  <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <ResponsiveContainer width="60%" height="100%">
                      <PieChart>
                        <Pie
                          data={bloodGroupData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius="80%"
                          label={renderCustomizedLabel}
                          labelLine={false}
                        >
                          {bloodGroupData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                      </PieChart>
                    </ResponsiveContainer>
                    <Box sx={{ ml: 1, flex: 1 }}>
                      {bloodGroupData.map((bg, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              backgroundColor: COLORS[i % COLORS.length],
                              mr: 1,
                              borderRadius: "50%"
                            }}
                          />
                          <Typography variant="body2">
                            {bg.name} - {bg.value}%
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Donor Growth - 20% */}
            <Grid item xs={12} md={6} lg={2.4} sx={{ height: '100%' }}>
              <Card sx={{ borderRadius: "12px", boxShadow: 3, height: '100%' }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Donor Growth
                  </Typography>
                  <Box sx={{ flex: 1 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={donorGrowth}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="donors" fill="#B30E08" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Requests per Month - 20% */}
            <Grid item xs={12} md={6} lg={2.4} sx={{ height: '100%' }}>
              <Card sx={{ borderRadius: "12px", boxShadow: 3, height: '100%' }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Requests per Month
                  </Typography>
                  <Box sx={{ flex: 1 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={requestsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="requests" fill="#B30E08" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Donations per Month - 20% */}
            <Grid item xs={12} md={6} lg={2.4} sx={{ height: '100%' }}>
              <Card sx={{ borderRadius: "12px", boxShadow: 3, height: '100%' }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Donations per Month
                  </Typography>
                  <Box sx={{ flex: 1 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={donationsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="donations" fill="#B30E08" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Units & Fulfillment - 10% (2 rows) */}
            <Grid item xs={12} md={6} lg={1.2} container sx={{ height: '100%' }}>
              <Grid item xs={12} sx={{ height: "48%", pb: 1 }}>
                <Card sx={{ 
                  borderRadius: "12px", 
                  boxShadow: 3, 
                  bgcolor: "#B30E08", 
                  color: "white", 
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <CardContent sx={{ textAlign: "center", p: 2 }}>
                    <Typography variant="subtitle2">Units Transferred</Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>
                      1,069
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8, mt: 1 }}>
                      +12% from last month
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sx={{ height: "48%", pt: 1 }}>
                <Card sx={{ 
                  borderRadius: "12px", 
                  boxShadow: 3, 
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <CardContent sx={{ textAlign: "center", p: 2, width: "100%" }}>
                    <Typography variant="subtitle2">Fulfillment Rate</Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#B30E08", my: 1 }}>
                      89%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={89}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        "& .MuiLinearProgress-bar": { bgcolor: "#B30E08" },
                      }}
                    />
                    <Typography variant="caption" sx={{ mt: 1, color: "text.secondary" }}>
                      Target: 95%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboard;