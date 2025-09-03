import pino from 'pino';

export function createLogger(level = 'info') {
  const isDev = process.env.NODE_ENV !== 'production';
  return pino({
    level,
    transport: isDev
      ? { target: 'pino-pretty', options: { translateTime: 'HH:MM:ss.l' } }
      : undefined
  });
}
