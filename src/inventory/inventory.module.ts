import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventorySchema } from './schemas/inventory.schema/inventory.schema';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'InventoryItem', schema: InventorySchema }]),
  ],
  providers: [InventoryService],
  controllers: [InventoryController],
})
export class InventoryModule {}
