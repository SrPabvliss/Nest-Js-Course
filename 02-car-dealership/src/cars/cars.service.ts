import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Injectable()
export class CarsService {


  private cars: ICar[] = [
    {
      id: uuid(),
      brand:'Toyota',
      model: 'Corola'
    },
    {
      id: uuid(),
      brand:'Honda',
      model: 'Civic'
    },
    {
      id: uuid(),
      brand:'Jeep',
      model: 'Cherokee'
    },
  ];

  findAll(){
    return this.cars;
  }

  findOneById(id: string){
    const car = this.cars.find((car) => car.id === id);
    if(!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create (createCarDto: CreateCarDto){
    const newCar = {id:uuid(),...createCarDto}
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto){
    
    let carDB = this.findOneById(id);
    if (updateCarDto.id && updateCarDto.id !== id) throw new BadRequestException('Id cannot be updated')

    this.cars = this.cars.map((car) => {

      if (car.id === id){
        carDB = {...carDB, ...updateCarDto, id}
        return carDB;
      }

      return car;
    });

    return carDB;

  }

  delete (id: string){
    let carDB = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== carDB.id);
    return;
  }

}
