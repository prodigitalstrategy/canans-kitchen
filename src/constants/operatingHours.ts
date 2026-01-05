export type OperatingHoursEntry = {
  day: string;
  hours: string;
};

export const OPERATING_HOURS: OperatingHoursEntry[] = [
  { day: "Sunday", hours: "9 AM - 3 PM" },
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "8:30 AM - 2 PM" },
  { day: "Wednesday", hours: "8:30 AM - 2 PM" },
  { day: "Thursday", hours: "8:30 AM - 2 PM" },
  { day: "Friday", hours: "8:30 AM - 2 PM" },
  { day: "Saturday", hours: "9 AM - 3 PM" },
];
