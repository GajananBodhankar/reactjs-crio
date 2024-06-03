import React from "react";

function Modal({ setBool }) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        background: "rgba(173,173,173,0.5)",
        overflow: "hidden",
        opacity: "50",
        zIndex: 10,
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => setBool((prev) => !prev)}
    >
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        reiciendis!
        <button
          onClick={() => {
            setBool((prev) => !prev);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
