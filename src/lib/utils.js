export const formatFullDate = (date) =>
    date.toLocaleString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

export const formatWeatherDaysDate = (weatherDate) =>
    new Date(weatherDate).toLocaleString(undefined, {
        month: "long",
        day: "numeric",
    });

export const formatWeatherHoursDate = (weatherDate) =>
    new Date(weatherDate).toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric",
    });

export const temperatureCalculate = (temperature) => {
    return ((temperature - 32) * 0.5555556).toFixed(1)
}