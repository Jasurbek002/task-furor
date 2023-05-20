import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    column: [
      {
        label: "ID",
        name: "id",
        field: "id",
        headerStyle:
          "font-size:15px; text-transform: uppercase;padding:5px 20px",
        align: "left",
      },
      {
        label: "name",
        name: "name",
        field: "name_uz",
        headerStyle:
          "font-size:15px; text-transform: uppercase;padding:5px 20px",
        align: "left",
      },
      {
        label: "address",
        name: "address",
        field: "address",
        headerStyle:
          "font-size:15px; text-transform: uppercase;padding:5px 20px",
        align: "left",
      },
      {
        label: "cost",
        name: "cost",
        field: "cost",
        headerStyle:
          "font-size:15px; text-transform: uppercase;padding:5px 20px",
        align: "left",
      },
      {
        label: "type",
        name: "type",
        field: "product_type_id",
        headerStyle:
          "font-size:15px; text-transform: uppercase;padding:5px 20px",
        align: "left",
      },
      {
        label: "Edit",
        name: "edit",
        field: "edit",
        headerStyle:
          "font-size:15px; text-transform: uppercase;padding:5px 20px",
        align: "center",
      },
      {
        label: "delete",
        name: "delete",
        field: "delete",
        headerStyle:
          "font-size:15px; text-transform: uppercase;padding:5px 20px",
        align: "center",
      },
    ],

    data: [
      {
        address: "dsadas",
        cost: 312312,
        created_date: 1684579440000,
        id: 13296,
        name_uz: "dsadasd",
        product_type_id: 2,
      },
    ],
  }),
  getters: {
    getdataRow: (state) => state.data,
    getDataColumn: (state) => state.column,
  },

  actions: {
    setData(data:Array) {
      this.data = data;
    },
    getOneData(id:number){
      return this.data.find((el) => el.id === id)
    }
  },
});
