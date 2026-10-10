import { cookies } from 'next/headers';
import { prisma } from './prisma';

export const SESSION_COOKIE_NAME = 'calisthenic_session';

export interface UserSessionPayload {
  userId: string;
  email: string;
  nama: string;
}

export function createSessionToken(payload: UserSessionPayload): string {
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

export function parseSessionToken(token: string): UserSessionPayload | null {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    return JSON.parse(decoded) as UserSessionPayload;
  } catch {
    return null;
  }
}

export async function getSessionUser() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token) return null;

    const session = parseSessionToken(token);
    if (!session?.userId) return null;

    const user = await prisma.user.findUnique({
      where: { id: session.userId },
      select: { id: true, email: true, nama: true },
    });

    return user;
  } catch (error) {
    console.error('Error getSessionUser:', error);
    return null;
  }
}

