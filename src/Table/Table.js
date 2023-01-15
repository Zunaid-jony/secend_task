import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const Table = () => {
  const [services, setService] = useState([]);

  const [filterValue, setFilterValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://light-of-islam-server-production-0204.up.railway.app/schedule"
  //     )
  //     .then((res) => setPosts(res.data));
  // }, []);


  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  useEffect(() => {
    fetch(
      "https://light-of-islam-server-production-0204.up.railway.app/schedule"
    )
      .then((responce) => responce.json())
      .then((data) => {
        setService(data);
        setSearchData(data);
      });
  }, []);

  const handleFilter = (e) => {
    if (e.target.value == "") {
      setService(searchData);
    } else if (e.target.value !== "") {
      const filterResult = searchData.filter((card) =>
        (card?.scholarName).toLowerCase().includes(e.target.value.toLowerCase())
      );
      setService(filterResult);
    } else {
      const filterResultupazila = searchData.filter((card1) =>
        (card1?.city).toLowerCase().includes(e.target.value.toLowerCase())
      );
      setService(filterResultupazila);
    }

    setFilterValue(e.target?.value);
  };

  return (
    <div className="container ml-auto mr-auto mt-8 ">
      <div className="flex justify-between mb-2">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear"
          className="p-button-outlined"
        />
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            placeholder="Keyword Search"
            value={filterValue}
            onInput={(e) => handleFilter(e)}
          />
        </span>
      </div>
      <div>
        <DataTable
          value={services}
          responsiveLayout="scroll"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          dataKey="id"
          paginator
          className="datatable-responsive p-datatable-customers"
          // currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
          rows={10}
          emptyMessage="No customers found."
          footer="Footer"
          showGridlines
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          // filters={filters2} filterDisplay="row" loading={loading2}
        >
        
          <Column field="_id" sortable header="_id"></Column>
          <Column field="phone" sortable header="phone"></Column>
          <Column field="nid" sortable header="nid"></Column>
          <Column field="area" sortable header="area"></Column>
          <Column field="city" sortable header="city"></Column>
          <Column field="upazila" sortable header="upazila"></Column>
          <Column field="postCode" sortable header="postCode"></Column>
          <Column field="status" sortable header="status"></Column>
          <Column field="scholarName" sortable header="scholarName"></Column>
          <Column field="userEmail" sortable header="userEmail"></Column>
          
        </DataTable>
      </div>
    </div>
  );
};

export default Table;
