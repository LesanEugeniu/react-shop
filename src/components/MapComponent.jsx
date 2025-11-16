function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src='${src}']`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
import { useEffect, useRef } from "react";

export default function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    const src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly`;
    loadScript(src).catch((err) => {
      console.error("Google Maps script failed to load", err);
    });
    window.initMap = async function () {
      const uluru = { lat: 46.98540438147725, lng: 28.87041512636892 };
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 4,
        center: uluru,
        mapId: "DEMO_MAP_ID", // Înlocuiește cu mapId-ul tău real din Google Cloud Console
      });
      // Importă biblioteca marker și folosește AdvancedMarkerElement
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
      new AdvancedMarkerElement({
        map,
        position: uluru,
      });
    };
  }, []);

  return (
    <div
      id="map"
      ref={mapRef}
      style={{ width: "100%", height: "600px", borderRadius: "12px" }}
    />
  );
}
