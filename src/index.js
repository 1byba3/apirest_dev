import express from 'express';
//CREAR UNA INSTANCIA DE EXPRESS
const app = express();
//CONFIGURAR EL PUERTO
const PORT = 8000;
//ESPECIFICAR JSON
app.use(express.json());

// ✅ Array de estudiantes (datos quemados)
let students = [
  {
    id: 1,
    firstName: "Juan",
    lastName: "Perez",
    age: 20,
    email: "juan.perez@email.com",
    phone: "+503 7000 0000",
    address: {
      country: "El Salvador",
      city: "San Salvador",
    },
    isActive: true,
    courses: ["Matemáticas", "Programación", "Base de Datos"],
  },
];

// ✅ 1. GET ALL
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// ✅ 2. GET BY ID
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Estudiante no encontrado",
    });
  }

  res.status(200).json(student);
});

// ✅ 3. POST (crear)
app.post("/students", (req, res) => {
  const { firstName, lastName, age } = req.body;

  if (!firstName || !lastName || !age) {
    return res.status(400).json({
      message: "Faltan datos obligatorios",
    });
  }

  const newStudent = {
    id: students.length + 1,
    ...req.body,
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Estudiante creado correctamente",
    data: newStudent,
  });
});

// ✅ 4. PUT (actualizar)
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Estudiante no encontrado",
    });
  }

  students[index] = {
    ...students[index],
    ...req.body,
  };

  res.status(200).json({
    message: "Estudiante actualizado",
    data: students[index],
  });
});

// ✅ 5. DELETE
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Estudiante no encontrado",
    });
  }

  const deletedStudent = students.splice(index, 1);

  res.status(200).json({
    message: "Estudiante eliminado",
    data: deletedStudent[0],
  });
});

// ✅ Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});