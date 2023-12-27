import pool from "../../config/db";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { page = 1, limit = 10 } = req.query;
      const connection = await pool.getConnection();

      try {
        const offset = (page - 1) * limit;
        const [results] = await connection.query(
          "SELECT * FROM results ORDER BY id DESC LIMIT ? OFFSET ?",
          [limit, offset]
        );

        const total = await connection.query(
          "SELECT COUNT(*) as total FROM results"
        );
        const totalCount = total[0][0].total;

        res.status(200).json({
          success: true,
          data: results,
          total: totalCount,
          limit: parseInt(limit, 10),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
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
