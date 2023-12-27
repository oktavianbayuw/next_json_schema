import Ajv from "ajv";
const ajv = new Ajv();
export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { jsonResponse, jsonSchema } = req.body;
      const isJson = (str) => {
        try {
          JSON.parse(str);
        } catch (e) {
          return false;
        }
        return true;
      };
      if (isJson(jsonResponse) === true) {
        const jsonSchemaParseToObj = eval(`(${jsonSchema})`);
        // console.log(jsonSchemaParseToObj);
        // console.log(jsonResponse);
        const validate = ajv.compile(jsonSchemaParseToObj);
        const isValid = validate(JSON.parse(jsonResponse));
        if (isValid) {
          res
            .status(200)
            .json({ success: true, message: "Your JSON Is Valid" });
        } else {
          res.status(400).json({
            success: false,
            error: "Your JSON Is Not Valid",
            errors: validate.errors,
          });
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
