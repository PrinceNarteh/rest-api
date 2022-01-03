import SessionModel from "../models/session.model";

export async function createSession(userId: string, userAgent: string) {
  return await SessionModel.create({ user: userId, userAgent });
}
