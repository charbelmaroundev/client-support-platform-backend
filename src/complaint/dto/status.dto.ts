import { IsEnum, IsOptional } from 'class-validator';
import { Sort, Status } from '../../types/index.type';

export class StatusDto {
  @IsEnum(Status, {
    message: `Status should be ${Status.INPROGRESS}, ${Status.PENDING}, ${Status.REJECTED}, ${Status.RESOLVED}!`,
  })
  readonly status: Status;
}

export class StatusAndSortDto {
  @IsOptional()
  @IsEnum(Status, {
    message: `Status should be ${Status.INPROGRESS}, ${Status.PENDING}, ${Status.REJECTED}, ${Status.RESOLVED}!`,
  })
  readonly status: Status;

  @IsOptional()
  @IsEnum(Sort, {
    message: `Sorting by ${Sort.ASC} or ${Sort.DESC}!`,
  })
  readonly sort: Sort;
}
