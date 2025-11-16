import React from "react";

export default function InfoModal({ open, onClose, title, description }) {
  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: "fadeIn 0.2s ease-in-out"
      }}
    >
      <div
        className="modal-content"
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "50px 40px",
          minWidth: "500px",
          maxWidth: "700px",
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 20px 45px rgba(0,0,0,0.25)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          position: "relative"
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            background: "transparent",
            border: "none",
            fontSize: "2.2rem",
            cursor: "pointer",
            color: "#444",
            fontWeight: "bold",
            transition: "0.2s"
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#000")}
          onMouseLeave={e => (e.currentTarget.style.color = "#444")}
        >
          ×
        </button>

        <h2
          style={{
            marginTop: 0,
            marginBottom: 25,
            fontSize: "2.5rem",
            color: "#111",
            fontWeight: 700
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: "1.4rem",
            color: "#444",
            lineHeight: 1.8
          }}
        >
          {description}
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
