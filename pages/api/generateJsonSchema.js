import generateSchema from "json-schema-generator";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { jsonString } = req.body;
    const jsonData = JSON.parse(jsonString);
    // Generate JSON Schema
    const generatedJsonSchema = generateSchema(jsonData);
    res.status(200).json({ jsonSchema: generatedJsonSchema });
  } catch (error) {
    console.error("Error generating JSON Schema:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
