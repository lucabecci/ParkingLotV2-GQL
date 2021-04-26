import { getModelForClass } from "@typegoose/typegoose";
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import UserModel from "../../../models/User";

@ValidatorConstraint({ async: true })
export class EmailCheckConstraint implements ValidatorConstraintInterface {
  validate(email: string): Promise<boolean> {
    const User = getModelForClass(UserModel)
    return User.findOne({ where: { email } }).then((user) => {
      if (user) return false;
      return true;
    });
  }
}

export function IsEmailAlreadyExist(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line @typescript-eslint/ban-types
  /* eslint-disable @typescript-eslint/ban-types */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: EmailCheckConstraint,
    });
  };
}