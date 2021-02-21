"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomName = void 0;
exports.randomName = () => {
    return Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
};
//# sourceMappingURL=shared-utils.js.map