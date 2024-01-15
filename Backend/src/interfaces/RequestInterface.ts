import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface RequestExtends extends Request {
  user?: string | JwtPayloadWithEmail | JwtPayloadWithID | JwtPayload;
}

interface JwtPayloadWithEmail extends JwtPayload {
  email: string;
}

interface JwtPayloadWithID extends JwtPayload {
  id: string;
}
