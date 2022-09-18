/**
 * @author WMXPY
 * @namespace MarkedMixin_Factory
 * @description Exports
 */

import { ISandbox, MarkedMixin } from "@sudoo/marked";

export class MarkedExportsMixinFactory {

    public static fromExports(exports: Record<string, any>): MarkedExportsMixinFactory {

        return new MarkedExportsMixinFactory(
            new Map<string, any>(Object.entries(exports)),
        );
    }

    private readonly _exports: Map<string, any>;

    private constructor(exports: Map<string, any>) {

        this._exports = exports;
    }
}
