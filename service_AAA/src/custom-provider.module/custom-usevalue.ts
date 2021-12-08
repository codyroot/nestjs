export const customUseValue = {
    getMessage() {
        return "useValue from const Object";
    },
};

export const customUseValueToken = {
    getMessage() {
        return "useValue from Token";
    },
};

export const customUseValueInterface = {
    getMessage() {
        return "useValue from Interface";
    },
};

export const TOKEN_USE_VALUE = Symbol.for("token");
export const INTERFACE_USE_VALUE = Symbol.for("interface");
