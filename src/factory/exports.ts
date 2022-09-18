/**
 * @author WMXPY
 * @namespace MarkedMixin_Factory
 * @description Exports
 */

import { ISandbox, MarkedMixin } from "@sudoo/marked";

export class MarkedExportsMixinFactory {

    public static fromExports(exports: Record<string, any>): MarkedExportsMixinFactory {

        return new MarkedExportsMixinFactory(exports);
    }

    private readonly _exports: Record<string, any>;

    private constructor(exports: Record<string, any>) {

        this._exports = exports;
    }

    public createInjectMixin(variableName: string): MarkedMixin {

        return (sandbox: ISandbox) => {

            sandbox.inject(variableName, {
                ...this._exports,
            });
            return;
        };
    }

    public createProvideMixin(moduleName: string): MarkedMixin {

        return (sandbox: ISandbox) => {

            sandbox.provide(moduleName, {
                ...this._exports,
            });
            return;
        };
    }
}
