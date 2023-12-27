import pool from "../../config/db";
export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { url_path } = req.query;
      const connection = await pool.getConnection();
      try {
        const dataArray = url_path.split(",");
        const url = `/${dataArray.join("/")}`;
        const [results] = await connection.query(
          "SELECT * FROM results WHERE url_path = ?",
          [url]
        );
        console.log(url);
        if (results.length > 0) {
          res.status(200).json({ success: true, data: results[0] });
        } else {
          res.status(404).json({ success: false, error: "Data not found" });
        }
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
