"use client";
import React, { useState } from "react";
import CaseStudiesSlider from "./CaseStudiesSlider";
import { X } from "react-feather";
import PdfViewer from "../common/PdfViewer";

const CaseStudies = ({ caseStudies }) => {
  const [showModal, setShowModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const openModalWithPdf = (url) => {
    setPdfUrl(url);
    setShowModal(true);
  };

  return (
    <div>
      <CaseStudiesSlider
        openModalWithPdf={openModalWithPdf}
        caseStudies={caseStudies}
      />

      {showModal && (
        <section className="fixed inset-0 z-30 grid h-screen bg-black/50 place-items-center">
          <div className="w-full h-full max-w-4xl mx-auto bg-white">
            <div className="flex justify-end">
              <X
                className="mx-2 my-2 cursor-pointer hover:text-gray-400"
                onClick={() => setShowModal(false)}
              />
            </div>
            <div className="h-full mx-4 overflow-auto">
              {pdfUrl ? <PdfViewer pdfUrl={pdfUrl} /> : <p>Loading PDF...</p>}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CaseStudies;
