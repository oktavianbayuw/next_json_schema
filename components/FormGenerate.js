import React, { useState, useEffect } from "react";
import Link from "next/link";

const FormGenerate = () => {
  const [formData, setFormData] = useState({
    urlPath: "",
    jsonString: "",
    jsonSchema: null,
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showSuccessGenerate, setShowSuccessGenerate] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleGenerateSchema = async () => {
    try {
      const response = await fetch("/api/generateJsonSchema", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jsonString: formData.jsonString }),
      });

      if (response.ok) {
        const data = await response.json();
        setFormData((prevData) => ({
          ...prevData,
          jsonSchema: data.jsonSchema,
        }));
        setShowSuccessGenerate(true);
        setShowErrorAlert(false);
      } else {
        console.error("Error generating JSON Schema:", response.statusText);
        setErrorMessage("Error saat menghasilkan JSON Schema");
        setShowErrorAlert(true);
        setShowSuccessGenerate(false);
      }
    } catch (error) {
      console.error("Error generating JSON Schema:", error);
      setErrorMessage(
        "Error saat menghasilkan JSON Schema. Silakan coba lagi."
      );
      setShowErrorAlert(true);
      setShowSuccessGenerate(false);
    }
  };

  const handleInsertData = async () => {
    try {
      const response = await fetch("/api/insertData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Data inserted with ID:", data.insertedId);
        setShowSuccessAlert(true);
        setShowErrorAlert(false);
      } else {
        console.error("Error inserting data:", data.error);
        setErrorMessage(data.message || data.error);
        setShowErrorAlert(true);
        setShowSuccessAlert(false);
      }
    } catch (error) {
      console.error("Error inserting data:", error);
      setErrorMessage("Error saat menambahkan data. Silakan coba lagi.");
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSuccessAlert(false);
      setShowSuccessGenerate(false);
      setShowErrorAlert(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [showSuccessAlert, showSuccessGenerate, showErrorAlert]);

  return (
    <>
      <section className="inner-page">
        <div className="row">
          <div className="card">
            <div className="container mt-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Generate Schema
                  </li>
                </ol>
              </nav>
              <h2>Generate Schema</h2>
            </div>
            <div className="card-body m-5">
              {showSuccessAlert && (
                <div className="alert alert-success" role="alert">
                  Data Berhasil Ditambahkan
                </div>
              )}
              {showSuccessGenerate && (
                <div className="alert alert-success" role="alert">
                  Generate Schema Berhasil
                </div>
              )}
              {showErrorAlert && (
                <div className="alert alert-danger" role="alert">
                  Data Gagal Ditambahkan. Error: {errorMessage}
                </div>
              )}
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <form id="jsonForm">
                      <div className="form-group m-3">
                        <label htmlFor="urlPath">
                          <b>URL Path</b>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="urlPath"
                          value={formData.urlPath}
                          placeholder="Masukkan URL Path"
                          onChange={handleInputChange}
                        />
                        <small className="form-text text-muted">
                          <i>*Contoh : /a/b/c?d=1&e=2</i>
                        </small>
                      </div>
                      <div className="form-group m-3">
                        <label htmlFor="jsonString">
                          <b>JSON</b>
                        </label>
                        <textarea
                          className="form-control"
                          id="jsonString"
                          cols="30"
                          rows="10"
                          value={formData.jsonString}
                          placeholder="Masukkan JSON String"
                          onChange={handleInputChange}
                        ></textarea>
                        <button
                          id="btn-submit"
                          type="button"
                          className="btn btn-success btn-sm mt-2"
                          onClick={handleGenerateSchema}
                        >
                          Generate JSON Schema
                        </button>
                      </div>
                      <div className="form-group m-3">
                        <label htmlFor="jsonSchema">
                          <b>JSON Schema</b>
                        </label>
                        <textarea
                          className="form-control"
                          id="jsonSchema"
                          cols="30"
                          rows="10"
                          value={formData.jsonSchema || ""}
                          placeholder="Masukkan JSON Schema"
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <button
                        id="btn-submit"
                        type="button"
                        className="btn btn-primary mt-3 m-3"
                        onClick={handleInsertData}
                      >
                        Simpan
                      </button>
                      <Link href="/" className="btn btn-secondary">
                        Kembali
                      </Link>
                    </form>
                  </div>
                  <div className="col-md-6">
                    {formData.jsonSchema && (
                      <div className="alert alert-info" role="alert">
                        <h4 className="alert-heading">Hasil JSON Schema</h4>
                        <pre>
                          {JSON.stringify(formData.jsonSchema, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormGenerate;
