/**
 * @author WMXPY
 * @namespace Factory
 * @description Declare
 */

import { MarkedMixin } from "@sudoo/marked";

export interface IMarkedMixinFactory {

    createInjectMixin(variableName: string): MarkedMixin;
    createProvideMixin(moduleName: string): MarkedMixin;
}
