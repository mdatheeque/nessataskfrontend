// react import
import React from "react";
import { Fragment } from "react";

// Contant components import
import NavigationBar from "../Constants/NavigationBar";
import SubNavBar from "../Constants/SubNavBar";

// ReCharts import for dashboard
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

//Data for line chart
const dataLine = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

//data for pie chart
const dataPie = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

// Dashboard page component
const Dashboard = () => {
  // initial State
  // NOTE: After introducing the initial state from the consultation compnent to CONTEXT API or REDUX
  // We can fetch the data from there using the useContext and set this local intial state initialized below
  const initialState = {
    userDetails: {
      userName: "Muhammed Atheeque",
      userEmail: "namaelite@gmail.com",
      startingLetter: "MU",

      notifications: [
        "notification1",
        "notification2",
        "notification3",
        "notification4",
      ],
    },
  };

  //Dashboard page component
  return (
    <Fragment>
      .{/* Constants component - start */}
      <NavigationBar userDetails={initialState.userDetails} />
      <SubNavBar pageName="Go to report" />
      {/* Constants component - end */}
      {/* Body part of the Dashboard page - start */}
      <div
        style={{
          background: "#EFF3F4",
          display: "grid",
          gridTemplateColumns: "repeat(12,1fr)",
          columnGap: "30px",
        }}
      >
        {/* First pie chart element - start */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            borderRadius: "10px",
            border: "1px solid #EEEEEE",
            background: "white",
            gridColumn: "2/12",
            margin: "10px 0px",
          }}
        >
          <div
            style={{
              height: "75px",
              borderBottom: "1px solid #DFE9EF",
              padding: "0px 20px",
            }}
          >
            <h4>Total Active Domains</h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 300,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ResponsiveContainer>
                <PieChart>
                  <Pie dataKey="value" data={dataPie} fill="#8884d8" label />
                </PieChart>
              </ResponsiveContainer>
              <ResponsiveContainer>
                <PieChart>
                  <Pie dataKey="value" data={dataPie} fill="#8884d8" label />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* First pie chart element - end */}

        {/* Second line chart element - start */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            borderRadius: "10px",
            border: "1px solid #EEEEEE",
            background: "white",
            gridColumn: "2/12",
            margin: "10px 0px",
          }}
        >
          <div
            style={{
              height: "75px",
              borderBottom: "1px solid #DFE9EF",
              padding: "0px 20px",
            }}
          >
            <h4>Total Active Symtoms</h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%", height: 300, padding: "20px" }}>
              <ResponsiveContainer>
                <LineChart
                  width={500}
                  height={300}
                  data={dataLine}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* Second line chart element - end */}
      </div>
      {/* Body part of the Dashboard page - end */}
    </Fragment>
  );
};

export default Dashboard;
