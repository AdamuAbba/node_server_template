export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_CONNECTION_URL: string;
      JWT_SECRET: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
