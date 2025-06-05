
document.addEventListener("DOMContentLoaded", function () {
  const firebaseConfig = {
    apiKey: "AIzaSyBdKakTDCyqNU2vPKKLvW1k8RT1rUxxU3Y",
    authDomain: "estanquilloapp.firebaseapp.com",
    projectId: "estanquilloapp",
    storageBucket: "estanquilloapp.appspot.com",
    messagingSenderId: "895904393569",
    appId: "1:895904393569:web:d08471432b0a15b61f4184"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const form = document.getElementById("formProducto");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const stock = parseInt(document.getElementById("stock").value);

    try {
      await db.collection("productos").add({
        nombre,
        precio,
        stock,
        creado: new Date()
      });

      alert("✅ Producto guardado exitosamente");
      form.reset();
    } catch (error) {
      console.error("❌ Error al guardar producto:", error);
      alert("Ocurrió un error al guardar.");
    }
  });
});
