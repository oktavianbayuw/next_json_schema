import React from 'react'

export default function Breadcumbs() {
  return (
    <section id="breadcrumbs" className="breadcrumbs">
        <div className="container mt-5">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Generate Schema</li>
            </ol>
            </nav>
          <h2>Generate Schema</h2>
        </div>
      </section>
  )
}