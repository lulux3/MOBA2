export interface HolidayType {
  name: string;
  date: string;
  public: boolean;
  uuid: string;
}

export interface HolidayProps {
  holiday: HolidayType;
}

export interface HolidayListProps {
  holidays: HolidayType[];
  loading: boolean;
  error: string | null;
}
