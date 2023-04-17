import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      userEmail: string
      userId: string
      user: {
        name: string;
        email: string;
        id: string;
      };
    }
  }
}