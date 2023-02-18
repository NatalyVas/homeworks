class AlarmClock {
  constructor() {
    this.alarmCollection = [],
    this.intervalId = null; 
  }

  addClock(time, callback) {
    if (time === null || callback === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    for(let item of this.alarmCollection) {
      if (item.hasOwnProperty(`time`) && item.time === time) {
        console.warn(`Уже присутствует звонок на это же время`);
        return;
      }
    } 
    this.alarmCollection.push({callback: callback, time: time, canCall: true});
  }

 removeClock(time) {
   this.alarmCollection = this.alarmCollection.filter(item => item.time != time);
 } 

  getCurrentFormattedTime() {
    let now = new Date();
    let time = `${now.getHours()}:${now.getMinutes()}`;
    return time;
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