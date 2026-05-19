import type { HospitalSortType, OperationStatus } from '@/types/hospital.types';

export const OPERATION_STATUS_LABEL: Record<NonNullable<OperationStatus>, string> = {
  open: '영업중',
  before_open: '영업 전',
  closed: '영업 종료',
};

export const OPERATION_STATUS_STYLE: Record<NonNullable<OperationStatus>, string> = {
  open: 'bg-green-100 text-green-300 border-green-200',
  before_open: 'bg-yellow-100 text-yellow-300 border-yellow-200',
  closed: 'bg-gray-100 text-gray-300 border-gray-200',
};

export const SORT_OPTIONS: { value: HospitalSortType; label: string }[] = [
  { value: 'recommended', label: '추천순' },
  { value: 'distance', label: '거리순' },
];
