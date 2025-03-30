import { createError } from 'payload/utilities';

const WINDOW_SIZE = 3600000;
const MAX_REQUEST = 5;

const submissions = new Map<string, number[]>();


export const rateLimit = async (ip?: string) => {
    if (!ip) return;

    const now = Date.now();
    const userSubmissions = submissions.get(ip) || [];

    const recent = userSubmissions.filter(time => now - time < WINDOW_SIZE);

    if (recent.length >= MAX_REQUEST) {
        throw createError('Too many submissions. Please try again later');
    }

    recent.push(now);
    submissions.set(ip, recent);
}

