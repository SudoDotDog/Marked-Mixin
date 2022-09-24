/**
 * @author WMXPY
 * @namespace MarkedMixin
 * @description Wrap
 */

import { ISandbox } from "@sudoo/marked";

// eslint-disable-next-line @typescript-eslint/ban-types
export const wrapMarkedMixinFunction = (sandbox: ISandbox, func: Function): Function => {

    return (...args: any[]) => {
        if (sandbox.usingAdditionalArgument) {
            return func(...args.slice(1));
        }
        return func(...args);
    };
};
