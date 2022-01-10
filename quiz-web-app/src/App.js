import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import "./App.css";
import { customStyles } from "./TableStyle";
import moment from "moment";

const CustomLoader = () => (
  <div style={{ padding: "24px" }}>
    <div className="Spinner" />
  </div>
);

const columns = [
  {
    id: 1,
    name: "Time",
    selector: (row) => moment(row.createdAt).format('DD/MM/YYYY HH:MM A'),
    sortable: true,
    reorder: true,
  },
  {
    id: 2,
    name: "Selected Option",
    selector: (row) => row.selectedOption,
    sortable: true,
    reorder: true,
  },
  {
    id: 3,
    name: "Descriptive Answer",
    selector: (row) => row.descAnswer,
    reorder: true,
  },
];

function App() {
  const [pending, setPending] = React.useState();
  const [rows, setRows] = React.useState([]);

  const getData = async () => {
    setPending(true);
    try {
      const data = await fetch("http://localhost:3005/results/", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const resultData = await data.json();
      if (resultData.success) setRows(resultData.results);
    } catch (error) {
      console.log(error);
    }
    setPending(false);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Card className="Card">
        <DataTable
          title="Quiz Results"
          columns={columns}
          data={rows}
          pagination
          progressPending={pending}
          progressComponent={<CustomLoader />}
          highlightOnHover
          responsive
          customStyles={customStyles}
        />
      </Card>
    </div>
  );
}

export default App;
