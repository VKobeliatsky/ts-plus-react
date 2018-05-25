
export type Services = {
    getTime(): string;
};

const services: Services = {
    getTime: () => new Date().toLocaleTimeString()
};

export default services;