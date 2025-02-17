import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { env } from 'process';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: 'usersdb',
      autoLoadEntities: true,
      synchronize: true,  
    }),
    UserModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
