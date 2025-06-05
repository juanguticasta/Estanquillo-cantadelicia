
const firebaseConfig = {
  apiKey: "AIzaSyBdKakTDCyqNU2vPKKLvW1k8RT1FqaROkg",
  authDomain: "estanquilloapp.firebaseapp.com",
  projectId: "estanquilloapp",
  storageBucket: "estanquilloapp.firebasestorage.app",
  messagingSenderId: "895904393569",
  appId: "1:895904393569:web:3632c09a5dfc713f31fd20"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function mostrarFormulario() {
    document.getElementById('formulario').style.display = 'block';
}

function guardarProducto() {
    const nombre = document.getElementById('nombre').value;
    const precioPublico = parseFloat(document.getElementById('precio_publico').value);
    const precioBar = parseFloat(document.getElementById('precio_bar').value);
    const categoria = document.getElementById('categoria').value;
    const tipo = document.getElementById('tipo').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (!nombre || !precioPublico || !categoria || !tipo || !cantidad) {
        document.getElementById('mensaje').innerText = "Por favor completa todos los campos.";
        return;
    }

    db.collection("productos").add({
        nombre,
        precioPublico,
        precioBar,
        categoria,
        tipo,
        cantidad,
        creado: new Date()
    })
    .then(() => {
        document.getElementById('mensaje').innerText = "✅ Producto guardado exitosamente.";
        document.getElementById('formulario').reset();
    })
    .catch((error) => {
        console.error("Error al guardar producto:", error);
        document.getElementById('mensaje').innerText = "❌ Error al guardar producto.";
    });
}
