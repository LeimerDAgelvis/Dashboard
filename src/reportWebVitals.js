//De forma predeterminada, Create React App incluye un repetidor de rendimiento que le permite medir y analizar el rendimiento de su aplicación utilizando diferentes métricas.
//Para medir cualquiera de las métricas admitidas, solo necesita pasar una función a la reportWebVitals función en index.js

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
