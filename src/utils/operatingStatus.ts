import { OPERATING_HOURS } from "../constants/operatingHours";

export type OperatingStatus = {
  isOpen: boolean;
  statusText: string;
  statusType: "open" | "closed" | "closing-soon" | "opening-soon";
  nextChange: string | null;
};

/**
 * Get current time in Pacific timezone (Fountain Valley, CA)
 */
function getPacificTime(): Date {
  // Create a date string in Pacific timezone
  const now = new Date();
  const pacificTimeString = now.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  return new Date(pacificTimeString);
}

/**
 * Parse time string like "9 AM" or "8:30 AM" to minutes since midnight
 */
function parseTime(timeStr: string): number {
  const cleanTime = timeStr.trim().toUpperCase();
  const isPM = cleanTime.includes("PM");
  const timeWithoutAmPm = cleanTime.replace(/\s*(AM|PM)/, "");
  
  const parts = timeWithoutAmPm.split(":");
  let hours = parseInt(parts[0], 10);
  const minutes = parts.length > 1 ? parseInt(parts[1], 10) : 0;
  
  if (isPM && hours !== 12) {
    hours += 12;
  } else if (!isPM && hours === 12) {
    hours = 0;
  }
  
  return hours * 60 + minutes;
}

/**
 * Parse hours string like "9 AM - 3 PM" to start and end times
 */
function parseHoursRange(hoursStr: string): { start: number; end: number } | null {
  if (hoursStr.toLowerCase() === "closed") {
    return null;
  }
  
  const parts = hoursStr.split("-").map((s) => s.trim());
  if (parts.length !== 2) return null;
  
  return {
    start: parseTime(parts[0]),
    end: parseTime(parts[1]),
  };
}

/**
 * Format minutes since midnight to readable time
 */
function formatTime(minutes: number): string {
  const hours24 = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const hours12 = hours24 % 12 || 12;
  const ampm = hours24 < 12 ? "AM" : "PM";
  
  if (mins === 0) {
    return `${hours12} ${ampm}`;
  }
  return `${hours12}:${mins.toString().padStart(2, "0")} ${ampm}`;
}

/**
 * Get day name from Date object (in Pacific time)
 */
function getDayName(date: Date): string {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

/**
 * Get current operating status (uses Pacific Time for Fountain Valley, CA)
 */
export function getOperatingStatus(): OperatingStatus {
  const now = getPacificTime();
  const currentDay = getDayName(now);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  // Find today's hours
  const todayHours = OPERATING_HOURS.find((h) => h.day === currentDay);
  
  if (!todayHours || todayHours.hours.toLowerCase() === "closed") {
    // Restaurant is closed today, find next opening
    const nextOpen = findNextOpening(now);
    return {
      isOpen: false,
      statusText: nextOpen ? `Opens ${nextOpen}` : "Closed",
      statusType: "closed",
      nextChange: nextOpen,
    };
  }
  
  const range = parseHoursRange(todayHours.hours);
  if (!range) {
    const nextOpen = findNextOpening(now);
    return {
      isOpen: false,
      statusText: nextOpen ? `Opens ${nextOpen}` : "Closed",
      statusType: "closed",
      nextChange: nextOpen,
    };
  }
  
  // Check if currently within operating hours
  if (currentMinutes >= range.start && currentMinutes < range.end) {
    const minutesUntilClose = range.end - currentMinutes;
    
    // Check if closing soon (within 30 minutes)
    if (minutesUntilClose <= 30) {
      return {
        isOpen: true,
        statusText: `Closing at ${formatTime(range.end)}`,
        statusType: "closing-soon",
        nextChange: formatTime(range.end),
      };
    }
    
    return {
      isOpen: true,
      statusText: `Open until ${formatTime(range.end)}`,
      statusType: "open",
      nextChange: formatTime(range.end),
    };
  }
  
  // Not currently open
  if (currentMinutes < range.start) {
    // Haven't opened yet today
    const minutesUntilOpen = range.start - currentMinutes;
    
    if (minutesUntilOpen <= 60) {
      return {
        isOpen: false,
        statusText: `Opens at ${formatTime(range.start)}`,
        statusType: "opening-soon",
        nextChange: formatTime(range.start),
      };
    }
    
    return {
      isOpen: false,
      statusText: `Opens at ${formatTime(range.start)}`,
      statusType: "closed",
      nextChange: formatTime(range.start),
    };
  }
  
  // Already closed for today
  const nextOpen = findNextOpening(now);
  return {
    isOpen: false,
    statusText: nextOpen ? `Opens ${nextOpen}` : "Closed",
    statusType: "closed",
    nextChange: nextOpen,
  };
}

/**
 * Find next opening time/day
 */
function findNextOpening(from: Date): string | null {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayIndex = from.getDay();
  
  // Check next 7 days
  for (let i = 1; i <= 7; i++) {
    const checkDayIndex = (currentDayIndex + i) % 7;
    const checkDay = days[checkDayIndex];
    const dayHours = OPERATING_HOURS.find((h) => h.day === checkDay);
    
    if (dayHours && dayHours.hours.toLowerCase() !== "closed") {
      const range = parseHoursRange(dayHours.hours);
      if (range) {
        const timeStr = formatTime(range.start);
        if (i === 1) {
          return `${timeStr} Tomorrow`;
        }
        return `${timeStr} ${checkDay}`;
      }
    }
  }
  
  return null;
}

/**
 * Get today's hours as a formatted string
 */
export function getTodayHours(): string {
  const now = getPacificTime();
  const currentDay = getDayName(now);
  const todayHours = OPERATING_HOURS.find((h) => h.day === currentDay);
  
  return todayHours?.hours || "Closed";
}
