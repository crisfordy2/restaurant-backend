import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationStatusIdDto } from './create-reservation-status-id.dto';

export class UpdateReservationStatusIdDto extends PartialType(CreateReservationStatusIdDto) {}
