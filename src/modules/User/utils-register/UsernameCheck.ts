/* eslint-disable @typescript-eslint/ban-types */
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import {getModelForClass} from '@typegoose/typegoose'
import UserModel from "../../../models/User";

@ValidatorConstraint({ async: true })
export class UsernameCheckConstrain implements ValidatorConstraintInterface {
  validate(username: string): Promise<boolean> {
    const User = getModelForClass(UserModel)
    return User.findOne({ where: { username } }).then((user) => {
      if (user) return false;
      return true;
    });
  }
}

export function isUsernameAlreadyExists(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: UsernameCheckConstrain,
    });
  };
}