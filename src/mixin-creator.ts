/**
 * @author WMXPY
 * @namespace MarkedMixin
 * @description Mixin Creator
 */

import { ISandbox, MarkedMixin } from "@sudoo/marked";

export type CreateSingleModuleMarkedMixinOption = {

    readonly provideModuleName: string;
    readonly exports: Map<string, any>;
};

export const createSingleModuleMarkedMixin = (
    option: CreateSingleModuleMarkedMixinOption,
) => {

    const mixin: MarkedMixin = (sandbox: ISandbox) => {

        if (sandbox.usingAdditionalArgument) {

        }
    };

    return;
};
