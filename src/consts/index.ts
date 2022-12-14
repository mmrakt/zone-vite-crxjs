import { DailyPomodoro, Phase, StorageValue } from '../types'
import { testData } from '../utils/testDate'

export const DEFAULT_TIMER_LENGTH: {
  [T in Phase]: number
} = {
  focus: 5,
  break: 6,
  longBreak: 1800
}

export const DEFAULT_STORAGE_VALUE: StorageValue = {
  reminingSeconds: DEFAULT_TIMER_LENGTH.focus,
  phase: 'focus',
  isRunning: false,
  totalPomodoroCountsInSession: 0,
  dailyPomodoros: testData, // 開発用
  showNewTabNotificationWhenPomodoro: true,
  showNewTabNotificationWhenBreak: true,
  showDesktopNotificationWhenPomodoro: false,
  showDesktopNotificationWhenBreak: false,
  pomodoroLength: 25,
  breakLength: 5,
  longBreakLength: 30,
  pomodoroCountUntilLongBreak: 4
}

export const HISTORY_CSV_COLUMN_COUNT = 4

export const HISTORY_CSV_FILE_NAME = 'history.csv'

export const HISTORY_CSV_HEADER_ARRAY: Array<keyof DailyPomodoro> = [
  'year',
  'month',
  'day',
  'count'
]
export const BOM_ARRAY = [0xef, 0xbb, 0xbf]

export const FOCUS_BADGE_COLOR_CODE = '#0c4a6e'

export const BREAK_BADGE_COLOR_CODE = '#374151'

export const START_BREAK_HTML_PATH = 'chrome-extension://*/start-break.html'

export const POMODORO_LENGTH_ARRAY = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60
]
export const BREAK_LENGTH_ARRAY = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60
]
export const LONG_BREAK_LENGTH_ARRAY = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60
]

export const POMODORO_COUNT_UNTIL_LONG_BREAK = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const EXPIRE_PAGE = 'expire.html'
