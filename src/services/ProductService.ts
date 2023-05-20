import { api } from "src/boot/axios";
import { useDataStore } from "src/stores/data";
import { navigate } from "src/utils/Navigate";

const store = useDataStore();

class ProductService {
  constructor() {}

  async getProducts() {
    try {
      const { data } = await api.get("/product");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async postProducts(product: object) {
    try {
      const data = await api.post("/product", product);
      if (data.status === 200) navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async editProduct(product: object) {
    try {
      const data = await api.put("/product", product);
      if (data.status === 200) navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id: number) {
    try {
      const data = await api.delete(`/product/${id}`);
      if (data.status === 200) navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ProductService();
