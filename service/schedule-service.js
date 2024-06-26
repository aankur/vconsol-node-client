export default class ScheduleService {
  #responseHandler;
  constructor (responseHandler) {
    this.#responseHandler = responseHandler;
  }

  async createMeetingSchedule (email, meetingScheduleParam) {
    const path = `/external/api/v1/schedules/${encodeURIComponent(email)}`;
    meetingScheduleParam.timeZone = meetingScheduleParam.timeZone || 'Asia/Kolkata';
    const { data } = await this.#responseHandler.post(
      path,
      meetingScheduleParam
    );
    return data;
  }

  async rescheduleMeetingSchedule (email, meetingID, meetingScheduleParam) {
    const path = `/external/api/v1/schedules/${encodeURIComponent(email)}/${encodeURIComponent(meetingID)}/reschedule`;
    const { data } = await this.#responseHandler.put(
      path,
      meetingScheduleParam
    );
    return data;
  }
}
