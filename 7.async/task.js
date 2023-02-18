class AlarmClock {
  constructor() {
    this.alarmCollection = [],
    this.intervalId = null; 
  }

  addClock(time, callback) {
    if (time === null || callback === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    } 
    if (this.alarmCollection.some(item => item.time === time)) {
      console.warn(`Уже присутствует звонок на это же время`);
    }
    this.alarmCollection.push({callback: callback, time: time, canCall: true});
  }

 removeClock(time) {
   this.alarmCollection = this.alarmCollection.filter(item => item.time != time);
 } 

  getCurrentFormattedTime() {
    let now = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return now;
  } 

  start() {
    if (this.intervalId != null) {
      return;
    }
    this.intervalId = setInterval(() => this.alarmCollection.forEach(call => {
      if (call.time === this.getCurrentFormattedTime() && call.canCall) {
      call.canCall = false;
      call.callback();
      }
    }), 1000);
  
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(call => call.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}