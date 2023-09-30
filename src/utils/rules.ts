import dayjs, { Dayjs } from "dayjs";

export const rules = {
  required: (message: string = "Obligatory field") => ({
    required: true,
    message,
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Dayjs) {
      if (value && (value.isSame(dayjs()) || value.isAfter(dayjs()))) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
