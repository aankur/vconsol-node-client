
import VconsolAxiosFactory from './vconsol-http-lib.js';
import MeetingService from './service/meeting-service.js';
import ScheduleService from './service/schedule-service.js';

class VconsolClient {
  #responseHandler;
  #meetingService;
  #scheduleService;

  constructor (baseURL, options) {
    this.#responseHandler = VconsolAxiosFactory(null, baseURL, options);
    this.#meetingService = new MeetingService(baseURL, this.#responseHandler);
    this.#scheduleService = new ScheduleService(this.#responseHandler);
  }

  get schedules () {
    return this.#scheduleService;
  }

  get meetings () {
    return this.#meetingService;
  }

  get responseHandler () {
    return this.#responseHandler;
  }
}

export default function VconsolClientFactory (baseURL, options) {
  return new VconsolClient(baseURL, options);
}
