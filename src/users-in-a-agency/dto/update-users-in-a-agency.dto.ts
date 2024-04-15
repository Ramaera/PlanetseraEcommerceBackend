import { PartialType } from '@nestjs/swagger';
import { CreateUsersInAAgencyDto } from './create-users-in-a-agency.dto';

export class UpdateUsersInAAgencyDto extends PartialType(CreateUsersInAAgencyDto) {}
