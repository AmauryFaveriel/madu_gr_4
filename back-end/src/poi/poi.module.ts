import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PoiService } from './poi.service';
import { PoiController } from './poi.controller';
import { PoiSchema } from "./schemas/poi.schema";
import { GreenscoreModule } from 'src/greenscore/greenscore.module';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Poi', schema: PoiSchema }]),
      GreenscoreModule,
      UsersModule
    ],
    providers: [PoiService],
    controllers: [PoiController],
    exports: [PoiService]
  })
export class PoiModule {}
