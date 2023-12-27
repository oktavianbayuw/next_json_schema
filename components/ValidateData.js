import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

const ValidateData = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getFormData?page=${currentPage}`);
        const data = await response.json();

        if (response.ok) {
          setFormDataList(data.data || []);
          setTotalPages(Math.ceil(data.total / data.limit));
        } else {
          console.error("Error fetching data:", data.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleDelete = async (id) => {
    try {
      const isConfirmed = window.confirm(
        "Apakah anda yakin untuk menghapus data tersebut?"
      );
      // Panggil API atau implementasi penghapusan data di sini
      const response = await fetch(`/api/deleteFormData?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`Item with ID ${id} deleted successfully`);
        // Refresh data setelah menghapus untuk menampilkan perubahan
        fetchData();
      } else {
        const data = await response.json();
        console.error("Error deleting data:", data.error);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <>
      <Header />
      <main id="main">
        <section className="inner-page">
          <div className="card">
            <div className="container mt-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Validate Data
                  </li>
                </ol>
              </nav>
              <h2>Validate Data</h2>
            </div>
            <div className="card-body m-5">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">URL Path</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formDataList.map((formData, index) => (
                    <tr key={formData.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{formData.url_path}</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <Link
                            href={`/validate${formData.url_path}`}
                            className="btn btn-secondary"
                          >
                            <i className="fas fa-edit">Detail</i>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDelete(formData.id)}
                          >
                            <i className="fas fa-trash">Delete</i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      style={{ cursor: "pointer" }}
                      onClick={handlePreviousPage}
                      tabIndex="-1"
                    >
                      Previous
                    </a>
                  </li>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        style={{ cursor: "pointer" }}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      onClick={handleNextPage}
                      style={{ cursor: "pointer" }}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ValidateData;
