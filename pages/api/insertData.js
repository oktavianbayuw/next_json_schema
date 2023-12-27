import pool from "../../config/db";
import Ajv from "ajv";

const ajv = new Ajv();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { urlPath, jsonString, jsonSchema } = req.body;

      // console.log(jsonSchema);
      const connection = await pool.getConnection();

      const isJson = (str) => {
        try {
          JSON.parse(str);
        } catch (e) {
          return false;
        }
        return true;
      };

      if (isJson(jsonString)) {
        const data = JSON.parse(jsonString);

        try {
          const json_string = JSON.parse(jsonString);
          const json_schema = jsonSchema.replace(/(\r\n|\n|\r)/gm, "");
          const json_remove_space = json_schema.replace(/\s/g, "");
          console.log("Start Insert Database");
          console.log("Schema : ", json_remove_space);
          const [results] = await connection.query(
            "INSERT INTO results (url_path, json_string, json_schema, status) VALUES (?, ?, ?, ?)",
            [
              urlPath,
              JSON.stringify(json_string),
              JSON.stringify(json_remove_space),
              1,
            ]
          );

          const insertedId = results.insertId;
          res.status(200).json({
            success: true,
            message: "Success Insert Data",
            insertedId,
          });
        } catch (error) {
          console.error("Error inserting data:", error);
          res.status(500).json({ success: false, error: error.message });
        } finally {
          connection.release();
        }
      } else {
        res.status(500).json({
          message: "Data JSON Is Invalid Type",
        });
      }
    } else {
      res.status(405).json({ success: false, error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ success: false, error: error });
  }
}
