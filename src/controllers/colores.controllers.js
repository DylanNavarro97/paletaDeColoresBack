import Color from "../database/model/color.js";

export const listarColores = async (req, res) => {
  try {
    const colores = await Color.find();
    res.status(200).json(colores);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo encontrar la lista de colores",
    });
  }
};

export const crearColor = async (req, res) => {
  try {
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({
      mensaje: "El color fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo crear el color",
    });
  }
};

export const borrarColor = async (req, res) => {
  try {
    const buscarColor = await Color.findById(req.params.id);
    if (!buscarColor) {
      res
        .satus(404)
        .json({ mensaje: "No se pudo eliminar el color, la id es incorrecta" });
    }

    await Color.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ mensaje: "El producto fue eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar eliminar el color" });
  }
};
