import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/Project'),
  TypeOrmModule.forRoot({
    name:'default',
    type: 'mongodb',
    host: 'localhost',
    port: 27017, 
    database: 'Project',
    useNewUrlParser:true,
    autoLoadEntities:true,
    useUnifiedTopology:true,

  }),
  ,UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
