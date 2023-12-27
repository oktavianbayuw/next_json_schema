import pool from "../../config/db";
import Ajv from "ajv";

const ajv = new Ajv();

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { urlPath, jsonString } = req.body;

      const connection = await pool.getConnection();
      const isJson = (str) => {
        try {
          JSON.parse(str);
        } catch (e) {
          return false;
        }
        return true;
      };
      if (isJson(jsonString) === true) {
        try {
          const [results] = await connection.query(
            "SELECT json_schema FROM results WHERE url_path = ?",
            [urlPath]
          );

          console.log(results);
          if (results.length === 0) {
            res
              .status(404)
              .json({ success: false, error: "JSON Schema not found" });
            return;
          }

          const jsonSchemaFromDB = JSON.parse(results[0].json_schema);
          validateJsonSchema(jsonString, jsonSchemaFromDB, res);
        } catch (error) {
          console.error("Error fetching JSON schema:", error);
          res
            .status(500)
            .json({ success: false, error: "Internal Server Error" });
        } finally {
          connection.release();
        }
      } else {
        res
          .status(500)
          .json({ success: false, error: "Your JSON Structure Is Not Valid" });
      }
    } else {
      res.status(405).json({ success: false, error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}

function validateJsonSchema(jsonString, jsonSchema, res) {
  const validate = ajv.compile(jsonSchema);
  const isValid = validate(JSON.parse(jsonString));

  if (isValid) {
    res.status(200).json({ success: true, message: "JSON validation passed" });
  } else {
    res.status(400).json({
      success: false,
      error: "JSON validation failed",
      errors: validate.errors,
    });
  }
}
