const sharedValue = 42;

export const getValue = async () => Promise.resolve(sharedValue);
