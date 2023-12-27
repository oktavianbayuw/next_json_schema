import pool from "../../config/db";

export default async function handler(req, res) {
  try {
    const { method, query } = req;

    if (method === "GET") {
      // ... (kode untuk menangani GET request seperti yang sudah Anda miliki)

    } else if (method === "DELETE") {
      const { id } = query;
      const connection = await pool.getConnection();

      try {
        // Lakukan penghapusan data berdasarkan ID
        await connection.query("DELETE FROM results WHERE id = ?", [id]);

        res.status(200).json({ success: true, message: "Data deleted successfully" });
      } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
      } finally {
        connection.release();
      }
    } else {
      res.status(405).json({ success: false, error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ success: false, error: error });
  }
}
