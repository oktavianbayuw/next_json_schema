import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ValidateDataByUrlPath = () => {
  const router = useRouter();
  const { url_path } = router.query;
  const [formData, setFormData] = useState({
    urlPath: "",
    jsonString: "",
    jsonSchema: null,
  });
  const [validationResult, setValidationResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/getFormDataByUrlPath?url_path=${url_path}`
        );
        const data = await response.json();
        if (response.ok) {
          // Parse JSON schema string to object
          const jsonSchema = JSON.parse(data.data.json_schema);

          setFormData({
            urlPath: data.data.url_path,
            jsonSchema: jsonSchema,
          });
        } else {
          console.error("Error fetching data:", data.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (url_path) {
      fetchData();
    }
  }, [url_path]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleValidateData = async () => {
    try {
      const response = await fetch("/api/validateJsonData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonResponse: formData.jsonString,
          jsonSchema: formData.jsonSchema, // Use formData.jsonSchema directly
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setValidationResult({ success: true, message: data.message });
      } else {
        const data = await response.json();
        console.error("Validation failed:", data.error, data.errors);
        setValidationResult({
          success: false,
          error: data.error,
          errors: data.errors,
        });
      }
    } catch (error) {
      console.error("Error validating data:", error);
    }
  };

  return (
    <>
    <Header></Header>
      <main id="main">
        <section className="inner-page">
          <div className="card mr-5">
            <div className="card-body m-3">
              {/* Display validation result */}
              {validationResult && (
                <div
                  className={`alert ${
                    validationResult.success ? "alert-success" : "alert-danger"
                  }`}
                  role="alert"
                >
                  {validationResult.success
                    ? validationResult.message
                    : `Error: ${validationResult.error}`}
                </div>
              )}
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">URL Path</label>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="/jsonValidate"
                    disabled
                    value={formData.urlPath}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="jsonStringInput">Json Response</label>
                  <textarea
                    className="form-control mt-3"
                    id="jsonString"
                    rows="3"
                    placeholder="Enter JSON Response"
                    value={formData.jsonString}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleValidateData}
                >
                  Validate
                </button>
                <a href="/validate" className="btn btn-danger m-4">
                  Kembali
                </a>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default ValidateDataByUrlPath;
