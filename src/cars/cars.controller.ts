import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    @Get()
    getAllCars(): string[]{
        return ['toyota','spark','Jeep'];
    }
}
