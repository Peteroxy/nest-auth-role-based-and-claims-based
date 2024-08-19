import { Role } from "src/users/enums/role.enum";
import { PermissionType } from "../authorization/permission.type";

export interface ActiveUserData{

  //the "sublect" of the token. The vcalue of this property is the user Id that vgransted this token
  sub: number;

  //the subject's (user) email.
  email: string;

  role: Role;

  permissions: PermissionType[];
  
}