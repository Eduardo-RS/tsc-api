import { Request, Response } from "express";
import User from "../database/entities/user.entity";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

// export const getUserID = async (req: Request, res: Response) => {
//   console.log(req.params);
//   const { id } = req.params;

//   const user = await User.findOneBy({ id: parseInt(req.params.id) });
//   if (!user) {
//     return res.status(404).json({ message: "User does not exist" });
//   } else {
//     return User.findOneBy();
//   }
// };

//Create user or Insert Users

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { firstName, lastName } = req.body; // Leer req enviados con json
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    await user.save();
    //   res.send()
    res.json(user);
  } catch (error) {
    // console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { id } = req.params; // Extraer el ID

    //Buscar si hay un usuario con el ID
    const user = await User.findOneBy({ id: parseInt(req.params.id) });
    if (!user) return res.status(404).json({ message: "User does not exists" }); // Validar si el id del usuario existe
    await User.update({ id: parseInt(id) }, req.body);

    //   console.log(user);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await User.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
