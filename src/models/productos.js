import connection from "../utils/db.js"

 class producto{
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM productos");
      // Retorna los productos obtenidos
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  }
 }
 export default producto;