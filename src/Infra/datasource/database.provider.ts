import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'loja.db',
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    migrationsRun: false,
    subscribers: [],
    logging: false,
});

export const databaseProviders = [
    {
        provide: 'AppDataSource',
        useFactory: async () => AppDataSource.initialize(),
    },
];