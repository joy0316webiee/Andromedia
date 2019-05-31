<template id="calendar">
  <div class="calendar">
    <header class="header">
      <div class="left-arr" @click="previousMonth"></div>
      <span>{{ currentMonthLabel }} {{ currentYear }}</span>
      <div class="right-arr" @click="nextMonth"></div>
    </header>
    <div
      class="headings"
      v-for="(dayLabel, index) in dayLabels"
      v-bind:key="'dayOfWeek' + index"
    >{{ dayLabel }}</div>
    <div
      v-for="(day, index) in daysArray"
      class="day"
      :class="dayClassObj(day)"
      v-bind:key="'day' + index"
    >
      <button @click="setSelectedDate(day)">{{ day.date | formatDateToDay }}</button>
    </div>
  </div>
</template>

<script>
import dateFns from "date-fns";

const DAY_LABELS = ["天", "一", "二", "三", "四", "五", "六"];
const MONTH_LABELS = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月"
];

export default {
  data() {
    return {
      today: null,
      selectedDate: null,
      currDateCursor: null,
      dayLabels: null
    };
  },
  created() {
    this.dayLabels = DAY_LABELS.slice();
    this.today = new Date();
    this.selectedDate = this.today;
    this.currDateCursor = this.today;
  },
  props: {
    startDate: {
      required: false,
      type: Date
    }
  },
  computed: {
    currentMonth() {
      return this.currDateCursor.getMonth();
    },
    currentYear() {
      return this.currDateCursor.getFullYear();
    },
    currentMonthLabel() {
      return MONTH_LABELS[this.currentMonth];
    },
    daysArray() {
      const date = this.currDateCursor;
      const startOfMonth = dateFns.startOfMonth(date);
      const endOfMonth = dateFns.endOfMonth(date);
      //const days = dateFns.eachDay(startOfMonth, endOfMonth);

      const days = dateFns.eachDay(startOfMonth, endOfMonth).map(day => ({
        date: day,
        isCurrentMonth: dateFns.isSameMonth(
          new Date(this.currentYear, this.currentMonth),
          day
        ),
        isToday: dateFns.isToday(day),
        isSelected: dateFns.isSameDay(this.selectedDate, day)
      }));

      // gen the days from last month
      let previousMonthCursor = dateFns.lastDayOfMonth(
        dateFns.addMonths(date, -1)
      );
      const begIndex = dateFns.getDay(days[0].date);
      for (let i = begIndex; i > 0; i--) {
        days.unshift({
          date: previousMonthCursor,
          isCurrentMonth: false,
          isToday: dateFns.isToday(previousMonthCursor),
          isSelected: dateFns.isSameDay(this.selectedDate, previousMonthCursor)
        });
        previousMonthCursor = dateFns.addDays(previousMonthCursor, -1);
      }

      // gen days for next month
      const daysNeededAtEnd = days.length % 7 > 0 ? 7 - (days.length % 7) : 0;
      let nextMonthCursor = dateFns.addMonths(date, 1);
      nextMonthCursor = dateFns.setDate(nextMonthCursor, 1);
      for (let x = 1; x <= daysNeededAtEnd; x++) {
        days.push({
          date: nextMonthCursor,
          isCurrentMonth: false,
          isToday: dateFns.isToday(nextMonthCursor),
          isSelected: dateFns.isSameDay(this.selectedDate, nextMonthCursor)
        });
        nextMonthCursor = dateFns.addDays(nextMonthCursor, 1);
      }
      return days;
    }
  },
  mounted() {
    if (this.startDate) {
      this.currDateCursor = this.startDate;
      this.selectedDate = this.startDate;
    }
  },
  methods: {
    dayClassObj(day) {
      return {
        today: day.isToday,
        currentMonth: day.isCurrentMonth,
        selected: day.isSelected
      };
    },
    nextMonth() {
      this.currDateCursor = dateFns.addMonths(this.currDateCursor, 1);
    },
    previousMonth() {
      this.currDateCursor = dateFns.addMonths(this.currDateCursor, -1);
    },
    setSelectedDate(day) {
      this.selectedDate = day.date;
      this.$emit("input", this.selectedDate);
    }
  },
  filters: {
    formatDateToDay(val) {
      return dateFns.format(val, "D");
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";

.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 274px;
  height: 283px;

  > .header {
    padding: 0.75rem;
    font-size: 1.25rem;
    grid-column: 1 / span 7;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 30px;

    .left-arr {
      width: 0px;
      height: 0px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #999999;
      transform: rotate(90deg);
    }
    span {
    }
    .right-arr {
      width: 0px;
      height: 0px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #999999;
      transform: rotate(-90deg);
    }
    > div {
      width: 8px;
      height: 12px;
      background-size: contain;

      &:hover {
        cursor: pointer;
      }
    }
    > span {
      flex: 1;
      text-align: center;
      font-weight: 800;
      color: #3793fb;
      font-size: 25px;
      font-weight: 900;
    }
  }

  > * {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  > .headings {
    color: #777;
    font-weight: 300;
    font-size: 16px;
    text-transform: uppercase;
    padding-bottom: 5px;
  }
  > .day {
    &.today {
      button {
        color: #282828;
        font-weight: 500;
        background-color: #ccd5db;
        border-radius: 50%;
        width: 25px;
        height: 25px;
      }
    }
    &.currentMonth {
      button {
        color: #282828;
      }
    }
    &::before {
      content: "";
      display: inline-block;
      height: 0;
      padding-bottom: 6px;
      width: 1px;
    }

    button {
      color: inherit;
      background: transparent;
      border: none;
      height: 100%;
      width: 100%;
      font-size: 15px;
      color: #9e9e9e;
      font-weight: 500;
    }
  }
}

.text-center {
  text-align: center;
}
</style>