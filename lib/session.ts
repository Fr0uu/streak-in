import { cookies } from 'next/headers';
import { createHmac, timingSafeEqual } from 'crypto';
import { prisma } from './prisma';

export const SESSION_COOKIE_NAME = 'calisthenic_session';

const SESSION_SECRET =
  process.env.SESSION_SECRET ||
  'streakin-session-secure-key-92847291-change-in-production';

export interface UserSessionPayload {
  userId: string;
  email: string;
  nama: string;
}

/**
 * Buat HMAC-SHA256 signature untuk data string
 */
function signData(data: string): string {
  return createHmac('sha256', SESSION_SECRET).update(data).digest('hex');
}

/**
 * Buat signed token sesi: payloadBase64.signatureHex
 */
export function createSessionToken(payload: UserSessionPayload): string {
  const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString('base64');
  const signature = signData(payloadBase64);
  return `${payloadBase64}.${signature}`;
}

/**
 * Verifikasi signature token sesi dan parse payload
 */
export function parseSessionToken(token: string): UserSessionPayload | null {
  try {
    if (!token || !token.includes('.')) return null;

    const [payloadBase64, signature] = token.split('.');
    if (!payloadBase64 || !signature) return null;

    // Verifikasi HMAC signature dengan timingSafeEqual
    const expectedSignature = signData(payloadBase64);
    const sigBuf = Buffer.from(signature, 'hex');
    const expectedBuf = Buffer.from(expectedSignature, 'hex');

    if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) {
      return null;
    }

    const decoded = Buffer.from(payloadBase64, 'base64').toString('utf-8');
    const parsed = JSON.parse(decoded) as UserSessionPayload;
    if (!parsed || !parsed.userId) return null;

    return parsed;
  } catch {
    return null;
  }
}

/**
 * Ambil data user dari session cookie yang valid
 */
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
