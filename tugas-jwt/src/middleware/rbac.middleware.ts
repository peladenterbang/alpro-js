import { RequestHandler } from "express";
import { IRequestWithUser } from "./auth.middleware";

const rbacMiddleware = (roles: string[]): RequestHandler => {
  return (req: IRequestWithUser, res, next) => {
    const userRoles = req.user?.roles;

    if (!userRoles || !userRoles.some((userRole) => roles.includes(userRole))) {
      res.status(403).json({ message: "Forbidden" });
      return; // Pastikan middleware berhenti di sini.
    }

    next(); // Lanjutkan ke middleware berikutnya jika lolos validasi.
  };
};

export default rbacMiddleware;

