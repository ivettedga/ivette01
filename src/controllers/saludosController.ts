import { Request, Response } from 'express';

export const hola = async (req: Request, res: Response) => {
  res.status(200).json({messages: `Bienvenido a mi api`});
};

export const adios = async (req: Request, res: Response) => {
  res.status(301).json({messages: `Vuelve pronto a mi api`});
};